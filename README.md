# Foamicons

A React icon library with 240 icons, optimized for shadcn/ui and Tailwind CSS. Uses Lucide-style naming conventions.

## Installation

```bash
npm install foamicons
```

## Usage

```tsx
import { Bell, ChevronRight, Search, Mail } from 'foamicons';

// Basic usage
<Bell />

// With Tailwind classes (shadcn pattern)
<Bell className="h-4 w-4 text-muted-foreground" />

// Custom size
<Bell size={24} />

// Custom stroke width
<Bell strokeWidth={1.5} />

// With color prop
<Bell color="blue" />

// With Tailwind color classes
<Bell className="text-blue-500" />

// Constant stroke width at any size (useful for larger icons)
<Bell size={48} strokeWidth={1} absoluteStrokeWidth />

// All SVG props are supported
<Bell onClick={handleClick} aria-label="Notifications" />
```

### Tree-Shakeable Per-Icon Imports

For optimal bundle size, import icons individually:

```tsx
import { Alert } from 'foamicons/icons/Alert';
import { Bell } from 'foamicons/icons/Bell';
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
| `strokeWidth`         | `number\|string` | `1`              | Stroke width of the icon                           |
| `absoluteStrokeWidth` | `boolean`        | `false`          | Keep stroke width constant regardless of icon size |
| `color`               | `string`         | `'currentColor'` | Icon stroke color                                  |
| `className`           | `string`         | -                | CSS classes (Tailwind-friendly)                    |
| `...props`            | `SVGProps`       | -                | Any valid SVG attribute                            |

### About `absoluteStrokeWidth`

By default, when you scale an icon up, the stroke width scales proportionally. With `absoluteStrokeWidth`, the stroke maintains its visual thickness at any size:

```tsx
// Without absoluteStrokeWidth: stroke appears thicker at larger sizes
<Bell size={48} strokeWidth={1} />

// With absoluteStrokeWidth: stroke stays visually consistent
<Bell size={48} strokeWidth={1} absoluteStrokeWidth />
```

The formula used: `adjustedStrokeWidth = strokeWidth * (16 / size)`

## Available Icons

240 icons included. All icons use `currentColor` for easy styling with Tailwind CSS.

## Naming Convention

**Source files use kebab-case, React components use PascalCase:**

- SVG source files: `arrow-down.svg`, `bell-color.svg`, `chevron-right.svg`
- React imports: `import { ArrowDown, BellColor, ChevronRight } from 'foamicons'`
- Downloaded files: `arrow-down.svg`, `bell-color.svg` (kebab-case)
- URLs: `/arrow-down`, `/bell-color` (kebab-case)

**Examples:**
- `arrow-down.svg` → `import { ArrowDown } from 'foamicons'` → downloads as `arrow-down.svg`
- `chevron-right.svg` → `import { ChevronRight } from 'foamicons'` → downloads as `chevron-right.svg`
- `mail-plus.svg` → `import { MailPlus } from 'foamicons'` → downloads as `mail-plus.svg`

## Icon List

alert, alert-color, archive, archive-arrow-up, archive-arrow-up-color, archive-color, arrow-down, arrow-down-color, arrow-down-narrow-wide, arrow-down-narrow-wide-color, arrow-down-up, arrow-down-up-color, arrow-down-wide-narrow, arrow-down-wide-narrow-color, arrow-left, arrow-left-color, arrow-right, arrow-right-color, arrow-right-to-line, arrow-right-to-line-color, arrow-up, arrow-up-a-z, arrow-up-a-z-color, arrow-up-color, arrow-up-narrow-wide, arrow-up-narrow-wide-color, arrow-up-wide-narrow, arrow-up-wide-narrow-color, arrow-up-z-a, arrow-up-z-a-color, ban, ban-color, bell, bell-color, bold, bold-color, bookmark, bookmark-color, calendar, calendar-color, chart-column-square, chart-column-square-color, checkbox, checkbox-color, checkmark, checkmark-color, chevron-down, chevron-down-color, chevron-left, chevron-left-color, chevron-right, chevron-right-color, chevron-up, chevron-up-color, circle-alert, circle-alert-color, circle-dollar-sign, circle-dollar-sign-color, circle-question-mark, circle-question-mark-color, circle-x, circle-x-color, clock, clock-color, cog, cog-color, columns-3, columns-3-color, command, command-color, content-plus, content-plus-color, copy, copy-color, download, download-color, eclipse, eclipse-color, external-link, external-link-color, eye, eye-color, eye-off, eye-off-color, flame, flame-color, frown, frown-color, fullscreen, fullscreen-color, globe, globe-color, grid-1x2, grid-1x2-color, grid-2x2, grid-2x2-color, history, history-color, hotspot, hotspot-color, house, house-color, image, image-color, images, images-color, inbox, inbox-color, info, info-color, italic, italic-color, link, link-color, list, list-color, list-filter, list-filter-color, list-indent-decrease, list-indent-decrease-color, list-indent-increase, list-indent-increase-color, list-ordered, list-ordered-color, loader-circle, loader-circle-color, lock, lock-color, log-out, log-out-color, mail, mail-color, mail-move, mail-move-color, mail-plus, mail-plus-color, map-pin, map-pin-color, maximize, maximize-color, media-kits, media-kits-color, megaphone, megaphone-active, megaphone-active-color, megaphone-color, menu, menu-color, message-square, message-square-color, messages-square, messages-square-color, minus, minus-color, moon, moon-color, mouse-pointer-click, mouse-pointer-click-color, move, move-color, panel-left, panel-left-color, panel-right, panel-right-color, pencil, pencil-color, pin, pin-color, play, play-color, plus, plus-color, reach, reach-color, reel, reel-color, refresh-cw, refresh-cw-color, remove-formatting, remove-formatting-color, reply, reply-color, rotate-cw, rotate-cw-color, rows-2, rows-2-color, save, save-color, search, search-color, search-user, search-user-color, share, share-color, sliders-horizontal, sliders-horizontal-color, sparkles, sparkles-color, square, square-color, square-pen, square-pen-color, star, star-color, sun, sun-color, text-align-center, text-align-center-color, text-align-end, text-align-end-color, text-align-justify, text-align-justify-color, text-align-start, text-align-start-color, thumbs-down, thumbs-down-color, thumbs-up, thumbs-up-color, trash, trash-color, trending-down, trending-down-color, trending-up, trending-up-color, triangle-down-up, triangle-down-up-color, unlink, unlink-color, unlock, unlock-color, upload, upload-color, user, user-color, users, users-color, volume-2, volume-2-color, volume-off, volume-off-color

## Development

```bash
# Generate components from SVGs
npm run generate

# Build the package
npm run build
```

## License

MIT
