import { readdir, readFile, writeFile, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import {
  toPascalCase,
  toKebabCase,
  parseSvg,
  generateBase64Preview,
  getIconVariant,
  type IconNode,
} from '@foamicons/core';

// Paths relative to monorepo root
const MONOREPO_ROOT = join(process.cwd(), '../..');
const ICONS_SOURCE = join(MONOREPO_ROOT, 'icons');
const ICONS_OUTPUT = join(process.cwd(), 'src/icons');
const INDEX_OUTPUT = join(process.cwd(), 'src/index.ts');

// Generate JSDoc comment for an icon
function generateJsDoc(name: string, svgContent: string): string {
  const base64 = generateBase64Preview(svgContent);
  const kebabName = toKebabCase(name);

  return `/**
 * @component @name ${name}
 * @description Foamicon SVG icon component, renders a \`<svg>\` element
 * @preview ![img](data:image/svg+xml;base64,${base64})
 * @see https://foamicons.com/icons/${kebabName}
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */`;
}

// Generate component code using createFoamicon
function generateComponent(
  name: string,
  iconNode: IconNode,
  jsDoc: string
): string {
  // Format the icon node as a clean array of tuples
  const iconNodeStr = JSON.stringify(iconNode, null, 2)
    .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
    .replace(/"/g, "'"); // Use single quotes for values

  return `import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = ${iconNodeStr};

${jsDoc}
export const ${name} = createFoamicon('${name}', __iconNode);
`;
}

// Generate icons/index.ts for barrel export
function generateIconsIndex(iconNames: string[]): string {
  const exports = iconNames.map((name) => `export { ${name} } from './${name}';`);
  return `// Auto-generated - do not edit manually
${exports.join('\n')}
`;
}

// Generate main index.ts with all exports and aliases
function generateMainIndex(iconNames: string[]): string {
  const exports: string[] = [];

  // Primary exports
  iconNames.forEach((name) => {
    exports.push(`export { ${name} } from './icons/${name}';`);
  });

  // Alias exports: {Name}Icon and Foam{Name}
  iconNames.forEach((name) => {
    exports.push(`export { ${name} as ${name}Icon } from './icons/${name}';`);
    exports.push(`export { ${name} as Foam${name} } from './icons/${name}';`);
  });

  return `// Auto-generated - do not edit manually
export type { IconProps, IconNode, FoamIcon } from './types';
export { createFoamicon } from './createFoamicon';
export { Icon } from './Icon';

${exports.join('\n')}

// Icon names for tooling
export const iconNames = ${JSON.stringify(iconNames.sort())} as const;
`;
}

async function main() {
  console.log('Building Foamicons...\n');

  // Clean and recreate output directory
  if (existsSync(ICONS_OUTPUT)) {
    await rm(ICONS_OUTPUT, { recursive: true });
  }
  await mkdir(ICONS_OUTPUT, { recursive: true });

  // Read all SVG files
  const files = await readdir(ICONS_SOURCE);
  const svgFiles = files.filter((f) => f.endsWith('.svg'));

  console.log(`Found ${svgFiles.length} SVG files\n`);

  const iconNames: string[] = [];

  for (const file of svgFiles) {
    const filePath = join(ICONS_SOURCE, file);
    const svgContent = await readFile(filePath, 'utf-8');
    const name = toPascalCase(file);
    const variant = getIconVariant(file);

    const { iconNode } = parseSvg(svgContent, variant);
    const jsDoc = generateJsDoc(name, svgContent);
    const componentCode = generateComponent(name, iconNode, jsDoc);

    const outputPath = join(ICONS_OUTPUT, `${name}.tsx`);
    await writeFile(outputPath, componentCode);

    iconNames.push(name);
    console.log(`  ✓ ${name}`);
  }

  // Generate icons/index.ts
  const iconsIndexContent = generateIconsIndex(iconNames);
  await writeFile(join(ICONS_OUTPUT, 'index.ts'), iconsIndexContent);

  // Generate main index.ts
  const indexContent = generateMainIndex(iconNames);
  await writeFile(INDEX_OUTPUT, indexContent);

  console.log(`\n✓ Generated ${iconNames.length} icon components`);
  console.log('✓ Generated icons/index.ts');
  console.log('✓ Generated index.ts with aliases');
}

main().catch(console.error);
