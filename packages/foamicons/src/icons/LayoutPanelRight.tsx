import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '9',
      y: '2',
      width: '5',
      height: '12',
      rx: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5aozty'
    }
  ],
  [
    'rect',
    {
      x: '2',
      y: '2',
      width: '5',
      height: '5',
      rx: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mbu1bm'
    }
  ],
  [
    'rect',
    {
      x: '2',
      y: '9',
      width: '5',
      height: '5',
      rx: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '4ydrs8'
    }
  ]
];

/**
 * @component @name LayoutPanelRight
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iOSIgeT0iMiIgd2lkdGg9IjUiIGhlaWdodD0iMTIiIHJ4PSIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIHJ4PSIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxyZWN0IHg9IjIiIHk9IjkiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIHJ4PSIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/layout-panel-right
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LayoutPanelRight = createFoamicon('LayoutPanelRight', __iconNode);
