import { describe, it, expect } from 'vitest';
import { existsSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const ICONS_OUTPUT = join(process.cwd(), 'src/icons');
const INDEX_OUTPUT = join(process.cwd(), 'src/index.ts');

describe('Build output', () => {
  it('generates icons directory', () => {
    expect(existsSync(ICONS_OUTPUT)).toBe(true);
  });

  it('generates index.ts', () => {
    expect(existsSync(INDEX_OUTPUT)).toBe(true);
  });

  it('generates icon component files', () => {
    const files = readdirSync(ICONS_OUTPUT);
    const tsxFiles = files.filter((f) => f.endsWith('.tsx'));
    expect(tsxFiles.length).toBeGreaterThan(0);
  });

  describe('Generated icon file structure', () => {
    it('icon files use createFoamicon factory', () => {
      const files = readdirSync(ICONS_OUTPUT);
      const firstIcon = files.find((f) => f.endsWith('.tsx'));

      if (firstIcon) {
        const content = readFileSync(join(ICONS_OUTPUT, firstIcon), 'utf-8');
        expect(content).toContain("import { createFoamicon } from '../createFoamicon'");
        expect(content).toContain('createFoamicon(');
      }
    });

    it('icon files have IconNode type', () => {
      const files = readdirSync(ICONS_OUTPUT);
      const firstIcon = files.find((f) => f.endsWith('.tsx'));

      if (firstIcon) {
        const content = readFileSync(join(ICONS_OUTPUT, firstIcon), 'utf-8');
        expect(content).toContain('IconNode');
        expect(content).toContain('const __iconNode: IconNode');
      }
    });

    it('icon files have JSDoc with preview', () => {
      const files = readdirSync(ICONS_OUTPUT);
      const firstIcon = files.find((f) => f.endsWith('.tsx'));

      if (firstIcon) {
        const content = readFileSync(join(ICONS_OUTPUT, firstIcon), 'utf-8');
        expect(content).toContain('@component');
        expect(content).toContain('@preview');
        expect(content).toContain('data:image/svg+xml;base64,');
      }
    });

    it('icon nodes have unique keys', () => {
      const files = readdirSync(ICONS_OUTPUT);
      const firstIcon = files.find((f) => f.endsWith('.tsx'));

      if (firstIcon) {
        const content = readFileSync(join(ICONS_OUTPUT, firstIcon), 'utf-8');
        // Check that key property exists in the icon node
        expect(content).toMatch(/key:\s*'[a-z0-9]+'/);
      }
    });
  });

  describe('Index file structure', () => {
    it('main index exports types', () => {
      const content = readFileSync(INDEX_OUTPUT, 'utf-8');
      expect(content).toContain('export type { IconProps, IconNode, IconNodeElement, FoamIcon }');
    });

    it('main index exports createFoamicon', () => {
      const content = readFileSync(INDEX_OUTPUT, 'utf-8');
      expect(content).toContain('export { createFoamicon }');
    });

    it('main index exports Icon component', () => {
      const content = readFileSync(INDEX_OUTPUT, 'utf-8');
      expect(content).toContain('export { Icon }');
    });

    it('main index has iconNames array', () => {
      const content = readFileSync(INDEX_OUTPUT, 'utf-8');
      expect(content).toContain('export const iconNames');
    });

    it('main index has alias exports', () => {
      const content = readFileSync(INDEX_OUTPUT, 'utf-8');
      // Check for {Name}Icon alias pattern
      expect(content).toMatch(/export \{ \w+ as \w+Icon \}/);
      // Check for Foam{Name} alias pattern
      expect(content).toMatch(/export \{ \w+ as Foam\w+ \}/);
    });
  });
});
