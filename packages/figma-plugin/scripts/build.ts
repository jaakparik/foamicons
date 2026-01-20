import * as esbuild from 'esbuild';
import { readFileSync, existsSync } from 'fs';
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

  // Build UI code (runs in iframe)
  const uiOptions: esbuild.BuildOptions = {
    ...commonOptions,
    entryPoints: ['src/ui.ts'],
    outfile: 'dist/ui.js',
    target: 'es2020',
  };

  if (isWatch) {
    const codeCtx = await esbuild.context(codeOptions);
    const uiCtx = await esbuild.context(uiOptions);

    await Promise.all([
      codeCtx.watch(),
      uiCtx.watch(),
    ]);

    console.log('Watching for changes...');
  } else {
    await Promise.all([
      esbuild.build(codeOptions),
      esbuild.build(uiOptions),
    ]);

    console.log('Build complete!');
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
