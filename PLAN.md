# Foamicons - Icon Library Build Plan

## Overview
Build a React icon library from ~150 SVG icons, optimized for shadcn/ui and Tailwind CSS projects, publishable to npm.

---

## Target API

```tsx
import { Camera, Heart, Settings } from 'foamicons';

// Tailwind styling (shadcn pattern)
<Camera className="h-4 w-4 text-muted-foreground" />

// Size prop
<Heart size={24} />

// All standard SVG props supported
<Settings strokeWidth={1.5} onClick={handleClick} />
```

---

## Project Structure

```
foamicons/
├── icons/                    # Source SVG files (input)
├── src/
│   ├── icons/                # Generated React components
│   │   ├── Camera.tsx
│   │   ├── Heart.tsx
│   │   └── ...
│   ├── index.ts              # Named exports for all icons
│   └── types.ts              # Shared TypeScript types
├── dist/                     # Build output (gitignored)
│   ├── index.js              # ESM bundle
│   ├── index.cjs             # CommonJS bundle
│   └── index.d.ts            # Type declarations
├── scripts/
│   └── build-icons.ts        # SVG → React component generator
├── package.json
├── tsconfig.json
├── tsup.config.ts            # Build configuration
└── README.md
```

---

## Implementation Steps

### Phase 1: Project Setup

1. **Initialize npm package**
   - Create package.json with proper fields
   - Set up dual ESM/CJS exports
   - Configure peer dependencies (react)

2. **Configure TypeScript**
   - Create tsconfig.json for React/JSX
   - Enable strict mode and declaration generation

3. **Set up build tooling**
   - Install tsup for bundling
   - Configure tree-shaking and minification

### Phase 2: Icon Component Generator

4. **Create SVG processing script**
   - Read all SVGs from `icons/` directory
   - Parse SVG content and extract attributes
   - Clean/normalize SVG markup:
     - Remove hardcoded width/height (use props)
     - Remove hardcoded colors (use currentColor)
     - Remove unnecessary attributes (xmlns, etc.)
     - Preserve viewBox

5. **Generate React components**
   - Template for each icon component:
     ```tsx
     import { forwardRef, SVGProps } from 'react';

     export interface IconProps extends SVGProps<SVGSVGElement> {
       size?: number | string;
     }

     export const IconName = forwardRef<SVGSVGElement, IconProps>(
       ({ size = 24, className, ...props }, ref) => (
         <svg
           ref={ref}
           width={size}
           height={size}
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
           className={className}
           {...props}
         >
           {/* SVG paths here */}
         </svg>
       )
     );

     IconName.displayName = 'IconName';
     ```

6. **Generate index.ts barrel file**
   - Export all icons by name
   - Export types

### Phase 3: Build Pipeline

7. **Configure tsup**
   - ESM and CJS output formats
   - Generate .d.ts declaration files
   - Tree-shakeable output
   - Source maps (optional)

8. **Add npm scripts**
   ```json
   {
     "scripts": {
       "generate": "tsx scripts/build-icons.ts",
       "build": "npm run generate && tsup",
       "prepublishOnly": "npm run build"
     }
   }
   ```

### Phase 4: Package Configuration

9. **Configure package.json exports**
   ```json
   {
     "name": "foamicons",
     "version": "0.1.0",
     "type": "module",
     "main": "./dist/index.cjs",
     "module": "./dist/index.js",
     "types": "./dist/index.d.ts",
     "exports": {
       ".": {
         "import": "./dist/index.js",
         "require": "./dist/index.cjs",
         "types": "./dist/index.d.ts"
       }
     },
     "files": ["dist"],
     "sideEffects": false,
     "peerDependencies": {
       "react": ">=16.8.0"
     }
   }
   ```

10. **Add metadata**
    - Description, keywords, repository, license
    - README with usage examples

### Phase 5: Testing & Publishing

11. **Local testing**
    - npm link to test in a real project
    - Verify tree-shaking works
    - Test with shadcn/ui components

12. **Publish to npm**
    - npm login
    - npm publish (or npm publish --access public for scoped)

---

## Dependencies

**Dev Dependencies:**
- `typescript` - Type checking
- `tsup` - Bundling
- `tsx` - Run TypeScript scripts
- `@types/react` - React type definitions

**Peer Dependencies:**
- `react` >= 16.8.0

---

## SVG Requirements

For best results, source SVGs should:
- Use a consistent viewBox (ideally 24x24)
- Use `stroke="currentColor"` or `fill="currentColor"` for color inheritance
- Not have hardcoded dimensions
- Be optimized (run through SVGO if needed)

---

## Optional Enhancements (Future)

- [ ] Icon preview website/storybook
- [ ] Vue package
- [ ] Figma plugin for syncing icons
- [ ] CLI for adding individual icons to projects (like shadcn)
- [ ] Sprite sheet generation
- [ ] SVGO integration in build script

---

## Next Steps

1. Copy/move your 150 SVG files into the `icons/` folder
2. Run the implementation phases above
3. Test locally before publishing

---

## Notes

- Icon names will be derived from SVG filenames (kebab-case → PascalCase)
  - `arrow-left.svg` → `ArrowLeft`
  - `chevron_down.svg` → `ChevronDown`
- Duplicate names will cause build errors (ensure unique filenames)
