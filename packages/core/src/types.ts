/**
 * Represents a single SVG element as a tuple of [tagName, attributes] or [tagName, attributes, children]
 * The optional third element supports nested structures like <defs><linearGradient><stop/></linearGradient></defs>
 */
export type IconNodeElement = [
  string,
  Record<string, string | Record<string, string>>,
  IconNodeElement[]?
];

/**
 * Represents the parsed structure of an SVG icon
 */
export type IconNode = IconNodeElement[];

/**
 * Parsed SVG result containing viewBox and icon elements
 */
export interface ParsedSvg {
  viewBox: string;
  iconNode: IconNode;
}

/**
 * Icon variant types
 */
export type IconVariant = 'stroke' | 'duotone' | 'fill';

/**
 * Logo variant types - logos can have default (brand colors), dark, or fill variants
 */
export type LogoVariant = 'default' | 'dark' | 'fill';

/**
 * Determines the icon variant from a filename
 */
export function getIconVariant(filename: string): IconVariant {
  if (filename.includes('-fill.svg')) return 'fill';
  if (filename.includes('-duotone.svg')) return 'duotone';
  return 'stroke';
}

/**
 * Determines the logo variant from a filename
 */
export function getLogoVariant(filename: string): LogoVariant {
  if (filename.includes('-dark.svg')) return 'dark';
  if (filename.includes('-fill.svg')) return 'fill';
  return 'default';
}
