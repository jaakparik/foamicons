"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  SVG_ATTR_MAP: () => SVG_ATTR_MAP,
  generateBase64Preview: () => generateBase64Preview,
  generateKey: () => generateKey,
  getIconVariant: () => getIconVariant,
  parseElement: () => parseElement,
  parseSvg: () => parseSvg,
  toKebabCase: () => toKebabCase,
  toPascalCase: () => toPascalCase,
  transformColor: () => transformColor
});
module.exports = __toCommonJS(index_exports);

// src/types.ts
function getIconVariant(filename) {
  if (filename.includes("-fill.svg")) return "fill";
  if (filename.includes("-duotone.svg")) return "duotone";
  return "stroke";
}

// src/utils.ts
function toPascalCase(str) {
  return str.replace(/\.svg$/, "").replace(/[-_\s]+(\w)/g, (_, c) => c.toUpperCase()).replace(/^(\w)/, (_, c) => c.toUpperCase());
}
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function generateKey(tag, attrs, index) {
  const str = `${tag}-${JSON.stringify(attrs)}-${index}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36).slice(0, 6);
}

// src/parser.ts
var SVG_ATTR_MAP = {
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "fill-opacity": "fillOpacity"
};
function transformColor(attrName, attrValue, variant) {
  const isBlack = attrValue === "black" || attrValue === "#000000" || attrValue === "#000";
  const isWhite = attrValue === "white" || attrValue === "#FFFFFF" || attrValue === "#FFF" || attrValue === "#ffffff" || attrValue === "#fff";
  const isHexColor = /^#[0-9A-Fa-f]{3,6}$/.test(attrValue);
  if (variant === "fill") {
    if (isBlack) return "currentColor";
    if (isWhite) return "var(--foamicon-secondary-color, currentColor)";
    return attrValue;
  }
  if (attrName === "fill") {
    if (isHexColor || isBlack) return "currentColor";
    return attrValue;
  }
  if (isHexColor || isBlack || isWhite) return "currentColor";
  return attrValue;
}
function parseElement(elementStr, variant = "stroke") {
  const match = elementStr.match(/^<(\w+)\s+([^>]*?)\s*\/?>$/s);
  if (!match) return null;
  const tag = match[1];
  const attrsStr = match[2];
  const attrs = {};
  const attrRegex = /(\S+?)=["']([^"']*?)["']/g;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
    let attrName = attrMatch[1];
    let attrValue = attrMatch[2];
    if (SVG_ATTR_MAP[attrName]) {
      attrName = SVG_ATTR_MAP[attrName];
    }
    if (attrName === "fill" || attrName === "stroke") {
      attrValue = transformColor(attrName, attrValue, variant);
    }
    attrs[attrName] = attrValue;
  }
  if (attrs.fillOpacity && attrs.fill === "currentColor") {
    attrs.fill = "var(--foamicon-secondary-color, currentColor)";
    attrs.style = { fillOpacity: `var(--foamicon-secondary-opacity, ${attrs.fillOpacity})` };
    delete attrs.fillOpacity;
  }
  if (attrs.strokeOpacity && attrs.stroke === "currentColor") {
    attrs.stroke = "var(--foamicon-secondary-color, currentColor)";
    attrs.style = {
      ...typeof attrs.style === "object" ? attrs.style : {},
      strokeOpacity: `var(--foamicon-secondary-opacity, ${attrs.strokeOpacity})`
    };
    delete attrs.strokeOpacity;
  }
  return { tag, attrs };
}
function parseSvg(svgContent, variant = "stroke") {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 16 16";
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const innerContent = innerMatch ? innerMatch[1].trim() : "";
  const elementRegex = /<(\w+)\s+[^>]*?\/?>/g;
  const iconNode = [];
  let elementMatch;
  let index = 0;
  while ((elementMatch = elementRegex.exec(innerContent)) !== null) {
    const elementStr = elementMatch[0];
    const parsed = parseElement(elementStr, variant);
    if (parsed) {
      const key = generateKey(parsed.tag, parsed.attrs, index);
      parsed.attrs.key = key;
      iconNode.push([parsed.tag, parsed.attrs]);
      index++;
    }
  }
  return { viewBox, iconNode };
}
function generateBase64Preview(svgContent) {
  const cleanedSvg = svgContent.replace(/stroke="black"/g, 'stroke="currentColor"').replace(/fill="black"/g, 'fill="currentColor"').replace(/stroke="#[0-9A-Fa-f]{3,6}"/g, 'stroke="currentColor"').replace(/fill="#[0-9A-Fa-f]{3,6}"/g, 'fill="currentColor"');
  return Buffer.from(cleanedSvg).toString("base64");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SVG_ATTR_MAP,
  generateBase64Preview,
  generateKey,
  getIconVariant,
  parseElement,
  parseSvg,
  toKebabCase,
  toPascalCase,
  transformColor
});
//# sourceMappingURL=index.cjs.map