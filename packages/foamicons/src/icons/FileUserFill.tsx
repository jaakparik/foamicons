import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13 6V4.5L9.5 1H8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yt83dc'
    }
  ],
  [
    'path',
    {
      d: 'M3 2C3 1.44772 3.44772 1 4 1H8C8.55228 1 9 1.44772 9 2V4C9 4.55228 9.44772 5 10 5H12C12.5523 5 13 5.44772 13 6V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V2Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      key: 'jtl2iu'
    }
  ],
  [
    'circle',
    {
      cx: '8.00001',
      cy: '7.5582',
      r: '1.0582',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'exxqfk'
    }
  ],
  [
    'path',
    {
      d: 'M10 12.3999C10 11.9999 9.6 10.3999 8 10.3999C6.4 10.3999 6 11.9999 6 12.3999C6 12.3999 7.15878 12.7999 8 12.7999C8.84122 12.7999 10 12.3999 10 12.3999Z',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'dsgtd9'
    }
  ]
];

/**
 * @component @name FileUserFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDZWNC41TDkuNSAxSDgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgMkMzIDEuNDQ3NzIgMy40NDc3MiAxIDQgMUg4QzguNTUyMjggMSA5IDEuNDQ3NzIgOSAyVjRDOSA0LjU1MjI4IDkuNDQ3NzIgNSAxMCA1SDEyQzEyLjU1MjMgNSAxMyA1LjQ0NzcyIDEzIDZWMTRDMTMgMTQuNTUyMyAxMi41NTIzIDE1IDEyIDE1SDRDMy40NDc3MiAxNSAzIDE0LjU1MjMgMyAxNFYyWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8Y2lyY2xlIGN4PSI4LjAwMDAxIiBjeT0iNy41NTgyIiByPSIxLjA1ODIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgMTIuMzk5OUMxMCAxMS45OTk5IDkuNiAxMC4zOTk5IDggMTAuMzk5OUM2LjQgMTAuMzk5OSA2IDExLjk5OTkgNiAxMi4zOTk5QzYgMTIuMzk5OSA3LjE1ODc4IDEyLjc5OTkgOCAxMi43OTk5QzguODQxMjIgMTIuNzk5OSAxMCAxMi4zOTk5IDEwIDEyLjM5OTlaIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/file-user-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FileUserFill = createFoamicon('FileUserFill', __iconNode);
