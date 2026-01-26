import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.99999 8.66671C8.36818 8.66671 8.66666 8.36823 8.66666 8.00004C8.66666 7.63185 8.36818 7.33337 7.99999 7.33337C7.63181 7.33337 7.33333 7.63185 7.33333 8.00004C7.33333 8.36823 7.63181 8.66671 7.99999 8.66671Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'diok0d'
    }
  ],
  [
    'path',
    {
      d: 'M12.6667 8.66671C13.0349 8.66671 13.3333 8.36823 13.3333 8.00004C13.3333 7.63185 13.0349 7.33337 12.6667 7.33337C12.2985 7.33337 12 7.63185 12 8.00004C12 8.36823 12.2985 8.66671 12.6667 8.66671Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'anr9jd'
    }
  ],
  [
    'path',
    {
      d: 'M3.33334 8.66671C3.70153 8.66671 4.00001 8.36823 4.00001 8.00004C4.00001 7.63185 3.70153 7.33337 3.33334 7.33337C2.96515 7.33337 2.66667 7.63185 2.66667 8.00004C2.66667 8.36823 2.96515 8.66671 3.33334 8.66671Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3fer6c'
    }
  ]
];

/**
 * @component @name EllipsisFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5OTkgOC42NjY3MUM4LjM2ODE4IDguNjY2NzEgOC42NjY2NiA4LjM2ODIzIDguNjY2NjYgOC4wMDAwNEM4LjY2NjY2IDcuNjMxODUgOC4zNjgxOCA3LjMzMzM3IDcuOTk5OTkgNy4zMzMzN0M3LjYzMTgxIDcuMzMzMzcgNy4zMzMzMyA3LjYzMTg1IDcuMzMzMzMgOC4wMDAwNEM3LjMzMzMzIDguMzY4MjMgNy42MzE4MSA4LjY2NjcxIDcuOTk5OTkgOC42NjY3MVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNjY2NyA4LjY2NjcxQzEzLjAzNDkgOC42NjY3MSAxMy4zMzMzIDguMzY4MjMgMTMuMzMzMyA4LjAwMDA0QzEzLjMzMzMgNy42MzE4NSAxMy4wMzQ5IDcuMzMzMzcgMTIuNjY2NyA3LjMzMzM3QzEyLjI5ODUgNy4zMzMzNyAxMiA3LjYzMTg1IDEyIDguMDAwMDRDMTIgOC4zNjgyMyAxMi4yOTg1IDguNjY2NzEgMTIuNjY2NyA4LjY2NjcxWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjMzMzM0IDguNjY2NzFDMy43MDE1MyA4LjY2NjcxIDQuMDAwMDEgOC4zNjgyMyA0LjAwMDAxIDguMDAwMDRDNC4wMDAwMSA3LjYzMTg1IDMuNzAxNTMgNy4zMzMzNyAzLjMzMzM0IDcuMzMzMzdDMi45NjUxNSA3LjMzMzM3IDIuNjY2NjcgNy42MzE4NSAyLjY2NjY3IDguMDAwMDRDMi42NjY2NyA4LjM2ODIzIDIuOTY1MTUgOC42NjY3MSAzLjMzMzM0IDguNjY2NzFaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/ellipsis-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const EllipsisFill = createFoamicon('EllipsisFill', __iconNode);
