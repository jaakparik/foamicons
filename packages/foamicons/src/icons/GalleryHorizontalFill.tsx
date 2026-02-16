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
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wt0040'
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
 * @component @name GalleryHorizontalFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTEiIHk9IjIiIHdpZHRoPSIxMiIgaGVpZ2h0PSI2IiByeD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTEgMikiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi41IDJMMi41IDE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDJMMTMuNSAxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/gallery-horizontal-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryHorizontalFill = createFoamicon('GalleryHorizontalFill', __iconNode);
