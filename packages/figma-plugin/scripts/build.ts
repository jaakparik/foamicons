import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// Load .env file
function loadEnv(): Record<string, string> {
  const envPath = join(process.cwd(), '.env');
  const env: Record<string, string> = {};

  if (existsSync(envPath)) {
    const content = readFileSync(envPath, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key) {
          env[key.trim()] = valueParts.join('=').trim();
        }
      }
    }
  }

  return env;
}

async function build() {
  const env = loadEnv();
  const isWatch = process.argv.includes('--watch');

  // Define environment variables for injection
  const define: Record<string, string> = {
    'process.env.FIGMA_API_TOKEN': JSON.stringify(env.FIGMA_API_TOKEN || ''),
  };

  const commonOptions: esbuild.BuildOptions = {
    bundle: true,
    define,
    logLevel: 'info',
  };

  // Build plugin code (runs in Figma's sandbox)
  const codeOptions: esbuild.BuildOptions = {
    ...commonOptions,
    entryPoints: ['src/code.ts'],
    outfile: 'dist/code.js',
    target: 'es2020',
  };

  // Build UI code (runs in iframe) - output to temp file
  const uiOptions: esbuild.BuildOptions = {
    ...commonOptions,
    entryPoints: ['src/ui.ts'],
    outfile: 'dist/ui.js',
    target: 'es2020',
    write: false, // Don't write, we'll inline it
  };

  if (isWatch) {
    // For watch mode, just build normally
    const codeCtx = await esbuild.context(codeOptions);
    const uiCtx = await esbuild.context({
      ...uiOptions,
      write: true,
    });

    await Promise.all([
      codeCtx.watch(),
      uiCtx.watch(),
    ]);

    console.log('Watching for changes...');
  } else {
    // Build code.js
    await esbuild.build(codeOptions);

    // Build UI and inline into HTML
    const uiResult = await esbuild.build(uiOptions);
    const uiJs = uiResult.outputFiles?.[0]?.text || '';

    // Read the HTML template from src
    const htmlTemplate = readFileSync('src/ui.html', 'utf-8');

    // Replace the placeholder with inline script
    const inlinedHtml = htmlTemplate.replace(
      '<!-- UI_SCRIPT_PLACEHOLDER -->',
      `<script>${uiJs}</script>`
    );

    // Write the updated HTML
    writeFileSync('dist/ui.html', inlinedHtml);

    console.log('Build complete!');
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
