# Plan: Icon Alias System for Foamicons

## Goal
Implement an alias system that allows multiple names to reference the same icon component, enabling better discoverability (e.g., `Search` can also be imported as `MagnifyingGlass` or `Find`).

## Current State
- Icons are SVG files in `/icons/` folder with kebab-case names
- Build script (`packages/foamicons/scripts/build-icons.ts`) generates React components
- Already has basic aliasing: `{Name}Icon` and `Foam{Name}` suffixes
- Three variants per icon: stroke, duotone, fill

---

## Phase 1: Metadata Structure

### Task 1.1: Use existing aliases file
Use the provided `icons/aliases.json` which includes both aliases and tags.

**File: `icons/aliases.json`**
```json
{
  "search": {
    "aliases": ["find", "lookup", "magnifying-glass", "query", "explore"],
    "tags": ["search", "find", "lookup"]
  },
  "cog": {
    "aliases": ["settings", "gear", "preferences", "config", "configuration", "options"],
    "tags": ["settings", "configuration", "preferences"]
  },
  ...
}
```

**Notes:**
- Keys are canonical kebab-case icon names (matching SVG filenames without variant suffix)
- `aliases`: Alternative names that can be used to import the icon
- `tags`: Searchable keywords (used in website and Figma plugin search)
- Variants (duotone, fill) automatically inherit aliases and tags from base icon

### Task 1.2: Validation rules
- No alias can match another icon's canonical name
- No duplicate aliases across different icons
- Aliases must be valid kebab-case identifiers
- Validate at build time, fail build on conflicts

---

## Phase 2: Build Script Updates

### Task 2.1: Update `build-icons.ts`

Modify the existing build script to:
1. Load `icons/aliases.json` at start
2. Generate additional exports for each alias
3. Include aliases in `iconNames` array (optional, or separate `aliasNames`)

**Changes to `generateMainIndex()`:**
```typescript
// Current exports:
export { Search } from './icons/Search';
export { Search as SearchIcon } from './icons/Search';
export { Search as FoamSearch } from './icons/Search';

// New alias exports:
export { Search as MagnifyingGlass } from './icons/Search';
export { Search as MagnifyingGlassIcon } from './icons/Search';
export { Search as FoamMagnifyingGlass } from './icons/Search';
export { Search as Find } from './icons/Search';
export { Search as FindIcon } from './icons/Search';
export { Search as FoamFind } from './icons/Search';
// ... same for SearchDuotone, SearchFill variants
```

### Task 2.2: Generate alias utilities

Add to generated `index.ts`:
```typescript
// Alias resolution map
export const iconAliases: Record<string, string> = {
  'magnifying-glass': 'search',
  'find': 'search',
  'close': 'x',
  // ...
};

// Get canonical name from alias
export function getCanonicalName(nameOrAlias: string): string {
  return iconAliases[nameOrAlias] || nameOrAlias;
}
```

### Task 2.3: Update Figma plugin generator

Update `packages/figma-plugin/scripts/generate-icons.ts` to include aliases in the icon data for searchability.

---

## Phase 3: Website Updates

### Task 3.1: Export alias data for website

Export alias lookup maps from foamicons package:
```typescript
// Generated in index.ts
export const iconAliases: Record<string, string[]> = {
  'Search': ['MagnifyingGlass', 'Find', 'Lookup'],
  'X': ['Close', 'Times', 'Cross'],
  // ...
};

// Reverse lookup: alias -> canonical name
export const aliasToCanonical: Record<string, string> = {
  'MagnifyingGlass': 'Search',
  'Find': 'Search',
  'Close': 'X',
  // ...
};
```

### Task 3.2: Update search to include aliases (IMPORTANT)

Modify `packages/website/src/App.tsx` to search by alias names:
```typescript
import { iconAliases } from 'foamicons';

// Get aliases for an icon (handles variants)
const getAliasesFor = (name: string): string[] => {
  // Strip variant suffix to get base name
  const baseName = name.replace(/(Duotone|Fill)$/, '');
  return iconAliases[baseName] || [];
};

const filteredIcons = useMemo(() => {
  let icons: readonly string[];
  // ... existing filter logic for stroke/duotone/fill

  if (!search) return icons;
  const lower = search.toLowerCase();

  return icons.filter((name) => {
    // Search by component name
    if (name.toLowerCase().includes(lower)) return true;
    // Search by kebab-case name
    if (toKebabCase(name).includes(lower)) return true;
    // Search by aliases
    const aliases = getAliasesFor(name);
    if (aliases.some(alias =>
      alias.toLowerCase().includes(lower) ||
      toKebabCase(alias).includes(lower)
    )) return true;

    return false;
  });
}, [search, filter]);
```

**Example searches that should work:**
- "magnifying" → finds Search icon
- "close" → finds X icon
- "settings" → finds Cog icon
- "delete" → finds Trash icon

### Task 3.3: Show aliases in icon detail panel

Display aliases in the detail sidebar when an icon is selected:
```tsx
{/* In the detail panel */}
{iconAliases[selectedIconBase]?.length > 0 && (
  <div className="text-xs text-zinc-500">
    Also known as: {iconAliases[selectedIconBase].map(toKebabCase).join(', ')}
  </div>
)}
```

### Task 3.4: Show alias match indicator in search results

When an icon is found via alias, show which alias matched:
```tsx
{matchedAlias && (
  <span className="text-xs text-zinc-500">via "{matchedAlias}"</span>
)}

---

## Phase 4: Documentation

### Task 4.1: Update JSDoc comments

Include aliases in generated component docs:
```typescript
/**
 * @component @name Search
 * @aliases magnifying-glass, find, lookup
 * @description Foamicon SVG icon component
 * ...
 */
```

---

## Files to Modify/Create

```
icons/
  aliases.json                          # NEW: Centralized alias definitions

packages/foamicons/
  scripts/
    build-icons.ts                      # MODIFY: Add alias generation
  src/
    index.ts                            # GENERATED: Will include alias exports

packages/figma-plugin/
  scripts/
    generate-icons.ts                   # MODIFY: Include aliases in search tags

packages/website/
  src/
    App.tsx                             # MODIFY: Search by aliases
```

---

## Implementation Steps

1. **Create `icons/aliases.json`** with initial alias mappings
2. **Update `build-icons.ts`** to read aliases and generate exports
3. **Add validation** to catch conflicts at build time
4. **Update Figma plugin** to include aliases as searchable tags
5. **Update website** to search and display aliases
6. **Test** by importing icons via aliases

---

## Example: Complete Flow

**Input:**
- `icons/search.svg`, `icons/search-duotone.svg`, `icons/search-fill.svg`
- `icons/aliases.json`: `{ "search": ["magnifying-glass", "find"] }`

**Generated exports in `index.ts`:**
```typescript
// Canonical exports
export { Search } from './icons/Search';
export { Search as SearchIcon } from './icons/Search';
export { Search as FoamSearch } from './icons/Search';
export { SearchDuotone } from './icons/SearchDuotone';
export { SearchFill } from './icons/SearchFill';

// Alias exports
export { Search as MagnifyingGlass } from './icons/Search';
export { Search as MagnifyingGlassIcon } from './icons/Search';
export { Search as FoamMagnifyingGlass } from './icons/Search';
export { SearchDuotone as MagnifyingGlassDuotone } from './icons/SearchDuotone';
export { SearchFill as MagnifyingGlassFill } from './icons/SearchFill';

export { Search as Find } from './icons/Search';
export { Search as FindIcon } from './icons/Search';
export { Search as FoamFind } from './icons/Search';
export { SearchDuotone as FindDuotone } from './icons/SearchDuotone';
export { SearchFill as FindFill } from './icons/SearchFill';
```

**Usage:**
```tsx
// All these imports work and give the same component
import { Search, MagnifyingGlass, Find } from 'foamicons';
import { SearchDuotone, MagnifyingGlassDuotone } from 'foamicons';
```

---

## Validation Rules

1. **No alias collides with canonical name**: If `user.svg` exists, no other icon can have `user` as an alias
2. **No duplicate aliases**: Each alias can only map to one icon
3. **Valid identifiers**: Aliases must be kebab-case, convertible to valid PascalCase
4. **Fail fast**: Build fails immediately on validation error with clear message

---

## Notes

- **Tree-shaking preserved**: Re-exports don't break tree-shaking
- **TypeScript support**: All aliases get proper types automatically
- **Backwards compatible**: Existing imports continue to work
- **Variants inherit**: `search` aliases automatically apply to `search-duotone` and `search-fill`
