import { readdir, readFile, writeFile, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import {
  toPascalCase,
  toKebabCase,
  parseSvg,
  generateBase64Preview,
  getIconVariant,
  getLogoVariant,
  type IconNode,
  type LogoVariant,
} from '@foamicons/core';

// Paths relative to monorepo root
const MONOREPO_ROOT = join(process.cwd(), '../..');
const ICONS_SOURCE = join(MONOREPO_ROOT, 'icons');
const LOGOS_SOURCE = join(MONOREPO_ROOT, 'icons/logos');
const ALIASES_FILE = join(MONOREPO_ROOT, 'icons/aliases.json');
const LOGO_ALIASES_FILE = join(MONOREPO_ROOT, 'icons/logos/aliases.json');
const ICONS_OUTPUT = join(process.cwd(), 'src/icons');
const LOGOS_OUTPUT = join(process.cwd(), 'src/logos');
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

// Load logo aliases
async function loadLogoAliases(): Promise<AliasData> {
  if (!existsSync(LOGO_ALIASES_FILE)) {
    return {};
  }

  const content = await readFile(LOGO_ALIASES_FILE, 'utf-8');
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

// Generate JSDoc comment for a logo
function generateLogoJsDoc(name: string, svgContent: string, variant: LogoVariant): string {
  const base64 = generateBase64Preview(svgContent);
  const kebabName = toKebabCase(name);
  const variantDesc = variant === 'color' ? 'brand colors' : variant === 'color-dark' ? 'dark theme brand colors' : 'single color (currentColor)';

  return `/**
 * @component @name ${name}
 * @description Foamicon logo component with ${variantDesc}, renders a \`<svg>\` element
 * @preview ![img](data:image/svg+xml;base64,${base64})
 * @see https://foamicons.com/logos/${kebabName}
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Logo size (width and height)
 * @returns {React.ReactElement} SVG logo element
 */`;
}

// Convert a logo filename to a component name with Logo prefix
// e.g., "google.svg" -> "LogoGoogle", "instagram-fill.svg" -> "LogoInstagramFill"
function getLogoComponentName(filename: string): string {
  // Remove .svg extension and convert to PascalCase, then add Logo prefix
  const baseName = filename.replace('.svg', '');
  const pascalName = toPascalCase(baseName);
  return `Logo${pascalName}`;
}

// Get the base name of a logo (without variant suffix)
// e.g., "google" -> "google", "instagram-fill" -> "instagram"
function getLogoBaseName(filename: string): string {
  return filename
    .replace('.svg', '')
    .replace(/-dark$/, '')
    .replace(/-fill$/, '');
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

// Generate logo component code using createFoamicon
function generateLogoComponent(
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

// Generate logos/index.ts for barrel export
function generateLogosIndex(logoNames: string[]): string {
  const exports = logoNames.map((name) => `export { ${name} } from './${name}';`);
  return `// Auto-generated - do not edit manually
${exports.join('\n')}
`;
}

// Generate main index.ts with all exports and aliases
function generateMainIndex(
  iconNames: string[],
  logoNames: string[],
  aliases: AliasData,
  logoAliases: AliasData,
  baseNameMap: Map<string, string[]>, // baseName -> [Name, NameDuotone, NameFill]
  logoBaseNameMap: Map<string, string[]> // baseName -> [LogoName, LogoNameColor, LogoNameFill, LogoNameColorDark]
): string {
  const exports: string[] = [];

  // Primary icon exports
  iconNames.forEach((name) => {
    exports.push(`export { ${name} } from './icons/${name}';`);
  });

  // Built-in alias exports for icons: {Name}Icon and Foam{Name}
  iconNames.forEach((name) => {
    exports.push(`export { ${name} as ${name}Icon } from './icons/${name}';`);
    exports.push(`export { ${name} as Foam${name} } from './icons/${name}';`);
  });

  // Custom alias exports from aliases.json for icons
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

  // Primary logo exports
  logoNames.forEach((name) => {
    exports.push(`export { ${name} } from './logos/${name}';`);
  });

  // Built-in alias exports for logos: {Name}Icon and Foam{Name}
  logoNames.forEach((name) => {
    exports.push(`export { ${name} as ${name}Icon } from './logos/${name}';`);
    exports.push(`export { ${name} as Foam${name} } from './logos/${name}';`);
  });

  // Custom alias exports from logos/aliases.json for logos
  for (const [baseName, entry] of Object.entries(logoAliases)) {
    const variants = logoBaseNameMap.get(baseName);
    if (!variants) continue; // Logo not found, skip

    for (const alias of entry.aliases) {
      const aliasPascal = toPascalCase(alias);

      for (const canonicalName of variants) {
        // Determine variant suffix (Color, Fill, ColorDark)
        let suffix = '';
        if (canonicalName.endsWith('ColorDark')) suffix = 'ColorDark';
        else if (canonicalName.endsWith('Color')) suffix = 'Color';
        else if (canonicalName.endsWith('Fill')) suffix = 'Fill';

        // Remove "Logo" prefix from alias, add suffix, then add "Logo" back
        const aliasName = `Logo${aliasPascal}${suffix}`;

        // Primary alias export
        exports.push(`export { ${canonicalName} as ${aliasName} } from './logos/${canonicalName}';`);
        // {Alias}Icon export
        exports.push(`export { ${canonicalName} as ${aliasName}Icon } from './logos/${canonicalName}';`);
        // Foam{Alias} export
        exports.push(`export { ${canonicalName} as Foam${aliasName} } from './logos/${canonicalName}';`);
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

  // Generate aliasToCanonical map (reverse lookup) for icons
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

  // Generate logoAliases map for website/tooling (PascalCase)
  const logoAliasesMap: Record<string, string[]> = {};
  for (const [baseName, entry] of Object.entries(logoAliases)) {
    const pascalBase = `Logo${toPascalCase(baseName)}`;
    if (entry.aliases.length > 0) {
      logoAliasesMap[pascalBase] = entry.aliases.map((a) => `Logo${toPascalCase(a)}`);
    }
  }

  // Generate logoTags map for search
  const logoTagsMap: Record<string, string[]> = {};
  for (const [baseName, entry] of Object.entries(logoAliases)) {
    const pascalBase = `Logo${toPascalCase(baseName)}`;
    if (entry.tags && entry.tags.length > 0) {
      logoTagsMap[pascalBase] = entry.tags;
    }
  }

  // Combined names array
  const allNames = [...iconNames, ...logoNames].sort();

  return `// Auto-generated - do not edit manually
export type { IconProps, IconNode, IconNodeElement, FoamIcon } from './types';
export { createFoamicon } from './createFoamicon';
export { Icon } from './Icon';

${exports.join('\n')}

// Icon names for tooling
export const iconNames = ${JSON.stringify(iconNames.sort())} as const;

// Logo names for tooling
export const logoNames = ${JSON.stringify(logoNames.sort())} as const;

// All component names (icons + logos)
export const allNames = ${JSON.stringify(allNames)} as const;

// Alias lookup maps for tooling/search (icons)
export const iconAliases: Record<string, string[]> = ${JSON.stringify(iconAliasesMap, null, 2)};

export const aliasToCanonical: Record<string, string> = ${JSON.stringify(aliasToCanonical, null, 2)};

export const iconTags: Record<string, string[]> = ${JSON.stringify(iconTagsMap, null, 2)};

// Alias lookup maps for tooling/search (logos)
export const logoAliases: Record<string, string[]> = ${JSON.stringify(logoAliasesMap, null, 2)};

export const logoTags: Record<string, string[]> = ${JSON.stringify(logoTagsMap, null, 2)};

// Get canonical name from alias
export function getCanonicalName(nameOrAlias: string): string {
  return aliasToCanonical[nameOrAlias] || nameOrAlias;
}
`;
}

async function main() {
  console.log('Building Foamicons...\n');

  // Clean and recreate output directories
  if (existsSync(ICONS_OUTPUT)) {
    await rm(ICONS_OUTPUT, { recursive: true });
  }
  await mkdir(ICONS_OUTPUT, { recursive: true });

  if (existsSync(LOGOS_OUTPUT)) {
    await rm(LOGOS_OUTPUT, { recursive: true });
  }
  await mkdir(LOGOS_OUTPUT, { recursive: true });

  // Load aliases
  const aliases = await loadAliases();
  const logoAliasesData = await loadLogoAliases();

  // Read all SVG files from icons directory (excluding logos subdirectory)
  const files = await readdir(ICONS_SOURCE);
  const svgFiles = files.filter((f) => f.endsWith('.svg'));

  console.log(`Found ${svgFiles.length} icon SVG files\n`);

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

  // Validate icon aliases
  if (Object.keys(aliases).length > 0) {
    console.log('\nValidating icon aliases...');
    validateAliases(aliases, canonicalBaseNames);
    console.log('✓ Icon aliases validated');
  }

  // Generate icons/index.ts
  const iconsIndexContent = generateIconsIndex(iconNames);
  await writeFile(join(ICONS_OUTPUT, 'index.ts'), iconsIndexContent);

  // ===== LOGOS =====
  const logoNames: string[] = [];
  const logoBaseNameMap = new Map<string, string[]>(); // kebab base name -> Logo PascalCase variants

  if (existsSync(LOGOS_SOURCE)) {
    const logoFiles = await readdir(LOGOS_SOURCE);
    const logoSvgFiles = logoFiles.filter((f) => f.endsWith('.svg'));

    console.log(`\nFound ${logoSvgFiles.length} logo SVG files\n`);

    for (const file of logoSvgFiles) {
      const filePath = join(LOGOS_SOURCE, file);
      const svgContent = await readFile(filePath, 'utf-8');
      const name = getLogoComponentName(file);
      const variant = getLogoVariant(file);

      // Track base name to variants mapping
      const baseName = getLogoBaseName(file);
      if (!logoBaseNameMap.has(baseName)) {
        logoBaseNameMap.set(baseName, []);
      }
      logoBaseNameMap.get(baseName)!.push(name);

      // Determine if we should preserve colors
      // color and color-dark variants preserve original colors
      // fill variants transform to currentColor
      const preserveColors = variant === 'default' || variant === 'dark';

      // Use 'fill' as the icon variant for color transformation when not preserving
      const { iconNode } = parseSvg(svgContent, 'fill', { preserveColors });
      const jsDoc = generateLogoJsDoc(name, svgContent, variant);
      const componentCode = generateLogoComponent(name, iconNode, jsDoc);

      const outputPath = join(LOGOS_OUTPUT, `${name}.tsx`);
      await writeFile(outputPath, componentCode);

      logoNames.push(name);
      console.log(`  ✓ ${name}`);
    }

    // Generate logos/index.ts
    const logosIndexContent = generateLogosIndex(logoNames);
    await writeFile(join(LOGOS_OUTPUT, 'index.ts'), logosIndexContent);
  }

  // Generate main index.ts
  const indexContent = generateMainIndex(iconNames, logoNames, aliases, logoAliasesData, baseNameMap, logoBaseNameMap);
  await writeFile(INDEX_OUTPUT, indexContent);

  // Count alias exports
  let iconAliasExportCount = 0;
  for (const [baseName, entry] of Object.entries(aliases)) {
    if (baseNameMap.has(baseName)) {
      iconAliasExportCount += entry.aliases.length * baseNameMap.get(baseName)!.length * 3; // 3 variants per alias
    }
  }

  let logoAliasExportCount = 0;
  for (const [baseName, entry] of Object.entries(logoAliasesData)) {
    if (logoBaseNameMap.has(baseName)) {
      logoAliasExportCount += entry.aliases.length * logoBaseNameMap.get(baseName)!.length * 3; // 3 variants per alias
    }
  }

  console.log(`\n✓ Generated ${iconNames.length} icon components`);
  console.log('✓ Generated icons/index.ts');
  if (logoNames.length > 0) {
    console.log(`✓ Generated ${logoNames.length} logo components`);
    console.log('✓ Generated logos/index.ts');
  }
  console.log(`✓ Generated index.ts with ${iconAliasExportCount} icon alias exports and ${logoAliasExportCount} logo alias exports`);
}

main().catch(console.error);
