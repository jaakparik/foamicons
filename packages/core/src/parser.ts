import type { IconNode, IconNodeElement, ParsedSvg, IconVariant } from './types';
import { generateKey } from './utils';

/**
 * Map of SVG attribute names to React camelCase equivalents
 */
export const SVG_ATTR_MAP: Record<string, string> = {
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'gradient-units': 'gradientUnits',
  'gradient-transform': 'gradientTransform',
  'xlink:href': 'xlinkHref',
};

/**
 * Color transformation options
 */
export interface ColorTransformOptions {
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
export interface ParseOptions {
  /** Icon variant for color transformation */
  variant?: IconVariant;
  /** Preserve original colors (for logo color variants) */
  preserveColors?: boolean;
}

/**
 * Transform a color value based on icon variant
 */
export function transformColor(
  attrName: 'fill' | 'stroke',
  attrValue: string,
  variant: IconVariant
): string {
  const isBlack = attrValue === 'black' || attrValue === '#000000' || attrValue === '#000';
  const isWhite = attrValue === 'white' || attrValue === '#FFFFFF' || attrValue === '#FFF' ||
                  attrValue === '#ffffff' || attrValue === '#fff';
  const isHexColor = /^#[0-9A-Fa-f]{3,6}$/.test(attrValue);

  if (variant === 'fill') {
    // Fill icons: black → currentColor, white → secondary color
    if (isBlack) return 'currentColor';
    if (isWhite) return 'var(--foamicon-secondary-color, currentColor)';
    return attrValue;
  }

  // Stroke/Duotone icons
  if (attrName === 'fill') {
    if (isHexColor || isBlack) return 'currentColor';
    return attrValue; // Keep white for clipPath masks
  }

  // Stroke attribute
  if (isHexColor || isBlack || isWhite) return 'currentColor';
  return attrValue;
}

/**
 * Parse an SVG element string into tag and attributes
 */
export function parseElement(
  elementStr: string,
  variant: IconVariant = 'stroke',
  preserveColors: boolean = false
): { tag: string; attrs: Record<string, string | Record<string, string>> } | null {
  // Match self-closing tags like <path ... /> or <circle ... />
  const match = elementStr.match(/^<(\w+)\s+([^>]*?)\s*\/?>$/s);
  if (!match) return null;

  const tag = match[1];
  const attrsStr = match[2];

  const attrs: Record<string, string | Record<string, string>> = {};

  // Parse attributes - handle both single and double quoted values
  const attrRegex = /(\S+?)=["']([^"']*?)["']/g;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
    let attrName = attrMatch[1];
    let attrValue = attrMatch[2];

    // Convert attribute name to camelCase if needed
    if (SVG_ATTR_MAP[attrName]) {
      attrName = SVG_ATTR_MAP[attrName];
    }

    // Transform colors (unless preserveColors is true)
    if (!preserveColors && (attrName === 'fill' || attrName === 'stroke')) {
      attrValue = transformColor(attrName, attrValue, variant);
    }

    attrs[attrName] = attrValue;
  }

  // Handle secondary color for elements with opacity (only if not preserving colors)
  if (!preserveColors) {
    if (attrs.fillOpacity && attrs.fill === 'currentColor') {
      attrs.fill = 'var(--foamicon-secondary-color, currentColor)';
      attrs.style = { fillOpacity: `var(--foamicon-secondary-opacity, ${attrs.fillOpacity})` };
      delete attrs.fillOpacity;
    }
    if (attrs.strokeOpacity && attrs.stroke === 'currentColor') {
      attrs.stroke = 'var(--foamicon-secondary-color, currentColor)';
      attrs.style = {
        ...(typeof attrs.style === 'object' ? attrs.style : {}),
        strokeOpacity: `var(--foamicon-secondary-opacity, ${attrs.strokeOpacity})`
      };
      delete attrs.strokeOpacity;
    }
  }

  return { tag, attrs };
}

/**
 * Parse attributes from an element opening tag
 */
function parseAttributes(
  attrsStr: string,
  variant: IconVariant,
  preserveColors: boolean
): Record<string, string | Record<string, string>> {
  const attrs: Record<string, string | Record<string, string>> = {};

  // Parse attributes - handle both single and double quoted values
  const attrRegex = /(\S+?)=["']([^"']*?)["']/g;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
    let attrName = attrMatch[1];
    let attrValue = attrMatch[2];

    // Convert attribute name to camelCase if needed
    if (SVG_ATTR_MAP[attrName]) {
      attrName = SVG_ATTR_MAP[attrName];
    }

    // Transform colors (unless preserveColors is true)
    if (!preserveColors && (attrName === 'fill' || attrName === 'stroke')) {
      attrValue = transformColor(attrName, attrValue, variant);
    }

    attrs[attrName] = attrValue;
  }

  // Handle secondary color for elements with opacity (only if not preserving colors)
  if (!preserveColors) {
    if (attrs.fillOpacity && attrs.fill === 'currentColor') {
      attrs.fill = 'var(--foamicon-secondary-color, currentColor)';
      attrs.style = { fillOpacity: `var(--foamicon-secondary-opacity, ${attrs.fillOpacity})` };
      delete attrs.fillOpacity;
    }
    if (attrs.strokeOpacity && attrs.stroke === 'currentColor') {
      attrs.stroke = 'var(--foamicon-secondary-color, currentColor)';
      attrs.style = {
        ...(typeof attrs.style === 'object' ? attrs.style : {}),
        strokeOpacity: `var(--foamicon-secondary-opacity, ${attrs.strokeOpacity})`
      };
      delete attrs.strokeOpacity;
    }
  }

  return attrs;
}

/**
 * Recursively parse a nested element structure (like defs > linearGradient > stop)
 */
function parseNestedElement(
  content: string,
  variant: IconVariant,
  preserveColors: boolean,
  keyPrefix: string
): IconNodeElement | null {
  // Match opening tag
  const openMatch = content.match(/^<(\w+)([^>]*)>/);
  if (!openMatch) return null;

  const tag = openMatch[1];
  const attrsStr = openMatch[2];
  const attrs = parseAttributes(attrsStr, variant, preserveColors);
  attrs.key = keyPrefix;

  // Find inner content (between opening and closing tags)
  const openTagEnd = openMatch[0].length;
  const closeTagStart = content.lastIndexOf(`</${tag}>`);

  if (closeTagStart === -1) {
    // Self-closing or no closing tag found
    return [tag, attrs];
  }

  const innerContent = content.slice(openTagEnd, closeTagStart).trim();

  if (!innerContent) {
    return [tag, attrs];
  }

  // Parse children
  const children: IconNodeElement[] = [];
  let childIndex = 0;

  // Match all direct child elements
  const childRegex = /<(\w+)([^>]*?)(?:\/>|>([\s\S]*?)<\/\1>)/g;
  let childMatch;

  while ((childMatch = childRegex.exec(innerContent)) !== null) {
    const childTag = childMatch[1];
    const childAttrsStr = childMatch[2];
    const childInner = childMatch[3];

    const childAttrs = parseAttributes(childAttrsStr, variant, preserveColors);
    childAttrs.key = `${keyPrefix}-${childIndex}`;

    if (childInner !== undefined && childInner.trim()) {
      // Element has inner content, parse recursively
      const childElement = parseNestedElement(
        childMatch[0],
        variant,
        preserveColors,
        `${keyPrefix}-${childIndex}`
      );
      if (childElement) {
        children.push(childElement);
      }
    } else {
      // Self-closing or empty element
      children.push([childTag, childAttrs]);
    }

    childIndex++;
  }

  if (children.length > 0) {
    return [tag, attrs, children];
  }

  return [tag, attrs];
}

/**
 * Parse SVG content into IconNode format
 */
export function parseSvg(svgContent: string, variant: IconVariant = 'stroke', options?: ParseOptions): ParsedSvg {
  const preserveColors = options?.preserveColors ?? false;

  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16';

  // Extract inner content (everything between <svg> and </svg>)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const innerContent = innerMatch ? innerMatch[1].trim() : '';

  const iconNode: IconNode = [];
  let index = 0;

  // Check for <defs> section first
  const defsMatch = innerContent.match(/<defs>([\s\S]*?)<\/defs>/);
  if (defsMatch) {
    const defsContent = defsMatch[0];
    const defsElement = parseNestedElement(defsContent, variant, preserveColors, `defs-${index}`);
    if (defsElement) {
      iconNode.push(defsElement);
      index++;
    }
  }

  // Parse non-defs elements (paths, circles, etc.)
  // Match all SVG elements that are NOT inside defs
  const contentWithoutDefs = innerContent.replace(/<defs>[\s\S]*?<\/defs>/g, '');

  // Match self-closing tags like <path ... /> or <circle ... />
  const elementRegex = /<(\w+)\s+([^>]*?)\s*\/?>(?![^<]*<\/\1>)/g;
  let elementMatch;

  while ((elementMatch = elementRegex.exec(contentWithoutDefs)) !== null) {
    const elementStr = elementMatch[0];
    const parsed = parseElement(elementStr, variant, preserveColors);

    if (parsed) {
      // Add unique key for React
      const key = generateKey(parsed.tag, parsed.attrs, index);
      parsed.attrs.key = key;

      iconNode.push([parsed.tag, parsed.attrs]);
      index++;
    }
  }

  return { viewBox, iconNode };
}

/**
 * Generate base64-encoded SVG for previews
 */
export function generateBase64Preview(svgContent: string): string {
  const cleanedSvg = svgContent
    .replace(/stroke="black"/g, 'stroke="currentColor"')
    .replace(/fill="black"/g, 'fill="currentColor"')
    .replace(/stroke="#[0-9A-Fa-f]{3,6}"/g, 'stroke="currentColor"')
    .replace(/fill="#[0-9A-Fa-f]{3,6}"/g, 'fill="currentColor"');

  return Buffer.from(cleanedSvg).toString('base64');
}
