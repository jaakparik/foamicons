import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '7.5',
      y: '14',
      width: '12',
      height: '6',
      rx: '1',
      transform: 'rotate(-90 7.5 14)',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7r7azb'
    }
  ],
  [
    'path',
    {
      d: 'M5 13L5 3',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '6f77oq'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 11L2.5 5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '9avod3'
    }
  ]
];

/**
 * @component @name GalleryHorizontalEndFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNy41IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNy41IDE0KSIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDEzTDUgMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi41IDExTDIuNSA1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/gallery-horizontal-end-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryHorizontalEndFill = createFoamicon('GalleryHorizontalEndFill', __iconNode);
