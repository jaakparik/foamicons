import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '2',
      y: '7.5',
      width: '12',
      height: '6',
      rx: '1',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'syxq0f'
    }
  ],
  [
    'path',
    {
      d: 'M3 5H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'tqjq41'
    }
  ],
  [
    'path',
    {
      d: 'M5 2.5H11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'mdfn48'
    }
  ]
];

/**
 * @component @name GalleryVerticalEndFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iNy41IiB3aWR0aD0iMTIiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyA1SDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDIuNUgxMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/gallery-vertical-end-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryVerticalEndFill = createFoamicon('GalleryVerticalEndFill', __iconNode);
