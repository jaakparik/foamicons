import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V4.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ny6t4c'
    }
  ],
  [
    'path',
    {
      d: 'M2 6H4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'ebmp5b'
    }
  ],
  [
    'path',
    {
      d: 'M6 7H8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'hhwm11'
    }
  ],
  [
    'path',
    {
      d: 'M2 8H4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '8m0xbp'
    }
  ],
  [
    'path',
    {
      d: 'M2 10H4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '2gbrjd'
    }
  ],
  [
    'path',
    {
      d: 'M5 14.5L13.5 4V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ks46vi'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 9.5L9.5 12.5H11.5V9.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'lx6kja'
    }
  ]
];

/**
 * @component @name Notebook
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMTNDMy40NDc3MiAxMyAzIDEyLjU1MjMgMyAxMlY0QzMgMy40NDc3MiAzLjQ0NzcyIDMgNCAzSDEwQzEwLjU1MjMgMyAxMSAzLjQ0NzcyIDExIDRWNC41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yIDZINCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA3SDgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTIgOEg0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yIDEwSDQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTUgMTQuNUwxMy41IDRWMTMuNUMxMy41IDE0LjA1MjMgMTMuMDUyMyAxNC41IDEyLjUgMTQuNUg1WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNSA5LjVMOS41IDEyLjVIMTEuNVY5LjVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/notebook
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Notebook = createFoamicon('Notebook', __iconNode);
