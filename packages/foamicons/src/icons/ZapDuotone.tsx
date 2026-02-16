import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8.45489 1.62349C8.59312 1.46565 8.84938 1.59962 8.79864 1.80318L7.56192 6.75097C7.53037 6.87719 7.62584 6.99946 7.75595 6.99946H13.5594C13.731 6.99969 13.8227 7.20225 13.7098 7.3315L7.54571 14.3764C7.40754 14.5343 7.15045 14.4002 7.20098 14.1967L8.43771 9.24795C8.46926 9.12173 8.37379 8.99946 8.24368 8.99946H2.44024C2.26875 8.99919 2.17713 8.79765 2.28985 8.66841L8.45489 1.62349Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '939zp3'
    }
  ]
];

/**
 * @component @name ZapDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNDU0ODkgMS42MjM0OUM4LjU5MzEyIDEuNDY1NjUgOC44NDkzOCAxLjU5OTYyIDguNzk4NjQgMS44MDMxOEw3LjU2MTkyIDYuNzUwOTdDNy41MzAzNyA2Ljg3NzE5IDcuNjI1ODQgNi45OTk0NiA3Ljc1NTk1IDYuOTk5NDZIMTMuNTU5NEMxMy43MzEgNi45OTk2OSAxMy44MjI3IDcuMjAyMjUgMTMuNzA5OCA3LjMzMTVMNy41NDU3MSAxNC4zNzY0QzcuNDA3NTQgMTQuNTM0MyA3LjE1MDQ1IDE0LjQwMDIgNy4yMDA5OCAxNC4xOTY3TDguNDM3NzEgOS4yNDc5NUM4LjQ2OTI2IDkuMTIxNzMgOC4zNzM3OSA4Ljk5OTQ2IDguMjQzNjggOC45OTk0NkgyLjQ0MDI0QzIuMjY4NzUgOC45OTkxOSAyLjE3NzEzIDguNzk3NjUgMi4yODk4NSA4LjY2ODQxTDguNDU0ODkgMS42MjM0OVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/zap-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ZapDuotone = createFoamicon('ZapDuotone', __iconNode);
