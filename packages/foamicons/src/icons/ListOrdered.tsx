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
      d: 'M4.33333 9.33354H2.26666C2.26666 8.66687 4 8.30355 4 7.25355C4.00002 7.05253 3.93947 6.85618 3.82623 6.69009C3.713 6.52401 3.55233 6.3959 3.36521 6.32249C3.17808 6.24908 2.97317 6.23377 2.7772 6.27855C2.58124 6.32334 2.56418 6.38771 2.42752 6.53512',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'gyqvem'
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
 * @component @name ListOrdered
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNSA0SDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02LjUgOEgxMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNi41IDEySDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjY2NjY3IDEuOTE5OTJIMy4zMzMzNFY0Ljc1MzMiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNjY2NjcgNC43NTM0Mkg0LjAwMDAxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjMzMzMzIDkuMzMzNTRIMi4yNjY2NkMyLjI2NjY2IDguNjY2ODcgNCA4LjMwMzU1IDQgNy4yNTM1NUM0LjAwMDAyIDcuMDUyNTMgMy45Mzk0NyA2Ljg1NjE4IDMuODI2MjMgNi42OTAwOUMzLjcxMyA2LjUyNDAxIDMuNTUyMzMgNi4zOTU5IDMuMzY1MjEgNi4zMjI0OUMzLjE3ODA4IDYuMjQ5MDggMi45NzMxNyA2LjIzMzc3IDIuNzc3MiA2LjI3ODU1QzIuNTgxMjQgNi4zMjMzNCAyLjU2NDE4IDYuMzg3NzEgMi40Mjc1MiA2LjUzNTEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjc3NzIxIDEyLjI1MDhDMyAxMi4yNTA4IDQgMTIuMjg3OCA0IDExLjUxMjJDNC4wMDAwMyAxMS4zNjM3IDMuOTM5NDcgMTEuMjE4NyAzLjgyNjIzIDExLjA5NkMzLjcxMyAxMC45NzMzIDMuNTUyMzQgMTAuODc4NyAzLjM2NTIxIDEwLjgyNDVDMy4xNzgwOCAxMC43NzAyIDIuOTczMTcgMTAuNzU4OSAyLjc3NzIxIDEwLjc5MkMyLjU4MTI1IDEwLjgyNTEgMi41NTc2OSAxMC44Nzk4IDIuNDIxMDMgMTAuOTg4NyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi43NzcyIDEyLjI1NDJDMyAxMi4yNTQyIDQgMTIuMjEwNSA0IDEzLjEyOUM0LjAwMDAyIDEzLjMwNDkgMy45Mzk0NyAxMy40NzY2IDMuODI2MjMgMTMuNjIxOUMzLjcxMyAxMy43NjcyIDMuNTUyMzMgMTMuODc5MyAzLjM2NTIxIDEzLjk0MzVDMy4xNzgwOCAxNC4wMDc3IDIuOTczMTcgMTQuMDIxMSAyLjc3NzIgMTMuOTgxOUMyLjU4MTI0IDEzLjk0MjcgMi40MDMzMyAxMy44NTI4IDIuMjY2NjYgMTMuNzIzOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/list-ordered
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ListOrdered = createFoamicon('ListOrdered', __iconNode);
