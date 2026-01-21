'use strict';

var react = require('react');

// src/Icon.tsx
var DEFAULT_SIZE = 16;
var Icon = react.forwardRef(
  ({
    color = "currentColor",
    size = DEFAULT_SIZE,
    strokeWidth = 1,
    absoluteStrokeWidth,
    className = "",
    iconNode,
    iconName,
    children,
    ...rest
  }, ref) => react.createElement(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * DEFAULT_SIZE / Number(size) : strokeWidth,
      className: ["foamicon", `foamicon-${iconName}`, className].filter(Boolean).join(" "),
      "aria-hidden": true,
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => react.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : children ? [children] : []
    ]
  )
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
//# sourceMappingURL=chunk-BT732HOR.cjs.map
//# sourceMappingURL=chunk-BT732HOR.cjs.map