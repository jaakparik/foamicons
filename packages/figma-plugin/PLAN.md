# Foamicons Figma Plugin - Implementation Plan

## Overview
Build a Figma plugin to browse and insert icons from the Foamicons library (120 base icons × 3 variants = 360 total).

## Project Context

### What We Already Have
```
packages/figma-plugin/
├── manifest.json           # Plugin config (exists)
├── src/code.ts            # Plugin logic (scaffold exists)
├── src/ui.ts              # UI logic (scaffold exists)
├── dist/ui.html           # UI shell with styles (exists)
├── scripts/build.ts       # esbuild with .env support (exists)
├── .env                   # Figma API token (exists, gitignored)
└── tsconfig.json          # TypeScript config (exists)

packages/core/              # @foamicons/core - REUSE THIS
├── src/parser.ts          # parseSvg(), parseElement()
├── src/utils.ts           # toPascalCase(), toKebabCase(), generateKey()
├── src/types.ts           # IconNode, IconVariant, getIconVariant()
└── dist/                  # Built package

icons/                      # 360 SVG source files at monorepo root
```

### Icon Variants (Foamicons Naming)
| Variant | Filename Pattern | Description |
|---------|-----------------|-------------|
| **Stroke** | `bell.svg` | Outline icons with customizable stroke |
| **Duotone** | `bell-duotone.svg` | Two-color with fill opacity |
| **Fill** | `bell-fill.svg` | Solid filled icons |

### Color System (CSS Variables)
Foamicons uses CSS variables that we need to resolve:
- `currentColor` → primary color
- `var(--foamicon-secondary-color, currentColor)` → secondary color
- `var(--foamicon-secondary-opacity, X)` → opacity value

---

## Files to Create/Modify

### 1. `scripts/generate-icons.ts` (NEW)
Generate icon data JSON using `@foamicons/core`.

```typescript
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { toPascalCase, toKebabCase, getIconVariant } from '@foamicons/core';

interface IconData {
  id: string;           // kebab-case: "arrow-up"
  name: string;         // PascalCase: "ArrowUp"
  variants: {
    stroke?: string;    // Raw SVG string
    duotone?: string;
    fill?: string;
  };
  tags: string[];       // Search tags from name parts
}

// Generate icons-data.ts with all icon SVGs embedded
async function main() {
  const iconsDir = join(process.cwd(), '../../icons');
  const files = await readdir(iconsDir);
  const svgFiles = files.filter(f => f.endsWith('.svg'));

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

    if (!iconsMap.has(id)) {
      iconsMap.set(id, {
        id,
        name,
        variants: {},
        tags: baseName.split('-')
      });
    }

    iconsMap.get(id)!.variants[variant] = svgContent;
  }

  const icons = Array.from(iconsMap.values()).sort((a, b) => a.id.localeCompare(b.id));

  // Generate TypeScript file
  const output = `// Auto-generated - do not edit
export const iconsData = ${JSON.stringify(icons, null, 2)} as const;
export type IconId = typeof iconsData[number]['id'];
`;

  await writeFile(join(process.cwd(), 'src/icons-data.ts'), output);
  console.log(`Generated ${icons.length} icons`);
}

main();
```

---

### 2. `src/code.ts` (MODIFY)
Main plugin logic.

```typescript
/// <reference types="@figma/plugin-typings" />

figma.showUI(__html__, { width: 420, height: 600, themeColors: true });

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'insert-icon') {
    const { svgString, name, size } = msg;

    try {
      const node = figma.createNodeFromSvg(svgString);
      node.name = name;

      // Resize to requested size
      const scale = size / Math.max(node.width, node.height);
      node.resize(node.width * scale, node.height * scale);

      // Center in viewport
      const center = figma.viewport.center;
      node.x = center.x - node.width / 2;
      node.y = center.y - node.height / 2;

      // Select and focus
      figma.currentPage.selection = [node];
      figma.viewport.scrollAndZoomIntoView([node]);

      figma.notify(`Inserted ${name}`);
    } catch (error) {
      figma.notify(`Error: ${error}`, { error: true });
    }
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
```

---

### 3. `src/ui.ts` (REWRITE)
Complete UI implementation.

**State Management:**
```typescript
interface State {
  icons: IconData[];
  filteredIcons: IconData[];
  selectedIcon: IconData | null;
  variant: 'stroke' | 'duotone' | 'fill';
  size: number;
  strokeWidth: number;
  primaryColor: string;
  secondaryColor: string;
  secondaryOpacity: number;
  searchQuery: string;
}

const state: State = {
  icons: [],
  filteredIcons: [],
  selectedIcon: null,
  variant: 'stroke',
  size: 24,
  strokeWidth: 1,
  primaryColor: '#000000',
  secondaryColor: '#666666',
  secondaryOpacity: 20,
  searchQuery: ''
};
```

**Key Functions:**
```typescript
// Apply customizations to SVG string
function customizeSvg(svg: string, options: {
  variant: string;
  size: number;
  strokeWidth: number;
  primaryColor: string;
  secondaryColor: string;
  secondaryOpacity: number;
}): string {
  let result = svg;

  // Replace currentColor with primary color
  result = result.replace(/currentColor/g, options.primaryColor);

  // Replace secondary color variable
  result = result.replace(
    /var\(--foamicon-secondary-color,\s*currentColor\)/g,
    options.secondaryColor
  );

  // Replace secondary opacity variable
  result = result.replace(
    /var\(--foamicon-secondary-opacity,\s*[\d.]+\)/g,
    String(options.secondaryOpacity / 100)
  );

  // Update stroke-width
  result = result.replace(
    /stroke-width="[^"]*"/g,
    `stroke-width="${options.strokeWidth}"`
  );

  // Update size
  result = result.replace(/width="[^"]*"/, `width="${options.size}"`);
  result = result.replace(/height="[^"]*"/, `height="${options.size}"`);

  return result;
}

// Filter icons by search query
function filterIcons(query: string): IconData[] {
  if (!query) return state.icons;
  const lower = query.toLowerCase();
  return state.icons.filter(icon =>
    icon.id.includes(lower) ||
    icon.name.toLowerCase().includes(lower) ||
    icon.tags.some(tag => tag.includes(lower))
  );
}

// Render icon grid
function renderGrid() { /* ... */ }

// Handle icon selection
function selectIcon(icon: IconData) { /* ... */ }

// Handle insert button
function insertIcon() {
  if (!state.selectedIcon) return;

  const svg = state.selectedIcon.variants[state.variant];
  if (!svg) return;

  const customized = customizeSvg(svg, {
    variant: state.variant,
    size: state.size,
    strokeWidth: state.strokeWidth,
    primaryColor: state.primaryColor,
    secondaryColor: state.secondaryColor,
    secondaryOpacity: state.secondaryOpacity
  });

  parent.postMessage({
    pluginMessage: {
      type: 'insert-icon',
      svgString: customized,
      name: state.selectedIcon.name,
      size: state.size
    }
  }, '*');
}
```

---

### 4. `dist/ui.html` (MODIFY)
Update HTML structure. Keep existing styles, add controls.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Keep existing styles, add: */

    .controls { padding: 12px; border-bottom: 1px solid #e5e5e5; }
    .control-row { display: flex; gap: 8px; margin-bottom: 8px; align-items: center; }
    .control-label { font-size: 11px; color: #666; width: 70px; }

    .variant-btns, .size-btns { display: flex; gap: 4px; flex: 1; }
    .variant-btns button, .size-btns button {
      flex: 1; padding: 6px 8px; border: 1px solid #e0e0e0;
      border-radius: 4px; background: #fff; font-size: 11px; cursor: pointer;
    }
    .variant-btns button.active, .size-btns button.active {
      background: #18a0fb; color: #fff; border-color: #18a0fb;
    }

    .color-input { width: 32px; height: 24px; border: 1px solid #e0e0e0; border-radius: 4px; }
    .slider { flex: 1; }
    .slider-value { width: 40px; text-align: right; font-size: 11px; }

    .icon-grid {
      display: grid; grid-template-columns: repeat(6, 1fr);
      gap: 4px; padding: 12px; overflow-y: auto; flex: 1;
    }
    .icon-item {
      aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
      border: 1px solid #e5e5e5; border-radius: 4px; cursor: pointer;
    }
    .icon-item:hover { background: #f5f5f5; border-color: #18a0fb; }
    .icon-item.selected { background: #e5f4ff; border-color: #18a0fb; }
    .icon-item svg { width: 20px; height: 20px; }

    .footer {
      padding: 12px; border-top: 1px solid #e5e5e5;
      display: flex; gap: 8px;
    }
    .footer button {
      flex: 1; padding: 8px 16px; border-radius: 6px; font-size: 12px;
      cursor: pointer; border: none;
    }
    .btn-primary { background: #18a0fb; color: #fff; }
    .btn-primary:disabled { background: #ccc; cursor: not-allowed; }
    .btn-secondary { background: #f0f0f0; color: #333; }
  </style>
</head>
<body>
  <div id="root">
    <!-- Header -->
    <div class="header">
      <h2>Foamicons</h2>
      <span class="count">120 icons</span>
    </div>

    <!-- Search -->
    <div class="search-container">
      <input type="text" id="search" placeholder="Search icons..." />
    </div>

    <!-- Controls -->
    <div class="controls">
      <!-- Variant -->
      <div class="control-row">
        <span class="control-label">Type</span>
        <div class="variant-btns">
          <button data-variant="stroke" class="active">Stroked</button>
          <button data-variant="duotone">Duotone</button>
          <button data-variant="fill">Filled</button>
        </div>
      </div>

      <!-- Size -->
      <div class="control-row">
        <span class="control-label">Size</span>
        <div class="size-btns">
          <button data-size="16">16</button>
          <button data-size="20">20</button>
          <button data-size="24" class="active">24</button>
          <button data-size="32">32</button>
          <button data-size="48">48</button>
        </div>
      </div>

      <!-- Stroke Width -->
      <div class="control-row" id="strokeWidthRow">
        <span class="control-label">Stroke</span>
        <input type="range" class="slider" id="strokeWidth" min="0.5" max="3" step="0.25" value="1">
        <span class="slider-value" id="strokeWidthValue">1px</span>
      </div>

      <!-- Primary Color -->
      <div class="control-row">
        <span class="control-label">Color</span>
        <input type="color" class="color-input" id="primaryColor" value="#000000">
      </div>

      <!-- Secondary Color (duotone only) -->
      <div class="control-row" id="secondaryColorRow" style="display: none;">
        <span class="control-label">Fill Color</span>
        <input type="color" class="color-input" id="secondaryColor" value="#666666">
      </div>

      <!-- Opacity (duotone only) -->
      <div class="control-row" id="opacityRow" style="display: none;">
        <span class="control-label">Fill Opacity</span>
        <input type="range" class="slider" id="opacity" min="0" max="100" step="5" value="20">
        <span class="slider-value" id="opacityValue">20%</span>
      </div>
    </div>

    <!-- Icon Grid -->
    <div class="icon-grid" id="iconGrid"></div>

    <!-- Footer -->
    <div class="footer">
      <button class="btn-primary" id="insertBtn" disabled>Insert Icon</button>
      <button class="btn-secondary" id="copyBtn" disabled>Copy SVG</button>
    </div>
  </div>

  <script src="ui.js"></script>
</body>
</html>
```

---

### 5. `scripts/build.ts` (MODIFY)
Add icons generation to build process.

```typescript
// Add to build script:
// 1. First run generate-icons.ts to create icons-data.ts
// 2. Then bundle code.ts and ui.ts
```

---

### 6. `package.json` (MODIFY)

```json
{
  "scripts": {
    "generate": "tsx scripts/generate-icons.ts",
    "build": "pnpm run generate && tsx scripts/build.ts",
    "dev": "pnpm run generate && tsx scripts/build.ts --watch"
  }
}
```

---

## UI Control Visibility Logic

| Variant | Stroke Width | Secondary Color | Fill Opacity |
|---------|--------------|-----------------|--------------|
| Stroke  | ✓ Visible    | Hidden          | Hidden       |
| Duotone | ✓ Visible    | ✓ Visible       | ✓ Visible    |
| Fill    | ✓ Visible    | Hidden          | Hidden       |

**Note:** Stroke width enabled for all variants per user request.

---

## Features

### Core Features
1. **Browse 120 icons** in a 6-column grid
2. **Search** by icon name and tags (debounced 300ms)
3. **Variant switching** (Stroked, Duotone, Filled)
4. **Size presets** (16, 20, 24, 32, 48px)
5. **Stroke width** slider (0.5-3px, all variants)
6. **Primary color** picker
7. **Secondary color** picker (duotone)
8. **Fill opacity** slider (duotone)
9. **Insert icon** at viewport center
10. **Copy SVG** to clipboard

### Interactions
- **Click**: Select icon, enable buttons
- **Double-click**: Insert immediately
- **Hover**: Show icon name tooltip

---

## Implementation Order

### Phase 1: Data Generation
1. Create `scripts/generate-icons.ts`
2. Generate `src/icons-data.ts`
3. Verify all 120 icons × 3 variants

### Phase 2: UI Structure
1. Update `dist/ui.html` with controls
2. Implement `src/ui.ts` state management
3. Render icon grid from generated data

### Phase 3: Customization
1. Implement SVG customization function
2. Wire up all controls
3. Live preview updates

### Phase 4: Plugin Integration
1. Update `src/code.ts` message handling
2. Implement icon insertion
3. Implement clipboard copy

### Phase 5: Polish
1. Add loading states
2. Add error handling
3. Add notifications
4. Performance optimization

---

## Dependencies on @foamicons/core

Functions to import:
```typescript
import {
  toPascalCase,
  toKebabCase,
  getIconVariant,
  // Optionally: parseSvg if we need structured data
} from '@foamicons/core';
```

---

## No Categories (Simplified)

Categories are **not included** in this version to keep implementation simple. Future enhancement could add:
- Manual category assignment
- Auto-categorization by icon name patterns
- Category filter UI

---

## Testing Checklist

- [ ] All 360 icons display correctly
- [ ] Search filters work
- [ ] Variant switching works
- [ ] All controls update preview
- [ ] Insert creates correct Figma node
- [ ] Colors apply correctly
- [ ] Stroke width applies to all variants
- [ ] Copy SVG works
- [ ] Double-click insert works
- [ ] Plugin opens/closes cleanly
