# Icons Directory

This directory contains the source SVG files for all Foamicons.

## File Structure

Each icon has three variants:
- `{name}.svg` - Stroked (outline) variant
- `{name}-duotone.svg` - Duotone (two-color) variant
- `{name}-fill.svg` - Filled (solid) variant

Example:
```
bell.svg
bell-duotone.svg
bell-fill.svg
```

## Aliases and Tags

The `aliases.json` file defines semantic aliases and search tags for icons.

### Format

```json
{
  "icon-name": {
    "aliases": ["alternate-name", "another-name"],
    "tags": ["keyword1", "keyword2"]
  }
}
```

### Aliases vs Tags

| Feature | Aliases | Tags |
|---------|---------|------|
| **Purpose** | Alternative import names | Search keywords |
| **Importable** | Yes - generates exports | No |
| **Searchable** | Yes | Yes |
| **Example** | `import { Settings } from 'foamicons'` | Searching "config" finds Cog |

### Adding Aliases

1. Edit `aliases.json`
2. Add your icon entry with aliases and tags
3. Run `pnpm build` to regenerate exports

### Validation Rules

The build script validates aliases to prevent conflicts:

1. **No canonical conflicts**: An alias cannot match an existing icon name
   - `alert` cannot be an alias if `alert.svg` exists

2. **No duplicate aliases**: Each alias can only be used by one icon
   - If `settings` is an alias for `cog`, it cannot also be used for another icon

3. **Case-insensitive matching**: `Settings` and `settings` are considered the same

Build will fail with an error message if validation fails.

### Generated Exports

For each alias, the build generates exports with all suffixes:

```tsx
// If "settings" is an alias for "cog", these exports are generated:
export { Cog as Settings } from './icons/Cog';
export { Cog as SettingsIcon } from './icons/Cog';
export { Cog as FoamSettings } from './icons/Cog';
export { CogDuotone as SettingsDuotone } from './icons/CogDuotone';
export { CogDuotone as SettingsDuotoneIcon } from './icons/CogDuotone';
export { CogDuotone as FoamSettingsDuotone } from './icons/CogDuotone';
export { CogFill as SettingsFill } from './icons/CogFill';
// ... etc
```

### Example Entry

```json
{
  "cog": {
    "aliases": ["settings", "gear", "preferences", "config", "configuration", "options", "cogwheel"],
    "tags": ["settings", "configuration", "preferences"]
  }
}
```

This allows importing via any of these names:
- `Cog`, `CogDuotone`, `CogFill` (canonical)
- `Settings`, `SettingsDuotone`, `SettingsFill`
- `Gear`, `GearDuotone`, `GearFill`
- `Preferences`, `PreferencesDuotone`, `PreferencesFill`
- etc.

And searching for "config" or "preferences" in the website/Figma plugin will find the cog icon.
