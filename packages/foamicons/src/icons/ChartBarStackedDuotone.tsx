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
      d: 'M5 4.5C5 4.22386 5.22386 4 5.5 4H10V6.5H5.5C5.22386 6.5 5 6.27614 5 6V4.5Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'rp8pzi'
    }
  ],
  [
    'path',
    {
      d: 'M5 9.5C5 9.22386 5.22386 9 5.5 9H7V11.5H5.5C5.22386 11.5 5 11.2761 5 11V9.5Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'tld95k'
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
 * @component @name ChartBarStackedDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMi41VjEyQzIgMTMuMTA0NiAyLjg5NTQzIDE0IDQgMTRIMTMuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNSA0LjVDNSA0LjIyMzg2IDUuMjIzODYgNCA1LjUgNEgxMFY2LjVINS41QzUuMjIzODYgNi41IDUgNi4yNzYxNCA1IDZWNC41WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiLz4KPHBhdGggZD0iTTUgOS41QzUgOS4yMjM4NiA1LjIyMzg2IDkgNS41IDlIN1YxMS41SDUuNUM1LjIyMzg2IDExLjUgNSAxMS4yNzYxIDUgMTFWOS41WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiLz4KPHJlY3QgeD0iNSIgeT0iOSIgd2lkdGg9IjUiIGhlaWdodD0iMi41IiByeD0iMC41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxyZWN0IHg9IjUiIHk9IjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjIuNSIgcng9IjAuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNyA5VjExLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEwIDRWNi41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/chart-bar-stacked-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartBarStackedDuotone = createFoamicon('ChartBarStackedDuotone', __iconNode);
