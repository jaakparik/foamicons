# Foamicons

A React icon library with 500+ icons and 14 brand logos in multiple styles, optimized for shadcn/ui and Tailwind CSS.

## Installation

```bash
npm install foamicons
```

## Icon Styles

Foamicons includes **167 base icons**, each available in three styles:

| Style | Suffix | Example | Description |
|-------|--------|---------|-------------|
| **Stroked** | (none) | `Bell` | Outline icons with customizable stroke width |
| **Duotone** | `Duotone` | `BellDuotone` | Two-color icons with stroke and semi-transparent fill |
| **Filled** | `Fill` | `BellFill` | Solid filled icons with optional detail strokes |

## Usage

```tsx
import { Bell, BellDuotone, BellFill } from 'foamicons';

// With Tailwind classes (shadcn pattern) - recommended
<Bell className="h-4 w-4 text-muted-foreground" />

// With size prop
<Bell size={24} strokeWidth={1.5} />

// Duotone with custom secondary color
<BellDuotone className="h-5 w-5" secondaryColor="#3b82f6" secondaryOpacity={0.4} />

// Filled icon
<BellFill size={24} />
```

### With shadcn/ui and Tailwind

Foamicons works seamlessly with shadcn/ui patterns:

```tsx
import { Bell, BellDuotone } from 'foamicons';
import { Button } from '@/components/ui/button';

// In buttons (like Lucide icons)
<Button variant="outline" size="icon">
  <Bell className="h-4 w-4" />
</Button>

// With text
<Button>
  <Bell className="mr-2 h-4 w-4" />
  Notifications
</Button>

// Muted foreground color
<Bell className="h-4 w-4 text-muted-foreground" />

// Duotone with theme colors
<BellDuotone
  className="h-5 w-5 text-foreground"
  secondaryColor="hsl(var(--primary))"
  secondaryOpacity={0.3}
/>
```

### Stroked Icons

Basic outline icons with customizable stroke width:

```tsx
import { Bell } from 'foamicons';

<Bell className="h-4 w-4" />
<Bell className="h-5 w-5 text-blue-500" strokeWidth={1.5} />
<Bell size={24} strokeWidth={1.5} />
```

### Duotone Icons

Two-color icons with a stroke color and a semi-transparent fill:

```tsx
import { BellDuotone } from 'foamicons';

// Basic usage - both colors inherit from currentColor
// This creates a true "duotone" effect (two tones of the same color)
<BellDuotone className="h-5 w-5 text-blue-500" />

// Custom secondary color via props (recommended)
<BellDuotone
  className="h-5 w-5 text-blue-500"
  secondaryColor="#93c5fd"
  secondaryOpacity={0.4}
/>

// Custom colors via CSS variables (for theming)
<div style={{
  '--foamicon-secondary-color': '#3b82f6',
  '--foamicon-secondary-opacity': 0.4
}}>
  <BellDuotone className="h-5 w-5" />
</div>
```

### Filled Icons

Solid filled icons with two colors - a fill color for the main shape and a stroke color for internal details:

```tsx
import { BellFill } from 'foamicons';

// Basic usage - inherits from text color
<BellFill className="h-5 w-5 text-foreground" />

// Custom detail color via props (recommended)
<BellFill
  className="h-5 w-5 text-white"
  secondaryColor="#000000"
/>

// Custom colors via CSS variables (for theming)
<div style={{ '--foamicon-secondary-color': '#ffffff' }}>
  <BellFill className="h-5 w-5 text-black" />
</div>
```

**How Filled icons work:**
- The `color` prop (or `currentColor` via Tailwind `text-*`) controls the **fill color** of the main solid shape
- The `secondaryColor` prop (or `--foamicon-secondary-color` CSS variable) controls the **stroke/detail color** for internal elements (like the clapper inside a bell)
- Default: both use `currentColor`, so details blend with the fill unless you specify a secondary color

### Tree-Shakeable Per-Icon Imports

For optimal bundle size, import icons individually:

```tsx
import { Alert } from 'foamicons/icons/Alert';
import { AlertDuotone } from 'foamicons/icons/AlertDuotone';
import { AlertFill } from 'foamicons/icons/AlertFill';
```

## Logos

Foamicons includes **14 brand logos** with preserved brand colors. Logos are available in up to three variants:

| Variant | Suffix | Example | Description |
|---------|--------|---------|-------------|
| **Color** | (none) | `LogoGoogle` | Original brand colors |
| **Dark** | `Dark` | `LogoGoogleDark` | Dark theme brand colors |
| **Fill** | `Fill` | `LogoGoogleFill` | Single color (uses currentColor) |

### Usage

```tsx
// Import from the logos subpath
import { LogoGoogle, LogoInstagram, LogoTiktok } from 'foamicons/logos';

// Or import alongside icons from main entry
import { Bell, LogoGoogle } from 'foamicons';

// Logos preserve brand colors by default
<LogoInstagram size={32} />

// Dark variant for dark backgrounds
<LogoInstagramDark size={32} />

// Fill variant uses currentColor like regular icons
<LogoInstagramFill className="h-8 w-8 text-pink-500" />
```

### Per-Logo Imports

```tsx
import { LogoGoogle } from 'foamicons/logos/LogoGoogle';
import { LogoInstagramDark } from 'foamicons/logos/LogoInstagramDark';
```

### Available Logos

Google, Gmail, Instagram, TikTok, YouTube, Snapchat, LinkedIn, Facebook, Microsoft, Foam, FoamSymbol

### Export Aliases

Each icon is available under multiple export names:

```tsx
import { Alert, AlertIcon, FoamAlert } from 'foamicons';
// All three reference the same component
```

### Semantic Aliases

Icons can also be imported using semantic aliases that map to canonical icon names. This improves discoverability and allows you to use familiar names:

```tsx
// All of these import the same icon (Cog)
import { Cog, Settings, Gear, Preferences, Config } from 'foamicons';

// Aliases work with all variants
import { Settings, SettingsDuotone, SettingsFill } from 'foamicons';

// Aliases also have Icon/Foam prefixes
import { SettingsIcon, FoamSettings } from 'foamicons';
```

**Common alias examples:**
| Canonical Name | Aliases |
|---------------|---------|
| `Search` | `Find`, `Lookup`, `MagnifyingGlass`, `Query` |
| `Cog` | `Settings`, `Gear`, `Preferences`, `Config` |
| `House` | `Home` |
| `User` | `Person`, `Profile`, `Account` |
| `Trash` | `Delete`, `Remove`, `Bin`, `Garbage` |
| `Checkmark` | `Check`, `Done`, `Complete`, `Tick`, `Success` |
| `CircleX` | `Close`, `Cancel`, `X`, `Times`, `Clear` |
| `CircleAlert` | `WarningCircle`, `Error` |

See [`icons/aliases.json`](../../icons/aliases.json) for the complete list.

### Alias Lookup Helpers

For tooling and dynamic usage, the library exports helper maps:

```tsx
import {
  iconAliases,      // { Search: ['Find', 'Lookup', ...], ... }
  aliasToCanonical, // { Find: 'Search', Settings: 'Cog', ... }
  iconTags,         // { Search: ['search', 'find'], ... }
  getCanonicalName  // (alias: string) => canonicalName
} from 'foamicons';

// Get canonical name from an alias
getCanonicalName('Settings'); // 'Cog'
getCanonicalName('Search');   // 'Search' (already canonical)
```

## Props

| Prop                  | Type             | Default          | Description                                        |
| --------------------- | ---------------- | ---------------- | -------------------------------------------------- |
| `size`                | `number\|string` | `16`             | Width and height                                   |
| `strokeWidth`         | `number\|string` | `1`              | Stroke width                                       |
| `absoluteStrokeWidth` | `boolean`        | `true`           | Keep stroke width constant regardless of icon size |
| `color`               | `string`         | `'currentColor'` | Primary icon color (or use Tailwind `text-*`)      |
| `secondaryColor`      | `string`         | `'currentColor'` | Secondary color for duotone/fill variants          |
| `secondaryOpacity`    | `number`         | `0.4`            | Opacity of secondary color (duotone icons)         |
| `className`           | `string`         | -                | CSS classes (Tailwind-friendly)                    |
| `...props`            | `SVGProps`       | -                | Any valid SVG attribute                            |

### CSS Variables (Alternative to Props)

For app-wide theming, you can set these CSS variables instead of using props:

| Variable | Used by | Description |
|----------|---------|-------------|
| `--foamicon-secondary-color` | Duotone, Filled | Secondary color for fills/details |
| `--foamicon-secondary-opacity` | Duotone | Opacity of the secondary fill (0-1) |

```css
/* In your globals.css */
:root {
  --foamicon-secondary-color: hsl(var(--primary));
  --foamicon-secondary-opacity: 0.4;
}
```

### About `absoluteStrokeWidth`

By default, `absoluteStrokeWidth` is enabled, meaning the stroke maintains its visual thickness at any size. If you want the stroke to scale proportionally with the icon, disable it:

```tsx
// Default (absoluteStrokeWidth=true): stroke stays visually consistent
<Bell size={48} strokeWidth={0.75} />

// With absoluteStrokeWidth disabled: stroke scales with icon size
<Bell size={48} strokeWidth={0.75} absoluteStrokeWidth={false} />
```

## Naming Convention

**Source files use kebab-case, React components use PascalCase:**

| Style | SVG File | React Import |
|-------|----------|--------------|
| Stroked | `bell.svg` | `import { Bell } from 'foamicons'` |
| Duotone | `bell-duotone.svg` | `import { BellDuotone } from 'foamicons'` |
| Filled | `bell-fill.svg` | `import { BellFill } from 'foamicons'` |

## Available Icons (167 base icons × 3 styles = 501 total)

alert, archive, archive-arrow-up, arrow-down, arrow-down-0-1, arrow-down-1-0, arrow-down-I-G, arrow-down-S-C, arrow-down-T-T, arrow-down-Y-T, arrow-down-narrow-wide, arrow-down-up, arrow-down-wide-narrow, arrow-left, arrow-right, arrow-right-to-line, arrow-up, arrow-up-I-G, arrow-up-S-C, arrow-up-T-T, arrow-up-Y-T, arrow-up-a-z, arrow-up-narrow-wide, arrow-up-wide-narrow, arrow-up-z-a, at-sign, ban, bell, bold, bookmark, calendar, chart-column-square, checkbox, checkmark, chevron-down, chevron-left, chevron-right, chevron-up, circle-alert, circle-dollar-sign, circle-question-mark, circle-x, clock, clock-arrow-down, clock-arrow-up, cog, columns-3, command, content-heart, content-plus, content-user, copy, download, eclipse, ellipsis, ellipsis-vertical, external-link, eye, eye-off, file, file-arrow-down, file-arrow-left, file-arrow-left-right, file-arrow-right, file-arrow-up, file-check, file-cog, file-plus, file-user, file-x, flame, frown, fullscreen, globe, grid-1x2, grid-2x2, grip, grip-horizontal, grip-vertical, heart, history, hotspot, house, image, images, inbox, info, italic, link, list, list-filter, list-indent-decrease, list-indent-increase, list-ordered, loader-circle, lock, log-out, mail, mail-move, mail-plus, map-pin, maximize, megaphone, megaphone-active, menu, message-square, messages-square, minus, moon, mouse-pointer-click, move, notebook, office, panel-left, panel-right, pencil, pin, play, plus, pointer, quotation-mark-left, quotation-mark-right, reach, reel, refresh-cw, remove-formatting, reply, rolodex, rotate-cw, rows-2, save, search, search-user, share, sliders-horizontal, smile, sparkles, square, square-pen, star, sun, text-align-center, text-align-end, text-align-justify, text-align-start, thumbs-down, thumbs-up, trash, trash-empty, trending-down, trending-up, triangle-down, triangle-down-up, triangle-up, unlink, unlock, upload, user, user-arrow-left, user-arrow-left-right, user-arrow-out-up-right, user-arrow-right, user-cog, user-plus, users, volume-2, volume-off

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
