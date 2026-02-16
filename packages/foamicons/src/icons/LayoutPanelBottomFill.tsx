import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '14',
      y: '9',
      width: '5',
      height: '12',
      rx: '1',
      transform: 'rotate(90 14 9)',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5neojp'
    }
  ],
  [
    'rect',
    {
      x: '14',
      y: '2',
      width: '5',
      height: '5',
      rx: '1',
      transform: 'rotate(90 14 2)',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'izl0im'
    }
  ],
  [
    'rect',
    {
      x: '7',
      y: '2',
      width: '5',
      height: '5',
      rx: '1',
      transform: 'rotate(90 7 2)',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '21jmn7'
    }
  ]
];

/**
 * @component @name LayoutPanelBottomFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTQiIHk9IjkiIHdpZHRoPSI1IiBoZWlnaHQ9IjEyIiByeD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTQgOSkiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSIxNCIgeT0iMiIgd2lkdGg9IjUiIGhlaWdodD0iNSIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE0IDIpIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNyIgeT0iMiIgd2lkdGg9IjUiIGhlaWdodD0iNSIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDcgMikiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/layout-panel-bottom-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LayoutPanelBottomFill = createFoamicon('LayoutPanelBottomFill', __iconNode);
