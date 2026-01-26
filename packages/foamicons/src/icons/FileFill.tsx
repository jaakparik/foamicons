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
  ]
];

/**
 * @component @name FileFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDZWNC41TDkuNSAxSDgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgMkMzIDEuNDQ3NzIgMy40NDc3MiAxIDQgMUg4QzguNTUyMjggMSA5IDEuNDQ3NzIgOSAyVjRDOSA0LjU1MjI4IDkuNDQ3NzIgNSAxMCA1SDEyQzEyLjU1MjMgNSAxMyA1LjQ0NzcyIDEzIDZWMTRDMTMgMTQuNTUyMyAxMi41NTIzIDE1IDEyIDE1SDRDMy40NDc3MiAxNSAzIDE0LjU1MjMgMyAxNFYyWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/file-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FileFill = createFoamicon('FileFill', __iconNode);
