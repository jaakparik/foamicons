import { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

/**
 * Represents the structure of an SVG icon's child elements.
 * Each tuple contains the element tag name and its attributes.
 */
type IconNode = [elementName: string, attrs: Record<string, string | Record<string, string>>][];
interface IconProps extends SVGProps<SVGSVGElement> {
    /**
     * Icon size (width and height).
     * If not provided, the icon can be sized via CSS classes (e.g., Tailwind's h-4 w-4).
     */
    size?: number | string;
    /**
     * Stroke width
     * @default 1
     */
    strokeWidth?: number | string;
    /**
     * When true, keeps the stroke width constant regardless of icon size.
     * Uses the formula: strokeWidth * (defaultSize / size)
     * @default false
     */
    absoluteStrokeWidth?: boolean;
    /**
     * Icon color (stroke color)
     * @default 'currentColor'
     */
    color?: string;
    /**
     * Secondary color for duotone and fill icon variants.
     * Sets the --foamicon-secondary-color CSS variable.
     * @default 'currentColor'
     */
    secondaryColor?: string;
    /**
     * Opacity of the secondary color for duotone icons.
     * Sets the --foamicon-secondary-opacity CSS variable.
     * @default 0.4
     */
    secondaryOpacity?: number;
}
/**
 * Type alias for a Foamicon component
 */
type FoamIcon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

export type { FoamIcon as F, IconNode as I, IconProps as a };
