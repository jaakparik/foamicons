import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '4.5',
      r: '2',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '880ed'
    }
  ],
  [
    'path',
    {
      d: 'M10.0586 8.97523C9.48328 8.65047 8.7918 8.5 8 8.5C5.5 8.5 4 10 4 13.75C4 13.75 5 14 8 14C8.36672 14 8.70355 13.9963 9.01232 13.9897',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yseudj'
    }
  ],
  [
    'path',
    {
      d: 'M14 12.25L10.5 12.25M14 12.25L12.1495 14.1006M14 12.25L12.1495 10.3996',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'adyv37'
    }
  ]
];

/**
 * @component @name UserArrowRightDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjA1ODYgOC45NzUyM0M5LjQ4MzI4IDguNjUwNDcgOC43OTE4IDguNSA4IDguNUM1LjUgOC41IDQgMTAgNCAxMy43NUM0IDEzLjc1IDUgMTQgOCAxNEM4LjM2NjcyIDE0IDguNzAzNTUgMTMuOTk2MyA5LjAxMjMyIDEzLjk4OTciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDEyLjI1TDEwLjUgMTIuMjVNMTQgMTIuMjVMMTIuMTQ5NSAxNC4xMDA2TTE0IDEyLjI1TDEyLjE0OTUgMTAuMzk5NiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/user-arrow-right-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserArrowRightDuotone = createFoamicon('UserArrowRightDuotone', __iconNode);
