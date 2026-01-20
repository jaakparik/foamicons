import type { IconNode, ParsedSvg, IconVariant } from './types';
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
  variant: IconVariant = 'stroke'
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

    // Transform colors
    if (attrName === 'fill' || attrName === 'stroke') {
      attrValue = transformColor(attrName, attrValue, variant);
    }

    attrs[attrName] = attrValue;
  }

  // Handle secondary color for elements with opacity
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

  return { tag, attrs };
}

/**
 * Parse SVG content into IconNode format
 */
export function parseSvg(svgContent: string, variant: IconVariant = 'stroke'): ParsedSvg {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16';

  // Extract inner content (everything between <svg> and </svg>)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const innerContent = innerMatch ? innerMatch[1].trim() : '';

  // Match all SVG elements (self-closing)
  const elementRegex = /<(\w+)\s+[^>]*?\/?>/g;
  const iconNode: IconNode = [];

  let elementMatch;
  let index = 0;
  while ((elementMatch = elementRegex.exec(innerContent)) !== null) {
    const elementStr = elementMatch[0];
    const parsed = parseElement(elementStr, variant);

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
