import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '2',
      y: '5',
      width: '12',
      height: '6',
      rx: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ratw01'
    }
  ],
  [
    'path',
    {
      d: 'M2 13.5H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'g8zxt'
    }
  ],
  [
    'path',
    {
      d: 'M2 2.5H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '74xkgi'
    }
  ]
];

/**
 * @component @name GalleryVertical
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIHJ4PSIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yIDEzLjVIMTQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTIgMi41SDE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/gallery-vertical
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryVertical = createFoamicon('GalleryVertical', __iconNode);
