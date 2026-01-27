import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  external: ['react', 'react/jsx-runtime', 'react-dom'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxDev = false;
  },
});
