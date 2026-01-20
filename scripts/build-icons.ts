import { readdir, readFile, writeFile, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const ICONS_SOURCE = join(process.cwd(), 'icons');
const ICONS_OUTPUT = join(process.cwd(), 'src/icons');
const INDEX_OUTPUT = join(process.cwd(), 'src/index.ts');

// Convert filename to PascalCase component name
function toPascalCase(str: string): string {
  return str
    .replace(/\.svg$/, '')
    .replace(/[-_\s]+(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^(\w)/, (_, c) => c.toUpperCase());
}

// Convert PascalCase to kebab-case for class names
function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Generate a deterministic short hash key for SVG elements
function generateKey(tag: string, attrs: Record<string, string>, index: number): string {
  const str = `${tag}-${JSON.stringify(attrs)}-${index}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36).slice(0, 6);
}

// Map of SVG attribute names to React camelCase equivalents
const SVG_ATTR_MAP: Record<string, string> = {
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity',
};

// Parse an SVG element string into tag and attributes
function parseElement(elementStr: string): { tag: string; attrs: Record<string, string> } | null {
  // Match self-closing tags like <path ... /> or <circle ... />
  const match = elementStr.match(/^<(\w+)\s+([^>]*?)\s*\/?>$/s);
  if (!match) return null;

  const tag = match[1];
  const attrsStr = match[2];

  const attrs: Record<string, string> = {};

  // Parse attributes - handle both single and double quoted values
  const attrRegex = /(\S+?)=["']([^"']*?)["']/g;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
    let attrName = attrMatch[1];
    let attrValue = attrMatch[2];

    // Convert attribute name to camelCase if needed
    if (SVG_ATTR_MAP[attrName]) {
      attrName = SVG_ATTR_MAP[attrName];
    }

    // Replace hardcoded colors with currentColor
    // Note: Keep fill="white" as-is because it's used in clipPath/mask definitions
    if (attrName === 'fill') {
      if (
        attrValue.match(/^#[0-9A-Fa-f]{3,6}$/) ||
        attrValue === 'black'
      ) {
        attrValue = 'currentColor';
      }
      // Keep fill="white" unchanged for clipPath masks
    } else if (attrName === 'stroke') {
      if (
        attrValue.match(/^#[0-9A-Fa-f]{3,6}$/) ||
        attrValue === 'black' ||
        attrValue === 'white'
      ) {
        attrValue = 'currentColor';
      }
    }

    attrs[attrName] = attrValue;
  }

  // Handle secondary color for elements with opacity
  // Convert fill/stroke with opacity to use CSS custom properties
  if (attrs.fillOpacity && attrs.fill === 'currentColor') {
    attrs.fill = 'var(--foamicon-secondary-color, currentColor)';
    attrs.style = { fillOpacity: `var(--foamicon-secondary-opacity, ${attrs.fillOpacity})` };
    delete attrs.fillOpacity;
  }
  if (attrs.strokeOpacity && attrs.stroke === 'currentColor') {
    attrs.stroke = 'var(--foamicon-secondary-color, currentColor)';
    attrs.style = {
      ...attrs.style,
      strokeOpacity: `var(--foamicon-secondary-opacity, ${attrs.strokeOpacity})`
    };
    delete attrs.strokeOpacity;
  }

  return { tag, attrs };
}

// Extract SVG elements and convert to IconNode format
function parseSvgToIconNode(
  svgContent: string
): { viewBox: string; iconNode: Array<[string, Record<string, string>]> } {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16';

  // Extract inner content (everything between <svg> and </svg>)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const innerContent = innerMatch ? innerMatch[1].trim() : '';

  // Match all SVG elements (self-closing)
  const elementRegex = /<(\w+)\s+[^>]*?\/?>/g;
  const elements: Array<[string, Record<string, string>]> = [];

  let elementMatch;
  let index = 0;
  while ((elementMatch = elementRegex.exec(innerContent)) !== null) {
    const elementStr = elementMatch[0];
    const parsed = parseElement(elementStr);

    if (parsed) {
      // Add unique key for React
      const key = generateKey(parsed.tag, parsed.attrs, index);
      parsed.attrs.key = key;

      elements.push([parsed.tag, parsed.attrs]);
      index++;
    }
  }

  return { viewBox, iconNode: elements };
}

// Generate base64-encoded SVG for JSDoc preview
function generateBase64Preview(svgContent: string): string {
  // Clean SVG for preview - replace black with currentColor for better visibility
  const cleanedSvg = svgContent
    .replace(/stroke="black"/g, 'stroke="currentColor"')
    .replace(/fill="black"/g, 'fill="currentColor"')
    .replace(/stroke="#[0-9A-Fa-f]{3,6}"/g, 'stroke="currentColor"')
    .replace(/fill="#[0-9A-Fa-f]{3,6}"/g, 'fill="currentColor"');

  return Buffer.from(cleanedSvg).toString('base64');
}

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
  iconNode: Array<[string, Record<string, string>]>,
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

    const { iconNode } = parseSvgToIconNode(svgContent);
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
