import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M14 8C14 9.90078 13.5 10.5 10 10.5C6.5 10.5 10.6562 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'yqy0bv'
    }
  ],
  [
    'circle',
    {
      cx: '4.55',
      cy: '8.25',
      r: '0.25',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: '5nison'
    }
  ],
  [
    'circle',
    {
      cx: '5.75',
      cy: '5.25',
      r: '0.25',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: '63nik8'
    }
  ],
  [
    'circle',
    {
      cx: '9.25',
      cy: '4.5498',
      r: '0.25',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: '385wbo'
    }
  ],
  [
    'circle',
    {
      cx: '11.55',
      cy: '7.25',
      r: '0.25',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: 'p7mqsn'
    }
  ]
];

/**
 * @component @name PaletteFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDhDMTQgOS45MDA3OCAxMy41IDEwLjUgMTAgMTAuNUM2LjUgMTAuNSAxMC42NTYyIDE0IDggMTRDNC42ODYyOSAxNCAyIDExLjMxMzcgMiA4QzIgNC42ODYyOSA0LjY4NjI5IDIgOCAyQzExLjMxMzcgMiAxNCA0LjY4NjI5IDE0IDhaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGNpcmNsZSBjeD0iNC41NSIgY3k9IjguMjUiIHI9IjAuMjUiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGNpcmNsZSBjeD0iNS43NSIgY3k9IjUuMjUiIHI9IjAuMjUiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGNpcmNsZSBjeD0iOS4yNSIgY3k9IjQuNTQ5OCIgcj0iMC4yNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIxMS41NSIgY3k9IjcuMjUiIHI9IjAuMjUiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/palette-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const PaletteFill = createFoamicon('PaletteFill', __iconNode);
