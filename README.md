# Foamicons

A React icon library with 125 icons, optimized for shadcn/ui and Tailwind CSS.

## Installation

```bash
npm install foamicons
```

## Usage

```tsx
import { Heart, ChevronRight, Search } from 'foamicons';

// Basic usage
<Heart />

// With Tailwind classes (shadcn pattern)
<Heart className="h-4 w-4 text-muted-foreground" />

// Custom size
<Heart size={24} />

// With color
<Heart className="text-red-500" />

// All SVG props are supported
<Heart onClick={handleClick} aria-label="Like" />
```

## Props

| Prop        | Type             | Default | Description                     |
| ----------- | ---------------- | ------- | ------------------------------- |
| `size`      | `number\|string` | `16`    | Width and height of the icon    |
| `className` | `string`         | -       | CSS classes (Tailwind-friendly) |
| `...props`  | `SVGProps`       | -       | Any valid SVG attribute         |

## Available Icons

125 icons included. All icons use `currentColor` for easy styling.

## Development

```bash
# Generate components from SVGs
npm run generate

# Build the package
npm run build
```

## License

MIT
