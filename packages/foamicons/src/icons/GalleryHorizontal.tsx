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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'h9uxrd'
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
 * @component @name GalleryHorizontal
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTEiIHk9IjIiIHdpZHRoPSIxMiIgaGVpZ2h0PSI2IiByeD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTEgMikiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNSAyTDIuNSAxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNSAyTDEzLjUgMTQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/gallery-horizontal
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryHorizontal = createFoamicon('GalleryHorizontal', __iconNode);
