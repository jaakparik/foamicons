import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '4.5',
      r: '2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ldhsbk'
    }
  ],
  [
    'path',
    {
      d: 'M8 8.5C5.5 8.5 4 10 4 13.75C4 13.75 5 14 8 14C8.36672 14 8.70355 13.9963 9.01232 13.9897',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'kfe5qe'
    }
  ],
  [
    'path',
    {
      d: 'M15 13.25L11.5 13.25M15 13.25L13.1495 15.1006M15 13.25L13.1495 11.3996',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wzieu5'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 9.24997H13M9.5 9.24997L11.3505 7.39941M9.5 9.24997L11.3505 11.1004',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'izj9x5'
    }
  ]
];

/**
 * @component @name UserArrowLeftRight
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCA4LjVDNS41IDguNSA0IDEwIDQgMTMuNzVDNCAxMy43NSA1IDE0IDggMTRDOC4zNjY3MiAxNCA4LjcwMzU1IDEzLjk5NjMgOS4wMTIzMiAxMy45ODk3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNSAxMy4yNUwxMS41IDEzLjI1TTE1IDEzLjI1TDEzLjE0OTUgMTUuMTAwNk0xNSAxMy4yNUwxMy4xNDk1IDExLjM5OTYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuNSA5LjI0OTk3SDEzTTkuNSA5LjI0OTk3TDExLjM1MDUgNy4zOTk0MU05LjUgOS4yNDk5N0wxMS4zNTA1IDExLjEwMDQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/user-arrow-left-right
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserArrowLeftRight = createFoamicon('UserArrowLeftRight', __iconNode);
