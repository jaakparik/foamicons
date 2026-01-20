# Foamicons

A React icon library with 360 icons in three styles, optimized for shadcn/ui and Tailwind CSS.

## Installation

```bash
npm install foamicons
```

## Icon Styles

Foamicons includes **120 base icons**, each available in three styles:

| Style | Suffix | Example | Description |
|-------|--------|---------|-------------|
| **Stroked** | (none) | `Bell` | Outline icons with customizable stroke width |
| **Duotone** | `Duotone` | `BellDuotone` | Two-color icons with stroke and semi-transparent fill |
| **Filled** | `Fill` | `BellFill` | Solid filled icons with optional detail strokes |

## Usage

```tsx
import { Bell, BellDuotone, BellFill } from 'foamicons';

// Stroked icon
<Bell size={24} strokeWidth={1.5} />

// Duotone icon
<BellDuotone size={24} />

// Filled icon
<BellFill size={24} />

// With Tailwind classes (shadcn pattern)
<Bell className="h-4 w-4 text-muted-foreground" />
```

### Stroked Icons

Basic outline icons with customizable stroke width:

```tsx
import { Bell } from 'foamicons';

<Bell />
<Bell size={24} strokeWidth={1.5} />
<Bell className="text-blue-500" />
```

### Duotone Icons

Two-color icons with a stroke color and a semi-transparent fill:

```tsx
import { BellDuotone } from 'foamicons';

// Basic usage - uses currentColor for both
<BellDuotone />

// Custom colors via CSS variables
<div style={{
  color: '#000000',
  '--foamicon-secondary-color': '#3b82f6',
  '--foamicon-secondary-opacity': 0.2
}}>
  <BellDuotone size={24} />
</div>
```

### Filled Icons

Solid filled icons with two colors - a fill color for the main shape and a stroke color for internal details:

```tsx
import { BellFill } from 'foamicons';

// Basic usage
<BellFill />

// Custom colors via CSS variables
<div style={{
  color: '#000000',                              // Fill color (main shape)
  '--foamicon-secondary-color': '#ffffff'        // Stroke color (details)
}}>
  <BellFill size={24} />
</div>
```

**How Filled icons work:**
- The `color` prop (or `currentColor`) controls the **fill color** of the main solid shape
- The `--foamicon-secondary-color` CSS variable controls the **stroke/detail color** for internal elements (like the clapper inside a bell)
- Default colors: In dark mode, fill is white and details are black. In light mode, fill is black and details are white.

Example with explicit colors:
```tsx
// Dark background: white icon with black details
<div style={{ color: '#ffffff', '--foamicon-secondary-color': '#000000' }}>
  <AlertFill size={32} />
</div>

// Light background: black icon with white details
<div style={{ color: '#000000', '--foamicon-secondary-color': '#ffffff' }}>
  <AlertFill size={32} />
</div>
```

### Tree-Shakeable Per-Icon Imports

For optimal bundle size, import icons individually:

```tsx
import { Alert } from 'foamicons/icons/Alert';
import { AlertDuotone } from 'foamicons/icons/AlertDuotone';
import { AlertFill } from 'foamicons/icons/AlertFill';
```

### Export Aliases

Each icon is available under multiple names:

```tsx
import { Alert, AlertIcon, FoamAlert } from 'foamicons';
// All three reference the same component
```

## Props

| Prop                  | Type             | Default          | Description                                        |
| --------------------- | ---------------- | ---------------- | -------------------------------------------------- |
| `size`                | `number\|string` | `16`             | Width and height of the icon                       |
| `strokeWidth`         | `number\|string` | `1`              | Stroke width (stroked icons only)                  |
| `absoluteStrokeWidth` | `boolean`        | `false`          | Keep stroke width constant regardless of icon size |
| `color`               | `string`         | `'currentColor'` | Icon color                                         |
| `className`           | `string`         | -                | CSS classes (Tailwind-friendly)                    |
| `...props`            | `SVGProps`       | -                | Any valid SVG attribute                            |

### CSS Variables

| Variable | Used by | Description |
|----------|---------|-------------|
| `--foamicon-secondary-color` | Duotone, Filled | Secondary color for fills/details |
| `--foamicon-secondary-opacity` | Duotone | Opacity of the secondary fill (0-1) |

### About `absoluteStrokeWidth`

By default, when you scale an icon up, the stroke width scales proportionally. With `absoluteStrokeWidth`, the stroke maintains its visual thickness at any size:

```tsx
// Without absoluteStrokeWidth: stroke appears thicker at larger sizes
<Bell size={48} strokeWidth={1} />

// With absoluteStrokeWidth: stroke stays visually consistent
<Bell size={48} strokeWidth={1} absoluteStrokeWidth />
```

## Naming Convention

**Source files use kebab-case, React components use PascalCase:**

| Style | SVG File | React Import |
|-------|----------|--------------|
| Stroked | `bell.svg` | `import { Bell } from 'foamicons'` |
| Duotone | `bell-duotone.svg` | `import { BellDuotone } from 'foamicons'` |
| Filled | `bell-fill.svg` | `import { BellFill } from 'foamicons'` |

## Available Icons (120 base icons × 3 styles = 360 total)

alert, archive, archive-arrow-up, arrow-down, arrow-down-narrow-wide, arrow-down-up, arrow-down-wide-narrow, arrow-left, arrow-right, arrow-right-to-line, arrow-up, arrow-up-a-z, arrow-up-narrow-wide, arrow-up-wide-narrow, arrow-up-z-a, ban, bell, bold, bookmark, calendar, chart-column-square, checkbox, checkmark, chevron-down, chevron-left, chevron-right, chevron-up, circle-alert, circle-dollar-sign, circle-question-mark, circle-x, clock, cog, columns-3, command, content-plus, copy, download, eclipse, external-link, eye, eye-off, flame, frown, fullscreen, globe, grid-1x2, grid-2x2, history, hotspot, house, image, images, inbox, info, italic, link, list, list-filter, list-indent-decrease, list-indent-increase, list-ordered, loader-circle, lock, log-out, mail, mail-move, mail-plus, map-pin, maximize, media-kits, megaphone, megaphone-active, menu, message-square, messages-square, minus, moon, mouse-pointer-click, move, panel-left, panel-right, pencil, pin, play, plus, reach, reel, refresh-cw, remove-formatting, reply, rotate-cw, rows-2, save, search, search-user, share, sliders-horizontal, sparkles, square, square-pen, star, sun, text-align-center, text-align-end, text-align-justify, text-align-start, thumbs-down, thumbs-up, trash, trending-down, trending-up, triangle-down-up, unlink, unlock, upload, user, users, volume-2, volume-off

Each icon is available in three variants by adding the suffix:
- `{icon}` - Stroked (e.g., `Bell`)
- `{icon}Duotone` - Duotone (e.g., `BellDuotone`)
- `{icon}Fill` - Filled (e.g., `BellFill`)

## Development

```bash
# Generate components from SVGs
npm run generate

# Build the package
npm run build

# Run tests
npm test
```

## License

MIT
