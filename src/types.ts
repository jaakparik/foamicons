import type { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon size (width and height)
   * @default 16
   */
  size?: number | string;
  /**
   * Stroke width
   * @default 1
   */
  strokeWidth?: number | string;
}

export type Icon = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;
