import { readdir, readFile, writeFile, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename } from 'path';

const ICONS_SOURCE = join(process.cwd(), 'icons');
const ICONS_OUTPUT = join(process.cwd(), 'src/icons');
const INDEX_OUTPUT = join(process.cwd(), 'src/index.ts');

// Convert filename to PascalCase component name
function toPascalCase(str: string): string {
  return str
    .replace(/\.svg$/, '')
    .replace(/[-_\s]+(\w)/g, (_, c) => c.toUpperCase())  // Handle dashes, underscores, and spaces
    .replace(/^(\w)/, (_, c) => c.toUpperCase());
}

// Convert PascalCase to kebab-case for class names
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

// Extract SVG content and clean it up
function processSvg(svgContent: string): { viewBox: string; children: string } {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16';

  // Extract inner content (everything between <svg> and </svg>)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  let children = innerMatch ? innerMatch[1].trim() : '';

  // Replace hardcoded colors with currentColor
  children = children.replace(/fill="#[0-9A-Fa-f]{3,6}"/g, 'fill="currentColor"');
  children = children.replace(/stroke="#[0-9A-Fa-f]{3,6}"/g, 'stroke="currentColor"');
  children = children.replace(/fill="black"/g, 'fill="currentColor"');
  children = children.replace(/stroke="black"/g, 'stroke="currentColor"');
  children = children.replace(/fill="white"/g, 'fill="currentColor"');
  children = children.replace(/stroke="white"/g, 'stroke="currentColor"');

  // Convert kebab-case attributes to camelCase for React
  children = children.replace(/fill-rule=/g, 'fillRule=');
  children = children.replace(/clip-rule=/g, 'clipRule=');
  children = children.replace(/clip-path=/g, 'clipPath=');
  children = children.replace(/stroke-width=/g, 'strokeWidth=');
  children = children.replace(/stroke-linecap=/g, 'strokeLinecap=');
  children = children.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  children = children.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');
  children = children.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  children = children.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
  children = children.replace(/stroke-opacity=/g, 'strokeOpacity=');
  children = children.replace(/fill-opacity=/g, 'fillOpacity=');

  // Convert inline style strings to React style objects
  children = children.replace(/style="([^"]+)"/g, (_, styleStr: string) => {
    const styles = styleStr.split(';').filter(Boolean).map((s: string) => {
      const [prop, val] = s.split(':').map((p: string) => p.trim());
      // Convert kebab-case to camelCase
      const camelProp = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
      return `${camelProp}: '${val}'`;
    });
    return `style={{${styles.join(', ')}}}`;
  });

  return { viewBox, children };
}

// Generate component code
function generateComponent(name: string, viewBox: string, children: string): string {
  const kebabName = toKebabCase(name);
  return `import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ${name} = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, strokeWidth = 1, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      className={['foamicon', 'foamicon-${kebabName}', className].filter(Boolean).join(' ')}
      aria-hidden="true"
      {...props}
    >
      ${children}
    </svg>
  )
);

${name}.displayName = '${name}';
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

    const { viewBox, children } = processSvg(svgContent);
    const componentCode = generateComponent(name, viewBox, children);

    const outputPath = join(ICONS_OUTPUT, `${name}.tsx`);
    await writeFile(outputPath, componentCode);

    iconNames.push(name);
    console.log(`  ✓ ${name}`);
  }

  // Generate index.ts
  const indexContent = `// Auto-generated - do not edit manually
export type { IconProps, Icon } from './types';

${iconNames.map((name) => `export { ${name} } from './icons/${name}';`).join('\n')}

// Icon names for tooling
export const iconNames = ${JSON.stringify(iconNames)} as const;
`;

  await writeFile(INDEX_OUTPUT, indexContent);

  console.log(`\n✓ Generated ${iconNames.length} icon components`);
  console.log('✓ Generated index.ts');
}

main().catch(console.error);
