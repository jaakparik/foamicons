#!/usr/bin/env node

/**
 * Interactive alias generator for new icons
 *
 * Usage:
 *   pnpm add-aliases              # Auto-detect new icons
 *   pnpm add-aliases arrow-down   # Add aliases for specific icon
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as readline from 'readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ICONS_DIR = join(ROOT, 'icons');
const ALIASES_FILE = join(ICONS_DIR, 'aliases.json');

// Common word mappings for auto-suggestions
const WORD_SUGGESTIONS = {
  'arrow': ['direction', 'pointer'],
  'up': ['ascending', 'increase', 'north'],
  'down': ['descending', 'decrease', 'south'],
  'left': ['back', 'previous', 'west'],
  'right': ['forward', 'next', 'east'],
  'circle': ['round', 'circular'],
  'square': ['box', 'rectangle'],
  'plus': ['add', 'new', 'create'],
  'minus': ['subtract', 'remove', 'reduce'],
  'x': ['close', 'cancel', 'clear', 'times'],
  'check': ['done', 'complete', 'success', 'tick'],
  'alert': ['warning', 'caution', 'attention'],
  'info': ['information', 'about', 'details'],
  'user': ['person', 'profile', 'account'],
  'users': ['people', 'group', 'team'],
  'mail': ['email', 'envelope', 'message'],
  'search': ['find', 'lookup', 'query'],
  'cog': ['settings', 'gear', 'preferences'],
  'house': ['home'],
  'bell': ['notification', 'alarm'],
  'star': ['favorite', 'rating'],
  'trash': ['delete', 'remove', 'bin'],
  'eye': ['view', 'show', 'visible'],
  'lock': ['secure', 'private', 'protected'],
  'unlock': ['unsecure', 'public'],
  'download': ['save', 'export'],
  'upload': ['import', 'send'],
  'refresh': ['reload', 'sync'],
  'play': ['start', 'video'],
  'pause': ['stop', 'halt'],
  'volume': ['sound', 'audio', 'speaker'],
  'globe': ['world', 'web', 'internet'],
  'calendar': ['date', 'schedule', 'event'],
  'clock': ['time', 'watch'],
  'file': ['document', 'doc'],
  'folder': ['directory'],
  'image': ['photo', 'picture'],
  'link': ['url', 'chain', 'connect'],
  'sort': ['order', 'arrange'],
  'filter': ['funnel'],
  'edit': ['pencil', 'write', 'modify'],
  'copy': ['duplicate', 'clone'],
  'cut': ['scissors'],
  'paste': ['clipboard'],
  'bold': ['strong'],
  'italic': ['emphasis'],
  'list': ['items', 'bullets'],
  'grid': ['tiles', 'layout'],
  'menu': ['hamburger', 'navigation'],
  'more': ['dots', 'ellipsis', 'options'],
  'share': ['forward'],
  'bookmark': ['save', 'flag'],
  'heart': ['love', 'like', 'favorite'],
  'thumbs': ['like', 'approve'],
  'sun': ['light', 'day', 'bright'],
  'moon': ['dark', 'night'],
  'cloud': ['weather', 'storage'],
  'a': ['alpha', 'alphabetical'],
  'z': ['zeta'],
  '0': ['zero', 'numeric'],
  '1': ['one', 'numeric'],
  'wide': ['large', 'big'],
  'narrow': ['small', 'thin'],
};

// Read current aliases
function loadAliases() {
  try {
    return JSON.parse(readFileSync(ALIASES_FILE, 'utf-8'));
  } catch {
    return {};
  }
}

// Get all icon base names from SVG files
function getIconNames() {
  const files = readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg'));
  const baseNames = new Set();

  for (const file of files) {
    const baseName = file
      .replace('.svg', '')
      .replace(/-duotone$/, '')
      .replace(/-fill$/, '');
    baseNames.add(baseName);
  }

  return Array.from(baseNames).sort();
}

// Find icons not in aliases.json
function findMissingIcons(aliases) {
  const iconNames = getIconNames();
  return iconNames.filter(name => !aliases[name]);
}

// Generate suggested aliases based on icon name
function suggestAliases(iconName, existingAliases) {
  const parts = iconName.split('-');
  const suggestions = new Set();

  // Add parts longer than 1 char as tags
  for (const part of parts) {
    if (part.length > 1) {
      // Look up word suggestions
      const related = WORD_SUGGESTIONS[part.toLowerCase()];
      if (related) {
        related.forEach(r => suggestions.add(r));
      }
    }
  }

  // Check for common patterns
  if (iconName.includes('arrow') && iconName.includes('up') && iconName.includes('down')) {
    suggestions.add('sort');
    suggestions.add('reorder');
  }
  if (iconName.includes('arrow') && (iconName.includes('a-z') || iconName.includes('z-a'))) {
    suggestions.add('sort-alphabetical');
  }
  if (iconName.includes('arrow') && (iconName.includes('0-1') || iconName.includes('1-0'))) {
    suggestions.add('sort-numeric');
  }

  // Filter out suggestions that conflict with existing aliases or icon names
  const allExistingAliases = new Set();
  const iconNames = new Set(getIconNames());

  for (const entry of Object.values(existingAliases)) {
    if (entry.aliases) {
      entry.aliases.forEach(a => allExistingAliases.add(a));
    }
  }

  return Array.from(suggestions).filter(s =>
    !allExistingAliases.has(s) && !iconNames.has(s)
  );
}

// Generate suggested tags based on icon name
function suggestTags(iconName) {
  const parts = iconName.split('-').filter(p => p.length > 1);
  const tags = new Set(parts);

  // Add related words as tags
  for (const part of parts) {
    const related = WORD_SUGGESTIONS[part.toLowerCase()];
    if (related) {
      related.slice(0, 2).forEach(r => tags.add(r)); // Limit to first 2 suggestions
    }
  }

  return Array.from(tags);
}

// Create readline interface
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

// Prompt user for input
function prompt(rl, question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer.trim());
    });
  });
}

// Format aliases for display
function formatList(items) {
  return items.length > 0 ? items.join(', ') : '(none)';
}

async function main() {
  const args = process.argv.slice(2);
  const aliases = loadAliases();

  let iconsToProcess;

  if (args.length > 0 && !args[0].startsWith('-')) {
    // Specific icons provided
    iconsToProcess = args.filter(a => !a.startsWith('-'));
    const iconNames = new Set(getIconNames());

    // Validate icons exist
    for (const icon of iconsToProcess) {
      if (!iconNames.has(icon)) {
        console.error(`Error: Icon "${icon}" not found in icons directory`);
        process.exit(1);
      }
    }
  } else {
    // Auto-detect missing icons
    iconsToProcess = findMissingIcons(aliases);

    if (iconsToProcess.length === 0) {
      console.log('All icons already have entries in aliases.json');
      process.exit(0);
    }

    console.log(`Found ${iconsToProcess.length} icon(s) without aliases:\n`);
    iconsToProcess.forEach(name => console.log(`  - ${name}`));
    console.log('');
  }

  const rl = createInterface();

  try {
    for (const iconName of iconsToProcess) {
      console.log(`\n${'='.repeat(50)}`);
      console.log(`Icon: ${iconName}`);
      console.log('='.repeat(50));

      const suggestedAliases = suggestAliases(iconName, aliases);
      const suggestedTags = suggestTags(iconName);

      console.log(`\nSuggested aliases: ${formatList(suggestedAliases)}`);
      console.log(`Suggested tags: ${formatList(suggestedTags)}`);

      // Ask for aliases
      console.log('\nEnter aliases (comma-separated), or:');
      console.log('  - Press Enter to accept suggestions');
      console.log('  - Type "none" for no aliases');
      console.log('  - Type "skip" to skip this icon');

      const aliasInput = await prompt(rl, 'Aliases: ');

      if (aliasInput.toLowerCase() === 'skip') {
        console.log('Skipped.');
        continue;
      }

      let finalAliases;
      if (aliasInput === '') {
        finalAliases = suggestedAliases;
      } else if (aliasInput.toLowerCase() === 'none') {
        finalAliases = [];
      } else {
        // Parse user input, allow adding to suggestions with +
        if (aliasInput.startsWith('+')) {
          const additional = aliasInput.slice(1).split(',').map(s => s.trim()).filter(Boolean);
          finalAliases = [...suggestedAliases, ...additional];
        } else {
          finalAliases = aliasInput.split(',').map(s => s.trim()).filter(Boolean);
        }
      }

      // Ask for tags
      console.log('\nEnter tags (comma-separated), or press Enter to accept suggestions:');
      const tagInput = await prompt(rl, 'Tags: ');

      let finalTags;
      if (tagInput === '') {
        finalTags = suggestedTags;
      } else if (tagInput.startsWith('+')) {
        const additional = tagInput.slice(1).split(',').map(s => s.trim()).filter(Boolean);
        finalTags = [...suggestedTags, ...additional];
      } else {
        finalTags = tagInput.split(',').map(s => s.trim()).filter(Boolean);
      }

      // Validate aliases don't conflict
      const iconNames = new Set(getIconNames());
      const allExistingAliases = new Map();

      for (const [name, entry] of Object.entries(aliases)) {
        if (entry.aliases) {
          entry.aliases.forEach(a => allExistingAliases.set(a, name));
        }
      }

      let hasConflict = false;
      for (const alias of finalAliases) {
        if (iconNames.has(alias)) {
          console.log(`\nWarning: "${alias}" conflicts with existing icon name. Removing.`);
          finalAliases = finalAliases.filter(a => a !== alias);
          hasConflict = true;
        } else if (allExistingAliases.has(alias)) {
          console.log(`\nWarning: "${alias}" already used by "${allExistingAliases.get(alias)}". Removing.`);
          finalAliases = finalAliases.filter(a => a !== alias);
          hasConflict = true;
        }
      }

      // Add to aliases object
      aliases[iconName] = {
        aliases: finalAliases,
        tags: finalTags,
      };

      console.log(`\nAdded: ${iconName}`);
      console.log(`  Aliases: ${formatList(finalAliases)}`);
      console.log(`  Tags: ${formatList(finalTags)}`);
    }

    // Sort aliases by key and write
    const sortedAliases = Object.fromEntries(
      Object.entries(aliases).sort(([a], [b]) => a.localeCompare(b))
    );

    writeFileSync(ALIASES_FILE, JSON.stringify(sortedAliases, null, 2) + '\n');

    console.log(`\n${'='.repeat(50)}`);
    console.log(`Updated ${ALIASES_FILE}`);
    console.log('Run "pnpm build" to regenerate icons with new aliases.');

  } finally {
    rl.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
