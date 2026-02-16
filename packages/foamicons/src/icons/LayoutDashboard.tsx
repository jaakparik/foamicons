import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '9',
      y: '14',
      width: '7',
      height: '5',
      rx: '1',
      transform: 'rotate(-90 9 14)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3ieg13'
    }
  ],
  [
    'rect',
    {
      x: '9',
      y: '5',
      width: '3',
      height: '5',
      rx: '1',
      transform: 'rotate(-90 9 5)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nfy7h4'
    }
  ],
  [
    'rect',
    {
      x: '2',
      y: '9',
      width: '7',
      height: '5',
      rx: '1',
      transform: 'rotate(-90 2 9)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'r2apsb'
    }
  ],
  [
    'rect',
    {
      x: '2',
      y: '14',
      width: '3',
      height: '5',
      rx: '1',
      transform: 'rotate(-90 2 14)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'r9hi7a'
    }
  ]
];

/**
 * @component @name LayoutDashboard
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iOSIgeT0iMTQiIHdpZHRoPSI3IiBoZWlnaHQ9IjUiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgOSAxNCkiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iOSIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iNSIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKC05MCA5IDUpIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxyZWN0IHg9IjIiIHk9IjkiIHdpZHRoPSI3IiBoZWlnaHQ9IjUiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMiA5KSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSIyIiB5PSIxNCIgd2lkdGg9IjMiIGhlaWdodD0iNSIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKC05MCAyIDE0KSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/layout-dashboard
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LayoutDashboard = createFoamicon('LayoutDashboard', __iconNode);
