import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 2.5V12C2 13.1046 2.89543 14 4 14H13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'v2swde'
    }
  ],
  [
    'path',
    {
      d: 'M5 9.5C5 9.22386 5.22386 9 5.5 9H7V11.5H5.5C5.22386 11.5 5 11.2761 5 11V9.5Z',
      fill: 'currentColor',
      key: 'm2jpdr'
    }
  ],
  [
    'path',
    {
      d: 'M5 4.5C5 4.22386 5.22386 4 5.5 4H10V6.5H5.5C5.22386 6.5 5 6.27614 5 6V4.5Z',
      fill: 'currentColor',
      key: '1b7apn'
    }
  ],
  [
    'rect',
    {
      x: '5',
      y: '9',
      width: '5',
      height: '2.5',
      rx: '0.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'dx5jtc'
    }
  ],
  [
    'rect',
    {
      x: '5',
      y: '4',
      width: '8',
      height: '2.5',
      rx: '0.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '18po4v'
    }
  ],
  [
    'path',
    {
      d: 'M7 9V11.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'i5q99a'
    }
  ],
  [
    'path',
    {
      d: 'M10 4V6.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'rkxb4c'
    }
  ]
];

/**
 * @component @name ChartBarStackedFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMi41VjEyQzIgMTMuMTA0NiAyLjg5NTQzIDE0IDQgMTRIMTMuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNSA5LjVDNSA5LjIyMzg2IDUuMjIzODYgOSA1LjUgOUg3VjExLjVINS41QzUuMjIzODYgMTEuNSA1IDExLjI3NjEgNSAxMVY5LjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTUgNC41QzUgNC4yMjM4NiA1LjIyMzg2IDQgNS41IDRIMTBWNi41SDUuNUM1LjIyMzg2IDYuNSA1IDYuMjc2MTQgNSA2VjQuNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cmVjdCB4PSI1IiB5PSI5IiB3aWR0aD0iNSIgaGVpZ2h0PSIyLjUiIHJ4PSIwLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHJlY3QgeD0iNSIgeT0iNCIgd2lkdGg9IjgiIGhlaWdodD0iMi41IiByeD0iMC41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDlWMTEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgNFY2LjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/chart-bar-stacked-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartBarStackedFill = createFoamicon('ChartBarStackedFill', __iconNode);
