# Foamicons

A React icon library with 500+ icons and 14 brand logos in multiple styles, optimized for shadcn/ui and Tailwind CSS.

## Packages

This is a monorepo managed with pnpm and Turborepo:

| Package | Description |
|---------|-------------|
| [`foamicons`](packages/foamicons) | React icon library (npm package) |
| [`@foamicons/core`](packages/core) | Shared utilities for SVG parsing |
| [`@foamicons/website`](packages/website) | Icon browser website |
| [`@foamicons/figma-plugin`](packages/figma-plugin) | Figma plugin for inserting icons |

## Quick Start

```bash
# Install the React library
npm install foamicons

# Use icons
import { Bell, BellDuotone, BellFill } from 'foamicons';

# Use logos (with preserved brand colors)
import { LogoGoogle, LogoInstagram } from 'foamicons/logos';
```

## Icon Aliases

Icons support semantic aliases for better discoverability. You can import the same icon using different names:

```tsx
// All import the same Cog icon
import { Cog, Settings, Gear, Preferences } from 'foamicons';

// Aliases work with all variants
import { Settings, SettingsDuotone, SettingsFill } from 'foamicons';
```

Aliases are defined in [`icons/aliases.json`](icons/aliases.json). See the [foamicons README](packages/foamicons/README.md) for the full documentation.

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run website locally
pnpm run dev:website

# Run Figma plugin locally
pnpm run dev:figma
```

## Adding Icons

1. Add SVG files to the `icons/` directory:
   - `icon-name.svg` - Stroked variant
   - `icon-name-duotone.svg` - Duotone variant
   - `icon-name-fill.svg` - Filled variant

2. Add aliases (interactive):
   ```bash
   pnpm add-aliases              # Auto-detects new icons
   pnpm add-aliases arrow-down   # Add aliases for specific icon
   ```

   The script suggests aliases based on the icon name and lets you accept, modify, or add your own.

3. Rebuild: `pnpm build`

4. Test locally:
   - Website: `pnpm dev:website` (http://localhost:5173)
   - Figma: `pnpm dev:figma`, then import manifest in Figma

## Adding Logos

1. Add SVG files to the `icons/logos/` directory:
   - `logo-name.svg` - Default color variant (brand colors preserved)
   - `logo-name-dark.svg` - Dark theme variant (brand colors preserved)
   - `logo-name-fill.svg` - Filled variant (uses currentColor)

2. Add aliases in `icons/logos/aliases.json`

3. Rebuild: `pnpm build`

Logos are exported with a `Logo` prefix (e.g., `LogoGoogle`, `LogoInstagramDark`).

## Release

```bash
# Bump version, build, test, publish to npm, create git tag
pnpm release patch    # 0.7.0 → 0.7.1
pnpm release minor    # 0.7.0 → 0.8.0
pnpm release major    # 0.7.0 → 1.0.0

# Then push to deploy website
git push && git push --tags
```

The release script:
1. Updates version in `foamicons` and `figma-plugin` packages
2. Builds all packages
3. Runs tests
4. Publishes `foamicons` to npm
5. Creates a git commit and tag

Website auto-deploys via Cloudflare Pages on push to main.

### Figma Plugin

The Figma plugin is built locally and doesn't require a separate release. After `pnpm build`:
1. Open Figma → Plugins → Development → Import plugin from manifest
2. Select `packages/figma-plugin/dist/manifest.json`

To publish to Figma Community, use the [Figma Developer Console](https://www.figma.com/developers).

## License

MIT
