import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '11',
      y: '2',
      width: '12',
      height: '6',
      rx: '1',
      transform: 'rotate(90 11 2)',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'vatl3w'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 2L2.5 14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'b8ohag'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 2L13.5 14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '30g76f'
    }
  ]
];

/**
 * @component @name GalleryHorizontalDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTEiIHk9IjIiIHdpZHRoPSIxMiIgaGVpZ2h0PSI2IiByeD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTEgMikiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjUgMkwyLjUgMTQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEzLjUgMkwxMy41IDE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/gallery-horizontal-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryHorizontalDuotone = createFoamicon('GalleryHorizontalDuotone', __iconNode);
