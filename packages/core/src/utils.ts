/**
 * Convert filename to PascalCase component name
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/\.svg$/, '')
    .replace(/[-_\s]+(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^(\w)/, (_, c) => c.toUpperCase());
}

/**
 * Convert PascalCase to kebab-case
 */
export function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Generate a deterministic short hash key for SVG elements
 */
export function generateKey(tag: string, attrs: Record<string, unknown>, index: number): string {
  const str = `${tag}-${JSON.stringify(attrs)}-${index}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36).slice(0, 6);
}
