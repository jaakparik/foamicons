/**
 * Represents a single SVG element as a tuple of [tagName, attributes] or [tagName, attributes, children]
 * The optional third element supports nested structures like <defs><linearGradient><stop/></linearGradient></defs>
 */
type IconNodeElement = [
    string,
    Record<string, string | Record<string, string>>,
    IconNodeElement[]?
];
/**
 * Represents the parsed structure of an SVG icon
 */
type IconNode = IconNodeElement[];
/**
 * Parsed SVG result containing viewBox and icon elements
 */
interface ParsedSvg {
    viewBox: string;
    iconNode: IconNode;
}
/**
 * Icon variant types
 */
type IconVariant = 'stroke' | 'duotone' | 'fill';
/**
 * Logo variant types - logos can have default (brand colors), dark, or fill variants
 */
type LogoVariant = 'default' | 'dark' | 'fill';
/**
 * Determines the icon variant from a filename
 */
declare function getIconVariant(filename: string): IconVariant;
/**
 * Determines the logo variant from a filename
 */
declare function getLogoVariant(filename: string): LogoVariant;

/**
 * Convert filename to PascalCase component name
 */
declare function toPascalCase(str: string): string;
/**
 * Convert PascalCase to kebab-case
 */
declare function toKebabCase(str: string): string;
/**
 * Generate a deterministic short hash key for SVG elements
 */
declare function generateKey(tag: string, attrs: Record<string, unknown>, index: number): string;

/**
 * Map of SVG attribute names to React camelCase equivalents
 */
declare const SVG_ATTR_MAP: Record<string, string>;
/**
 * Color transformation options
 */
interface ColorTransformOptions {
    /** The icon variant determines color handling */
    variant: IconVariant;
    /** Primary color replacement (default: 'currentColor') */
    primaryColor?: string;
    /** Secondary color replacement for fill icons (default: CSS variable) */
    secondaryColor?: string;
}
/**
 * Parse options for SVG parsing
 */
interface ParseOptions {
    /** Icon variant for color transformation */
    variant?: IconVariant;
    /** Preserve original colors (for logo color variants) */
    preserveColors?: boolean;
}
/**
 * Transform a color value based on icon variant
 */
declare function transformColor(attrName: 'fill' | 'stroke', attrValue: string, variant: IconVariant): string;
/**
 * Parse an SVG element string into tag and attributes
 */
declare function parseElement(elementStr: string, variant?: IconVariant, preserveColors?: boolean): {
    tag: string;
    attrs: Record<string, string | Record<string, string>>;
} | null;
/**
 * Parse SVG content into IconNode format
 */
declare function parseSvg(svgContent: string, variant?: IconVariant, options?: ParseOptions): ParsedSvg;
/**
 * Generate base64-encoded SVG for previews
 */
declare function generateBase64Preview(svgContent: string): string;

export { type ColorTransformOptions, type IconNode, type IconNodeElement, type IconVariant, type LogoVariant, type ParseOptions, type ParsedSvg, SVG_ATTR_MAP, generateBase64Preview, generateKey, getIconVariant, getLogoVariant, parseElement, parseSvg, toKebabCase, toPascalCase, transformColor };
