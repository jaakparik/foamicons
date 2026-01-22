#!/usr/bin/env node

/**
 * Release script for foamicons
 *
 * Usage:
 *   pnpm release patch    # 0.7.0 -> 0.7.1
 *   pnpm release minor    # 0.7.0 -> 0.8.0
 *   pnpm release major    # 0.7.0 -> 1.0.0
 *   pnpm release 1.2.3    # Set specific version
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Packages to update version
const PACKAGES = [
  'packages/foamicons/package.json',
  'packages/figma-plugin/package.json',
];

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf-8'));
}

function writeJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}

function exec(cmd, options = {}) {
  console.log(`> ${cmd}`);
  return execSync(cmd, { stdio: 'inherit', cwd: ROOT, ...options });
}

function bumpVersion(current, type) {
  const [major, minor, patch] = current.split('.').map(Number);

  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      // Assume it's a specific version
      if (/^\d+\.\d+\.\d+$/.test(type)) {
        return type;
      }
      throw new Error(`Invalid version type: ${type}. Use patch, minor, major, or a semver version.`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const versionType = args[0];
  const dryRun = args.includes('--dry-run');

  if (!versionType) {
    console.log('Usage: pnpm release <patch|minor|major|x.y.z> [--dry-run]');
    console.log('');
    console.log('Examples:');
    console.log('  pnpm release patch      # Bump patch version');
    console.log('  pnpm release minor      # Bump minor version');
    console.log('  pnpm release 1.0.0      # Set specific version');
    console.log('  pnpm release patch --dry-run  # Preview without publishing');
    process.exit(1);
  }

  // Get current version from foamicons package
  const foamiconsPath = join(ROOT, 'packages/foamicons/package.json');
  const foamiconsJson = readJson(foamiconsPath);
  const currentVersion = foamiconsJson.version;
  const newVersion = bumpVersion(currentVersion, versionType);

  console.log('');
  console.log(`  Current version: ${currentVersion}`);
  console.log(`  New version:     ${newVersion}`);
  console.log('');

  if (dryRun) {
    console.log('[DRY RUN] Would perform the following:');
    console.log(`  1. Update version in ${PACKAGES.length} packages`);
    console.log('  2. Build all packages');
    console.log('  3. Run tests');
    console.log('  4. Publish foamicons to npm');
    console.log('  5. Create git tag and commit');
    console.log('');
    return;
  }

  // Check for uncommitted changes
  try {
    execSync('git diff-index --quiet HEAD --', { cwd: ROOT });
  } catch {
    console.error('Error: You have uncommitted changes. Please commit or stash them first.');
    process.exit(1);
  }

  // Update versions in all packages
  console.log('Updating versions...');
  for (const pkgPath of PACKAGES) {
    const fullPath = join(ROOT, pkgPath);
    const pkg = readJson(fullPath);
    pkg.version = newVersion;
    writeJson(fullPath, pkg);
    console.log(`  Updated ${pkgPath}`);
  }

  // Build everything
  console.log('\nBuilding...');
  exec('pnpm build');

  // Run tests
  console.log('\nRunning tests...');
  exec('pnpm test');

  // Publish to npm
  console.log('\nPublishing to npm...');
  exec('npm publish', { cwd: join(ROOT, 'packages/foamicons') });

  // Git commit and tag
  console.log('\nCreating git commit and tag...');
  exec('git add -A');
  exec(`git commit -m "${newVersion}"`);
  exec(`git tag v${newVersion}`);

  console.log('\n');
  console.log('Release complete!');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Push to remote:  git push && git push --tags');
  console.log('  2. Website will auto-deploy via Cloudflare Pages');
  console.log('  3. Update Figma plugin: Open Figma > Plugins > Development > Import from manifest');
  console.log(`     Plugin dist: ${join(ROOT, 'packages/figma-plugin/dist')}`);
  console.log('');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
