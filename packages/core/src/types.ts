/**
 * Represents a single SVG element as a tuple of [tagName, attributes]
 */
export type IconNodeElement = [string, Record<string, string | Record<string, string>>];

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
 * Determines the icon variant from a filename
 */
export function getIconVariant(filename: string): IconVariant {
  if (filename.includes('-fill.svg')) return 'fill';
  if (filename.includes('-duotone.svg')) return 'duotone';
  return 'stroke';
}
