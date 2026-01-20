// Types
export type {
  IconNode,
  IconNodeElement,
  ParsedSvg,
  IconVariant,
} from './types';
export { getIconVariant } from './types';

// Utils
export { toPascalCase, toKebabCase, generateKey } from './utils';

// Parser
export {
  SVG_ATTR_MAP,
  transformColor,
  parseElement,
  parseSvg,
  generateBase64Preview,
} from './parser';
export type { ColorTransformOptions } from './parser';
