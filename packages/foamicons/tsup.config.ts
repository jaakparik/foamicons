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

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    ...getIconEntries(),
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
