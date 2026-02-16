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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ijqbak'
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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ihjmh5'
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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'p7yrjw'
    }
  ]
];

/**
 * @component @name LayoutPanelBottom
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTQiIHk9IjkiIHdpZHRoPSI1IiBoZWlnaHQ9IjEyIiByeD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTQgOSkiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iMTQiIHk9IjIiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNCAyKSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSI3IiB5PSIyIiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiByeD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNyAyKSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/layout-panel-bottom
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LayoutPanelBottom = createFoamicon('LayoutPanelBottom', __iconNode);
