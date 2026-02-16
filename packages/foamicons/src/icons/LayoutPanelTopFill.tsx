import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '2',
      y: '7',
      width: '5',
      height: '12',
      rx: '1',
      transform: 'rotate(-90 2 7)',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'xkb8gc'
    }
  ],
  [
    'rect',
    {
      x: '2',
      y: '14',
      width: '5',
      height: '5',
      rx: '1',
      transform: 'rotate(-90 2 14)',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rd47il'
    }
  ],
  [
    'rect',
    {
      x: '9',
      y: '14',
      width: '5',
      height: '5',
      rx: '1',
      transform: 'rotate(-90 9 14)',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'bbw8lc'
    }
  ]
];

/**
 * @component @name LayoutPanelTopFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iNyIgd2lkdGg9IjUiIGhlaWdodD0iMTIiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMiA3KSIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxyZWN0IHg9IjIiIHk9IjE0IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiByeD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDIgMTQpIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iOSIgeT0iMTQiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgOSAxNCkiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/layout-panel-top-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LayoutPanelTopFill = createFoamicon('LayoutPanelTopFill', __iconNode);
