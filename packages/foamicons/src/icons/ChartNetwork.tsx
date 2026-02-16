import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '5.25',
      cy: '10.75',
      r: '1.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6imejy'
    }
  ],
  [
    'circle',
    {
      cx: '10.75',
      cy: '8.75',
      r: '1.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'm5v15j'
    }
  ],
  [
    'circle',
    {
      cx: '6.25',
      cy: '5.75',
      r: '1.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ptyaol'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 10.5L9.5 9.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '7m0ous'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 8L7.5 6.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'dnq449'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 5L12 3.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'q7pkaj'
    }
  ],
  [
    'path',
    {
      d: 'M2 2.5V12C2 13.1046 2.89543 14 4 14H13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'v2swdk'
    }
  ]
];

/**
 * @component @name ChartNetwork
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNS4yNSIgY3k9IjEwLjc1IiByPSIxLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEwLjc1IiBjeT0iOC43NSIgcj0iMS4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI2LjI1IiBjeT0iNS43NSIgcj0iMS4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNi41IDEwLjVMOS41IDkuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS41IDhMNy41IDYuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy41IDVMMTIgMy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yIDIuNVYxMkMyIDEzLjEwNDYgMi44OTU0MyAxNCA0IDE0SDEzLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/chart-network
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartNetwork = createFoamicon('ChartNetwork', __iconNode);
