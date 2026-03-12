/**
 * build-metadata.ts
 *
 * Generates machine-readable metadata files for AI tooling discovery.
 * Run after tsup so dist/ already exists.
 *
 * Outputs:
 *   dist/catalog.json      – full icon/logo catalog
 *   dist/aliases.json      – alias → canonical mappings
 *   dist/tags.json         – canonical → tags mappings
 *   dist/deprecations.json – old name → new name mappings
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { toPascalCase } from '@foamicons/core';

// Paths
const MONOREPO_ROOT = join(process.cwd(), '../..');
const ICONS_SOURCE = join(MONOREPO_ROOT, 'icons');
const LOGOS_SOURCE = join(MONOREPO_ROOT, 'icons/logos');
const ALIASES_FILE = join(MONOREPO_ROOT, 'icons/aliases.json');
const LOGO_ALIASES_FILE = join(MONOREPO_ROOT, 'icons/logos/aliases.json');
const PKG_FILE = join(process.cwd(), 'package.json');
const DIST = join(process.cwd(), 'dist');

interface AliasEntry {
  aliases: string[];
  tags: string[];
  category?: string;
}
type AliasData = Record<string, AliasEntry>;

interface CatalogIcon {
  name: string;
  kind: 'icon' | 'logo';
  variants: string[];
  aliases: string[];
  tags: string[];
  category?: string;
}

async function loadJson<T>(path: string, fallback: T): Promise<T> {
  if (!existsSync(path)) return fallback;
  return JSON.parse(await readFile(path, 'utf-8')) as T;
}

async function main() {
  console.log('Generating metadata files...\n');

  // Ensure dist exists
  if (!existsSync(DIST)) {
    await mkdir(DIST, { recursive: true });
  }

  const pkg = JSON.parse(await readFile(PKG_FILE, 'utf-8'));
  const version: string = pkg.version;

  // --- Scan icon files ---
  const iconFiles = (await readdir(ICONS_SOURCE)).filter((f) => f.endsWith('.svg'));
  const iconBaseMap = new Map<string, string[]>(); // baseName -> variant suffixes

  for (const file of iconFiles) {
    const base = file.replace('.svg', '').replace(/-duotone$/, '').replace(/-fill$/, '');
    if (!iconBaseMap.has(base)) iconBaseMap.set(base, []);
    if (file.endsWith('-duotone.svg')) iconBaseMap.get(base)!.push('duotone');
    else if (file.endsWith('-fill.svg')) iconBaseMap.get(base)!.push('fill');
    else iconBaseMap.get(base)!.push('base');
  }

  // --- Scan logo files ---
  const logoBaseMap = new Map<string, string[]>(); // baseName -> variant suffixes
  if (existsSync(LOGOS_SOURCE)) {
    const logoFiles = (await readdir(LOGOS_SOURCE)).filter((f) => f.endsWith('.svg'));
    for (const file of logoFiles) {
      const base = file.replace('.svg', '').replace(/-dark$/, '').replace(/-fill$/, '');
      if (!logoBaseMap.has(base)) logoBaseMap.set(base, []);
      if (file.endsWith('-dark.svg')) logoBaseMap.get(base)!.push('dark');
      else if (file.endsWith('-fill.svg')) logoBaseMap.get(base)!.push('fill');
      else logoBaseMap.get(base)!.push('color');
    }
  }

  // --- Load alias data ---
  const aliases = await loadJson<AliasData>(ALIASES_FILE, {});
  const logoAliases = await loadJson<AliasData>(LOGO_ALIASES_FILE, {});

  // --- Build catalog ---
  const icons: CatalogIcon[] = [];
  for (const [baseName, variants] of [...iconBaseMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const pascalName = toPascalCase(baseName);
    const entry = aliases[baseName];
    icons.push({
      name: pascalName,
      kind: 'icon',
      variants: variants.sort(),
      aliases: entry?.aliases?.map((a) => toPascalCase(a)) ?? [],
      tags: entry?.tags ?? [],
      ...(entry?.category ? { category: entry.category } : {}),
    });
  }

  const logos: CatalogIcon[] = [];
  for (const [baseName, variants] of [...logoBaseMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const pascalName = `Logo${toPascalCase(baseName)}`;
    const entry = logoAliases[baseName];
    logos.push({
      name: pascalName,
      kind: 'logo',
      variants: variants.sort(),
      aliases: entry?.aliases?.map((a) => `Logo${toPascalCase(a)}`) ?? [],
      tags: entry?.tags ?? [],
      ...(entry?.category ? { category: entry.category } : {}),
    });
  }

  // --- Build aliases map (alias → canonical) ---
  const aliasMap: Record<string, string> = {};
  for (const [baseName, entry] of Object.entries(aliases)) {
    const canonical = toPascalCase(baseName);
    for (const alias of entry.aliases) {
      aliasMap[toPascalCase(alias)] = canonical;
    }
  }
  for (const [baseName, entry] of Object.entries(logoAliases)) {
    const canonical = `Logo${toPascalCase(baseName)}`;
    for (const alias of entry.aliases) {
      aliasMap[`Logo${toPascalCase(alias)}`] = canonical;
    }
  }

  // --- Build tags map (canonical → tags) ---
  const tagsMap: Record<string, string[]> = {};
  for (const [baseName, entry] of Object.entries(aliases)) {
    if (entry.tags.length > 0) {
      tagsMap[toPascalCase(baseName)] = entry.tags;
    }
  }
  for (const [baseName, entry] of Object.entries(logoAliases)) {
    if (entry.tags && entry.tags.length > 0) {
      tagsMap[`Logo${toPascalCase(baseName)}`] = entry.tags;
    }
  }

  // --- Deprecation map (empty for now, placeholder for future renames) ---
  const deprecated: Record<string, string> = {};

  // --- Write files ---
  const catalog = { version, icons, logos, deprecated };

  await writeFile(join(DIST, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
  console.log(`  ✓ dist/catalog.json (${icons.length} icons, ${logos.length} logos)`);

  await writeFile(join(DIST, 'aliases.json'), JSON.stringify(aliasMap, null, 2) + '\n');
  console.log(`  ✓ dist/aliases.json (${Object.keys(aliasMap).length} aliases)`);

  await writeFile(join(DIST, 'tags.json'), JSON.stringify(tagsMap, null, 2) + '\n');
  console.log(`  ✓ dist/tags.json (${Object.keys(tagsMap).length} entries)`);

  await writeFile(join(DIST, 'deprecations.json'), JSON.stringify(deprecated, null, 2) + '\n');
  console.log('  ✓ dist/deprecations.json');

  console.log('\n✓ Metadata generation complete');
}

main().catch(console.error);
