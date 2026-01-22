import { forwardRef, createElement } from 'react';
import type { CSSProperties } from 'react';
import type { IconProps, IconNode } from './types';

const DEFAULT_SIZE = 16;

export interface IconComponentProps extends IconProps {
  iconNode: IconNode;
  iconName: string;
}

export const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
  (
    {
      color = 'currentColor',
      size,
      strokeWidth = 1,
      absoluteStrokeWidth,
      secondaryColor,
      secondaryOpacity,
      className = '',
      style,
      iconNode,
      iconName,
      children,
      ...rest
    },
    ref
  ) => {
    // Build style object with CSS variables for secondary color/opacity
    const iconStyle: CSSProperties = {
      ...style,
      ...(secondaryColor !== undefined && {
        ['--foamicon-secondary-color' as string]: secondaryColor,
      }),
      ...(secondaryOpacity !== undefined && {
        ['--foamicon-secondary-opacity' as string]: secondaryOpacity,
      }),
    };

    return createElement(
      'svg',
      {
        ref,
        xmlns: 'http://www.w3.org/2000/svg',
        ...(size !== undefined && { width: size, height: size }),
        viewBox: '0 0 16 16',
        fill: 'none',
        stroke: color,
        strokeWidth: absoluteStrokeWidth && size !== undefined
          ? (Number(strokeWidth) * DEFAULT_SIZE) / Number(size)
          : strokeWidth,
        className: ['foamicon', `foamicon-${iconName}`, className]
          .filter(Boolean)
          .join(' '),
        'aria-hidden': true,
        style: Object.keys(iconStyle).length > 0 ? iconStyle : undefined,
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : children ? [children] : []),
      ]
    );
  }
);

Icon.displayName = 'Icon';
