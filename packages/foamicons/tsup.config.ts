import { defineConfig } from 'tsup';
import { readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';

// Build entry points for per-icon exports
function getIconEntries(): Record<string, string> {
  const iconsDir = join(process.cwd(), 'src/icons');

  if (!existsSync(iconsDir)) {
    return {};
  }

  const entries: Record<string, string> = {};
  const files = readdirSync(iconsDir);

  for (const file of files) {
    if (file.endsWith('.tsx') && file !== 'index.ts') {
      const name = basename(file, '.tsx');
      entries[`icons/${name}`] = `src/icons/${file}`;
    }
  }

  // Add icons barrel export
  if (files.includes('index.ts')) {
    entries['icons/index'] = 'src/icons/index.ts';
  }

  return entries;
}

// Build entry points for per-logo exports
function getLogoEntries(): Record<string, string> {
  const logosDir = join(process.cwd(), 'src/logos');

  if (!existsSync(logosDir)) {
    return {};
  }

  const entries: Record<string, string> = {};
  const files = readdirSync(logosDir);

  for (const file of files) {
    if (file.endsWith('.tsx') && file !== 'index.ts') {
      const name = basename(file, '.tsx');
      entries[`logos/${name}`] = `src/logos/${file}`;
    }
  }

  // Add logos barrel export
  if (files.includes('index.ts')) {
    entries['logos/index'] = 'src/logos/index.ts';
  }

  return entries;
}

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    ...getIconEntries(),
    ...getLogoEntries(),
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['react', 'react/jsx-runtime', 'react-dom'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxDev = false;
  },
});
