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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'phaiqt'
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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'i92zty'
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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5i02c9'
    }
  ]
];

/**
 * @component @name LayoutPanelTop
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iNyIgd2lkdGg9IjUiIGhlaWdodD0iMTIiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMiA3KSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSIyIiB5PSIxNCIgd2lkdGg9IjUiIGhlaWdodD0iNSIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKC05MCAyIDE0KSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSI5IiB5PSIxNCIgd2lkdGg9IjUiIGhlaWdodD0iNSIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKC05MCA5IDE0KSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/layout-panel-top
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LayoutPanelTop = createFoamicon('LayoutPanelTop', __iconNode);
