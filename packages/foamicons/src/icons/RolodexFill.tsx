import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M14 5V6M14 8V9M14 11V12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mokvn2'
    }
  ],
  [
    'rect',
    {
      x: '2.5',
      y: '2.5',
      width: '10',
      height: '11.5',
      rx: '1',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'gj28zn'
    }
  ],
  [
    'path',
    {
      d: 'M5 3.5V1.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'kaxjan'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 3.5V1.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'q4mzcp'
    }
  ],
  [
    'path',
    {
      d: 'M10 3.5V1.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '1lkx3f'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 5.5H10.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: 'n0q7mz'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 7.5H10.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: '8epjqm'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 9.5H10.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: '67b45r'
    }
  ]
];

/**
 * @component @name RolodexFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDVWNk0xNCA4VjlNMTQgMTFWMTIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iMi41IiB5PSIyLjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMS41IiByeD0iMSIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDMuNVYxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTcuNSAzLjVWMS41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAzLjVWMS41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjUgNS41SDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDcuNUgxMC41IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTQuNSA5LjVIMTAuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/rolodex-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const RolodexFill = createFoamicon('RolodexFill', __iconNode);
