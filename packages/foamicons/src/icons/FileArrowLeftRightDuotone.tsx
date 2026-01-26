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
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '1aphyi'
    }
  ],
  [
    'path',
    {
      d: 'M11 11.25L7.5 11.25M11 11.25L9.14948 13.1006M11 11.25L9.14948 9.39965',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5lwoas'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 7.25021H9M5.5 7.25021L7.35052 5.39966M5.5 7.25021L7.35052 9.1006',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'cxgnr5'
    }
  ]
];

/**
 * @component @name FileArrowLeftRightDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDZWNC41TDkuNSAxSDgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgMkMzIDEuNDQ3NzIgMy40NDc3MiAxIDQgMUg4QzguNTUyMjggMSA5IDEuNDQ3NzIgOSAyVjRDOSA0LjU1MjI4IDkuNDQ3NzIgNSAxMCA1SDEyQzEyLjU1MjMgNSAxMyA1LjQ0NzcyIDEzIDZWMTRDMTMgMTQuNTUyMyAxMi41NTIzIDE1IDEyIDE1SDRDMy40NDc3MiAxNSAzIDE0LjU1MjMgMyAxNFYyWiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0xMSAxMS4yNUw3LjUgMTEuMjVNMTEgMTEuMjVMOS4xNDk0OCAxMy4xMDA2TTExIDExLjI1TDkuMTQ5NDggOS4zOTk2NSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS41IDcuMjUwMjFIOU01LjUgNy4yNTAyMUw3LjM1MDUyIDUuMzk5NjZNNS41IDcuMjUwMjFMNy4zNTA1MiA5LjEwMDYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/file-arrow-left-right-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FileArrowLeftRightDuotone = createFoamicon('FileArrowLeftRightDuotone', __iconNode);
