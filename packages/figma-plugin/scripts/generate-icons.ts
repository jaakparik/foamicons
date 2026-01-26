import { readdir, readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { toPascalCase, getIconVariant, getLogoVariant, type IconVariant, type LogoVariant } from '@foamicons/core';

interface IconData {
  id: string;
  name: string;
  variants: {
    stroke?: string;
    duotone?: string;
    fill?: string;
  };
  tags: string[];
  aliases: string[];
  isLogo?: boolean;
}

interface LogoData {
  id: string;
  name: string;
  variants: {
    default?: string;
    fill?: string;
    dark?: string;
  };
  tags: string[];
  aliases: string[];
  isLogo: true;
}

// Type for alias data from aliases.json
interface AliasEntry {
  aliases: string[];
  tags: string[];
}
type AliasData = Record<string, AliasEntry>;

async function main() {
  const iconsDir = join(process.cwd(), '../../icons');
  const logosDir = join(iconsDir, 'logos');
  const aliasesFile = join(iconsDir, 'aliases.json');
  const logoAliasesFile = join(logosDir, 'aliases.json');
  const files = await readdir(iconsDir);
  const svgFiles = files.filter(f => f.endsWith('.svg')).sort();

  console.log(`Found ${svgFiles.length} icon SVG files`);

  // Load icon aliases if available
  let aliasData: AliasData = {};
  if (existsSync(aliasesFile)) {
    const aliasContent = await readFile(aliasesFile, 'utf-8');
    aliasData = JSON.parse(aliasContent) as AliasData;
    console.log(`Loaded aliases for ${Object.keys(aliasData).length} icons`);
  }

  // Load logo aliases if available
  let logoAliasData: AliasData = {};
  if (existsSync(logoAliasesFile)) {
    const logoAliasContent = await readFile(logoAliasesFile, 'utf-8');
    logoAliasData = JSON.parse(logoAliasContent) as AliasData;
    console.log(`Loaded aliases for ${Object.keys(logoAliasData).length} logos`);
  }

  // Group by base icon name
  const iconsMap = new Map<string, IconData>();

  for (const file of svgFiles) {
    const variant = getIconVariant(file);
    const baseName = file
      .replace('-duotone.svg', '')
      .replace('-fill.svg', '')
      .replace('.svg', '');

    const id = baseName;
    const name = toPascalCase(baseName);
    const svgContent = await readFile(join(iconsDir, file), 'utf-8');

    // Clean up SVG for Figma plugin
    // - Remove XML declaration and extra whitespace
    // - Strip stroke-width (will be applied dynamically at runtime)
    const cleanSvg = svgContent
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/\s*stroke-width="[^"]*"/g, '')
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!iconsMap.has(id)) {
      // Get aliases and tags from aliases.json if available
      const aliasEntry = aliasData[baseName];
      const aliases = aliasEntry?.aliases || [];
      const extraTags = aliasEntry?.tags || [];

      // Combine: base name parts + aliases + tags from aliases.json
      const baseTags = baseName.split('-').filter(t => t.length > 1);
      const allTags = [...new Set([...baseTags, ...aliases, ...extraTags])];

      iconsMap.set(id, {
        id,
        name,
        variants: {},
        tags: allTags,
        aliases: aliases
      });
    }

    const iconData = iconsMap.get(id)!;
    iconData.variants[variant as keyof typeof iconData.variants] = cleanSvg;
  }

  const icons = Array.from(iconsMap.values()).sort((a, b) => a.id.localeCompare(b.id));

  // Validate - check each icon has all 3 variants
  let missingVariants = 0;
  for (const icon of icons) {
    const missing: string[] = [];
    if (!icon.variants.stroke) missing.push('stroke');
    if (!icon.variants.duotone) missing.push('duotone');
    if (!icon.variants.fill) missing.push('fill');
    if (missing.length > 0) {
      console.warn(`  Warning: ${icon.id} missing variants: ${missing.join(', ')}`);
      missingVariants++;
    }
  }

  // ===== LOGOS =====
  const logosMap = new Map<string, LogoData>();

  if (existsSync(logosDir)) {
    const logoFiles = await readdir(logosDir);
    const logoSvgFiles = logoFiles.filter(f => f.endsWith('.svg')).sort();

    console.log(`Found ${logoSvgFiles.length} logo SVG files`);

    for (const file of logoSvgFiles) {
      const variant = getLogoVariant(file);
      const baseName = file
        .replace('-dark.svg', '')
        .replace('-fill.svg', '')
        .replace('.svg', '');

      const id = `logo-${baseName}`;
      const name = `Logo${toPascalCase(baseName)}`;
      const svgContent = await readFile(join(logosDir, file), 'utf-8');

      // Clean up SVG for Figma plugin (keep colors for logos)
      const cleanSvg = svgContent
        .replace(/<\?xml[^>]*\?>/g, '')
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      if (!logosMap.has(id)) {
        // Get aliases and tags from logos/aliases.json if available
        const aliasEntry = logoAliasData[baseName];
        const aliases = aliasEntry?.aliases || [];
        const extraTags = aliasEntry?.tags || [];

        // Combine: base name parts + aliases + tags
        const baseTags = baseName.split('-').filter(t => t.length > 1);
        const allTags = [...new Set(['logo', ...baseTags, ...aliases, ...extraTags])];

        logosMap.set(id, {
          id,
          name,
          variants: {},
          tags: allTags,
          aliases: aliases,
          isLogo: true
        });
      }

      const logoData = logosMap.get(id)!;
      // Map logo variant to property name
      logoData.variants[variant as keyof typeof logoData.variants] = cleanSvg;
    }
  }

  const logos = Array.from(logosMap.values()).sort((a, b) => a.id.localeCompare(b.id));

  // Generate TypeScript file
  const output = `// Auto-generated by generate-icons.ts - do not edit manually
// Generated: ${new Date().toISOString()}

export interface IconData {
  id: string;
  name: string;
  variants: {
    stroke?: string;
    duotone?: string;
    fill?: string;
  };
  tags: string[];
  aliases: string[];
  isLogo?: boolean;
}

export interface LogoData {
  id: string;
  name: string;
  variants: {
    default?: string;
    fill?: string;
    dark?: string;
  };
  tags: string[];
  aliases: string[];
  isLogo: true;
}

export const iconsData: IconData[] = ${JSON.stringify(icons, null, 2)};

export const logosData: LogoData[] = ${JSON.stringify(logos, null, 2)};

export const iconCount = ${icons.length};
export const logoCount = ${logos.length};
`;

  await writeFile(join(process.cwd(), 'src/icons-data.ts'), output);

  console.log(`\n✓ Generated ${icons.length} icons and ${logos.length} logos to src/icons-data.ts`);
  if (missingVariants > 0) {
    console.log(`⚠ ${missingVariants} icons have missing variants`);
  }
}

main().catch(console.error);
