import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.5 13C10.5 12.5 10 10.8745 8 10.8745C6 10.8745 5.5 12.5 5.5 13C5.5 13 6.94848 13.8745 8 13.8745C9.05152 13.8745 10.5 13 10.5 13Z',
      fill: 'currentColor',
      key: '84h2d4'
    }
  ],
  [
    'path',
    {
      d: 'M2.00085 4.20493C1.99993 4.09447 2.08958 4.00028 2.19999 3.99708C4.79323 3.92191 7.33661 2.41732 7.88954 2.07076C7.95795 2.02788 8.04205 2.02788 8.11046 2.07076C8.66339 2.41732 11.2068 3.92191 13.8 3.99708C13.9104 4.00028 14.0001 4.09448 13.9992 4.20493C13.9177 14 8 14 8 14C8 14 2.08225 14 2.00085 4.20493Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'vm6mdm'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '7.32275',
      r: '1.32275',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'f7ttp4'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 13C10.5 12.5 10 10.8745 8 10.8745C6 10.8745 5.5 12.5 5.5 13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e70d0x'
    }
  ]
];

/**
 * @component @name ShieldUserFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjUgMTNDMTAuNSAxMi41IDEwIDEwLjg3NDUgOCAxMC44NzQ1QzYgMTAuODc0NSA1LjUgMTIuNSA1LjUgMTNDNS41IDEzIDYuOTQ4NDggMTMuODc0NSA4IDEzLjg3NDVDOS4wNTE1MiAxMy44NzQ1IDEwLjUgMTMgMTAuNSAxM1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNMi4wMDA4NSA0LjIwNDkzQzEuOTk5OTMgNC4wOTQ0NyAyLjA4OTU4IDQuMDAwMjggMi4xOTk5OSAzLjk5NzA4QzQuNzkzMjMgMy45MjE5MSA3LjMzNjYxIDIuNDE3MzIgNy44ODk1NCAyLjA3MDc2QzcuOTU3OTUgMi4wMjc4OCA4LjA0MjA1IDIuMDI3ODggOC4xMTA0NiAyLjA3MDc2QzguNjYzMzkgMi40MTczMiAxMS4yMDY4IDMuOTIxOTEgMTMuOCAzLjk5NzA4QzEzLjkxMDQgNC4wMDAyOCAxNC4wMDAxIDQuMDk0NDggMTMuOTk5MiA0LjIwNDkzQzEzLjkxNzcgMTQgOCAxNCA4IDE0QzggMTQgMi4wODIyNSAxNCAyLjAwMDg1IDQuMjA0OTNaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjgiIGN5PSI3LjMyMjc1IiByPSIxLjMyMjc1IiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjUgMTNDMTAuNSAxMi41IDEwIDEwLjg3NDUgOCAxMC44NzQ1QzYgMTAuODc0NSA1LjUgMTIuNSA1LjUgMTMiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/shield-user-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ShieldUserFill = createFoamicon('ShieldUserFill', __iconNode);
