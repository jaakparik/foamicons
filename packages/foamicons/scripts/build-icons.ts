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
const ALIASES_FILE = join(MONOREPO_ROOT, 'icons/aliases.json');
const ICONS_OUTPUT = join(process.cwd(), 'src/icons');
const INDEX_OUTPUT = join(process.cwd(), 'src/index.ts');

// Type for alias data
interface AliasEntry {
  aliases: string[];
  tags: string[];
}
type AliasData = Record<string, AliasEntry>;

// Load and validate aliases
async function loadAliases(): Promise<AliasData> {
  if (!existsSync(ALIASES_FILE)) {
    console.log('No aliases.json found, skipping alias generation');
    return {};
  }

  const content = await readFile(ALIASES_FILE, 'utf-8');
  return JSON.parse(content) as AliasData;
}

// Validate aliases don't conflict with canonical icon names
function validateAliases(aliases: AliasData, canonicalNames: Set<string>): void {
  const allAliases = new Map<string, string>(); // alias -> canonical name

  for (const [iconName, entry] of Object.entries(aliases)) {
    for (const alias of entry.aliases) {
      // Check if alias matches a canonical icon name
      if (canonicalNames.has(alias)) {
        throw new Error(
          `Alias conflict: "${alias}" for icon "${iconName}" matches an existing icon name`
        );
      }

      // Check for duplicate aliases across icons
      if (allAliases.has(alias)) {
        throw new Error(
          `Duplicate alias: "${alias}" is used by both "${allAliases.get(alias)}" and "${iconName}"`
        );
      }

      allAliases.set(alias, iconName);
    }
  }
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
function generateMainIndex(
  iconNames: string[],
  aliases: AliasData,
  baseNameMap: Map<string, string[]> // baseName -> [Name, NameDuotone, NameFill]
): string {
  const exports: string[] = [];

  // Primary exports
  iconNames.forEach((name) => {
    exports.push(`export { ${name} } from './icons/${name}';`);
  });

  // Built-in alias exports: {Name}Icon and Foam{Name}
  iconNames.forEach((name) => {
    exports.push(`export { ${name} as ${name}Icon } from './icons/${name}';`);
    exports.push(`export { ${name} as Foam${name} } from './icons/${name}';`);
  });

  // Custom alias exports from aliases.json
  for (const [baseName, entry] of Object.entries(aliases)) {
    const variants = baseNameMap.get(baseName);
    if (!variants) continue; // Icon not found, skip

    for (const alias of entry.aliases) {
      const aliasPascal = toPascalCase(alias);

      for (const canonicalName of variants) {
        // Determine variant suffix
        let suffix = '';
        if (canonicalName.endsWith('Duotone')) suffix = 'Duotone';
        else if (canonicalName.endsWith('Fill')) suffix = 'Fill';

        const aliasName = aliasPascal + suffix;

        // Primary alias export
        exports.push(`export { ${canonicalName} as ${aliasName} } from './icons/${canonicalName}';`);
        // {Alias}Icon export
        exports.push(`export { ${canonicalName} as ${aliasName}Icon } from './icons/${canonicalName}';`);
        // Foam{Alias} export
        exports.push(`export { ${canonicalName} as Foam${aliasName} } from './icons/${canonicalName}';`);
      }
    }
  }

  // Generate iconAliases map for website/tooling (PascalCase)
  const iconAliasesMap: Record<string, string[]> = {};
  for (const [baseName, entry] of Object.entries(aliases)) {
    const pascalBase = toPascalCase(baseName);
    if (entry.aliases.length > 0) {
      iconAliasesMap[pascalBase] = entry.aliases.map((a) => toPascalCase(a));
    }
  }

  // Generate aliasToCanonical map (reverse lookup)
  const aliasToCanonical: Record<string, string> = {};
  for (const [baseName, entry] of Object.entries(aliases)) {
    const pascalBase = toPascalCase(baseName);
    for (const alias of entry.aliases) {
      aliasToCanonical[toPascalCase(alias)] = pascalBase;
    }
  }

  // Generate iconTags map for search
  const iconTagsMap: Record<string, string[]> = {};
  for (const [baseName, entry] of Object.entries(aliases)) {
    const pascalBase = toPascalCase(baseName);
    if (entry.tags.length > 0) {
      iconTagsMap[pascalBase] = entry.tags;
    }
  }

  return `// Auto-generated - do not edit manually
export type { IconProps, IconNode, FoamIcon } from './types';
export { createFoamicon } from './createFoamicon';
export { Icon } from './Icon';

${exports.join('\n')}

// Icon names for tooling
export const iconNames = ${JSON.stringify(iconNames.sort())} as const;

// Alias lookup maps for tooling/search
export const iconAliases: Record<string, string[]> = ${JSON.stringify(iconAliasesMap, null, 2)};

export const aliasToCanonical: Record<string, string> = ${JSON.stringify(aliasToCanonical, null, 2)};

export const iconTags: Record<string, string[]> = ${JSON.stringify(iconTagsMap, null, 2)};

// Get canonical name from alias
export function getCanonicalName(nameOrAlias: string): string {
  return aliasToCanonical[nameOrAlias] || nameOrAlias;
}
`;
}

async function main() {
  console.log('Building Foamicons...\n');

  // Clean and recreate output directory
  if (existsSync(ICONS_OUTPUT)) {
    await rm(ICONS_OUTPUT, { recursive: true });
  }
  await mkdir(ICONS_OUTPUT, { recursive: true });

  // Load aliases
  const aliases = await loadAliases();

  // Read all SVG files
  const files = await readdir(ICONS_SOURCE);
  const svgFiles = files.filter((f) => f.endsWith('.svg'));

  console.log(`Found ${svgFiles.length} SVG files\n`);

  const iconNames: string[] = [];
  const baseNameMap = new Map<string, string[]>(); // kebab base name -> PascalCase variants

  for (const file of svgFiles) {
    const filePath = join(ICONS_SOURCE, file);
    const svgContent = await readFile(filePath, 'utf-8');
    const name = toPascalCase(file);
    const variant = getIconVariant(file);

    // Track base name to variants mapping
    const baseName = file
      .replace('.svg', '')
      .replace(/-duotone$/, '')
      .replace(/-fill$/, '');
    if (!baseNameMap.has(baseName)) {
      baseNameMap.set(baseName, []);
    }
    baseNameMap.get(baseName)!.push(name);

    const { iconNode } = parseSvg(svgContent, variant);
    const jsDoc = generateJsDoc(name, svgContent);
    const componentCode = generateComponent(name, iconNode, jsDoc);

    const outputPath = join(ICONS_OUTPUT, `${name}.tsx`);
    await writeFile(outputPath, componentCode);

    iconNames.push(name);
    console.log(`  ✓ ${name}`);
  }

  // Get canonical base names for validation
  const canonicalBaseNames = new Set(baseNameMap.keys());

  // Validate aliases
  if (Object.keys(aliases).length > 0) {
    console.log('\nValidating aliases...');
    validateAliases(aliases, canonicalBaseNames);
    console.log('✓ Aliases validated');
  }

  // Generate icons/index.ts
  const iconsIndexContent = generateIconsIndex(iconNames);
  await writeFile(join(ICONS_OUTPUT, 'index.ts'), iconsIndexContent);

  // Generate main index.ts
  const indexContent = generateMainIndex(iconNames, aliases, baseNameMap);
  await writeFile(INDEX_OUTPUT, indexContent);

  // Count alias exports
  let aliasExportCount = 0;
  for (const [baseName, entry] of Object.entries(aliases)) {
    if (baseNameMap.has(baseName)) {
      aliasExportCount += entry.aliases.length * baseNameMap.get(baseName)!.length * 3; // 3 variants per alias
    }
  }

  console.log(`\n✓ Generated ${iconNames.length} icon components`);
  console.log('✓ Generated icons/index.ts');
  console.log(`✓ Generated index.ts with ${aliasExportCount} alias exports`);
}

main().catch(console.error);
