'use strict';

var react = require('react');

// src/Icon.tsx
var DEFAULT_SIZE = 16;
var Icon = react.forwardRef(
  ({
    color = "currentColor",
    size,
    strokeWidth = 1,
    absoluteStrokeWidth,
    secondaryColor,
    secondaryOpacity,
    className = "",
    style,
    iconNode,
    iconName,
    children,
    ...rest
  }, ref) => {
    const iconStyle = {
      ...style,
      ...secondaryColor !== void 0 && {
        ["--foamicon-secondary-color"]: secondaryColor
      },
      ...secondaryOpacity !== void 0 && {
        ["--foamicon-secondary-opacity"]: secondaryOpacity
      }
    };
    return react.createElement(
      "svg",
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        ...size !== void 0 && { width: size, height: size },
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: color,
        strokeWidth: absoluteStrokeWidth && size !== void 0 ? Number(strokeWidth) * DEFAULT_SIZE / Number(size) : strokeWidth,
        className: ["foamicon", `foamicon-${iconName}`, className].filter(Boolean).join(" "),
        "aria-hidden": true,
        style: Object.keys(iconStyle).length > 0 ? iconStyle : void 0,
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => react.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : children ? [children] : []
      ]
    );
  }
);
Icon.displayName = "Icon";
var createFoamicon = (name, iconNode) => {
  const Component = react.forwardRef(
    (props, ref) => react.createElement(Icon, {
      ref,
      iconNode,
      iconName: toKebabCase(name),
      ...props
    })
  );
  Component.displayName = name;
  return Component;
};
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

exports.Icon = Icon;
exports.createFoamicon = createFoamicon;
//# sourceMappingURL=chunk-HCQ35QXF.cjs.map
//# sourceMappingURL=chunk-HCQ35QXF.cjs.map