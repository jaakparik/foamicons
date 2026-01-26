import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.5 4H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3uprjr'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 8H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'w6s09a'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 12H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7n8er6'
    }
  ],
  [
    'path',
    {
      d: 'M2.66667 1.91992H3.33334V4.7533',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jja1gg'
    }
  ],
  [
    'path',
    {
      d: 'M2.66667 4.75342H4.00001',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jicyr1'
    }
  ],
  [
    'path',
    {
      d: 'M4.33333 9.3333H2.26666C2.26666 8.66663 4 8.3033 4 7.2533C4.00002 7.05229 3.93947 6.85593 3.82623 6.68985C3.713 6.52376 3.55233 6.39566 3.36521 6.32225C3.17808 6.24884 2.97317 6.23352 2.7772 6.27831C2.58124 6.32309 2.56418 6.38747 2.42752 6.53488',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '2dtfsa'
    }
  ],
  [
    'path',
    {
      d: 'M2.77721 12.2508C3 12.2508 4 12.2878 4 11.5122C4.00003 11.3637 3.93947 11.2187 3.82623 11.096C3.713 10.9733 3.55234 10.8787 3.36521 10.8245C3.17808 10.7702 2.97317 10.7589 2.77721 10.792C2.58125 10.8251 2.55769 10.8798 2.42103 10.9887',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'zdynle'
    }
  ],
  [
    'path',
    {
      d: 'M2.7772 12.2542C3 12.2542 4 12.2105 4 13.129C4.00002 13.3049 3.93947 13.4766 3.82623 13.6219C3.713 13.7672 3.55233 13.8793 3.36521 13.9435C3.17808 14.0077 2.97317 14.0211 2.7772 13.9819C2.58124 13.9427 2.40333 13.8528 2.26666 13.7239',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'lu6w1r'
    }
  ]
];

/**
 * @component @name ListOrderedFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNSA0SDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02LjUgOEgxMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNi41IDEySDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjY2NjY3IDEuOTE5OTJIMy4zMzMzNFY0Ljc1MzMiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNjY2NjcgNC43NTM0Mkg0LjAwMDAxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjMzMzMzIDkuMzMzM0gyLjI2NjY2QzIuMjY2NjYgOC42NjY2MyA0IDguMzAzMyA0IDcuMjUzM0M0LjAwMDAyIDcuMDUyMjkgMy45Mzk0NyA2Ljg1NTkzIDMuODI2MjMgNi42ODk4NUMzLjcxMyA2LjUyMzc2IDMuNTUyMzMgNi4zOTU2NiAzLjM2NTIxIDYuMzIyMjVDMy4xNzgwOCA2LjI0ODg0IDIuOTczMTcgNi4yMzM1MiAyLjc3NzIgNi4yNzgzMUMyLjU4MTI0IDYuMzIzMDkgMi41NjQxOCA2LjM4NzQ3IDIuNDI3NTIgNi41MzQ4OCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi43NzcyMSAxMi4yNTA4QzMgMTIuMjUwOCA0IDEyLjI4NzggNCAxMS41MTIyQzQuMDAwMDMgMTEuMzYzNyAzLjkzOTQ3IDExLjIxODcgMy44MjYyMyAxMS4wOTZDMy43MTMgMTAuOTczMyAzLjU1MjM0IDEwLjg3ODcgMy4zNjUyMSAxMC44MjQ1QzMuMTc4MDggMTAuNzcwMiAyLjk3MzE3IDEwLjc1ODkgMi43NzcyMSAxMC43OTJDMi41ODEyNSAxMC44MjUxIDIuNTU3NjkgMTAuODc5OCAyLjQyMTAzIDEwLjk4ODciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNzc3MiAxMi4yNTQyQzMgMTIuMjU0MiA0IDEyLjIxMDUgNCAxMy4xMjlDNC4wMDAwMiAxMy4zMDQ5IDMuOTM5NDcgMTMuNDc2NiAzLjgyNjIzIDEzLjYyMTlDMy43MTMgMTMuNzY3MiAzLjU1MjMzIDEzLjg3OTMgMy4zNjUyMSAxMy45NDM1QzMuMTc4MDggMTQuMDA3NyAyLjk3MzE3IDE0LjAyMTEgMi43NzcyIDEzLjk4MTlDMi41ODEyNCAxMy45NDI3IDIuNDAzMzMgMTMuODUyOCAyLjI2NjY2IDEzLjcyMzkiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/list-ordered-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ListOrderedFill = createFoamicon('ListOrderedFill', __iconNode);
