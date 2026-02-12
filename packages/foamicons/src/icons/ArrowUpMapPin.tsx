import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.17 4.66667L4.48311 2.35355C4.67838 2.15829 4.99496 2.15829 5.19022 2.35355L7.50333 4.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'bgjlqd'
    }
  ],
  [
    'path',
    {
      d: 'M4.83675 2.6665L4.83675 13.6665',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 's46jxz'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 8.61818C13.5 9.94371 12.3348 12.0358 11.5213 13.3348C11.1574 13.9159 10.3426 13.9159 9.97867 13.3348C9.1652 12.0358 8 9.94371 8 8.61818C8 7.9238 8.28973 7.25785 8.80546 6.76685C9.32118 6.27584 10.0207 6 10.75 6C11.4793 6 12.1788 6.27584 12.6945 6.76685C13.2103 7.25785 13.5 7.9238 13.5 8.61818Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'fno6td'
    }
  ],
  [
    'path',
    {
      d: 'M10.75 9.25C11.0261 9.25 11.25 9.02614 11.25 8.75C11.25 8.47386 11.0261 8.25 10.75 8.25C10.4739 8.25 10.25 8.47386 10.25 8.75C10.25 9.02614 10.4739 9.25 10.75 9.25Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'kaiat6'
    }
  ]
];

/**
 * @component @name ArrowUpMapPin
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMTcgNC42NjY2N0w0LjQ4MzExIDIuMzUzNTVDNC42NzgzOCAyLjE1ODI5IDQuOTk0OTYgMi4xNTgyOSA1LjE5MDIyIDIuMzUzNTVMNy41MDMzMyA0LjY2NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjgzNjc1IDIuNjY2NUw0LjgzNjc1IDEzLjY2NjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzLjUgOC42MTgxOEMxMy41IDkuOTQzNzEgMTIuMzM0OCAxMi4wMzU4IDExLjUyMTMgMTMuMzM0OEMxMS4xNTc0IDEzLjkxNTkgMTAuMzQyNiAxMy45MTU5IDkuOTc4NjcgMTMuMzM0OEM5LjE2NTIgMTIuMDM1OCA4IDkuOTQzNzEgOCA4LjYxODE4QzggNy45MjM4IDguMjg5NzMgNy4yNTc4NSA4LjgwNTQ2IDYuNzY2ODVDOS4zMjExOCA2LjI3NTg0IDEwLjAyMDcgNiAxMC43NSA2QzExLjQ3OTMgNiAxMi4xNzg4IDYuMjc1ODQgMTIuNjk0NSA2Ljc2Njg1QzEzLjIxMDMgNy4yNTc4NSAxMy41IDcuOTIzOCAxMy41IDguNjE4MThaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC43NSA5LjI1QzExLjAyNjEgOS4yNSAxMS4yNSA5LjAyNjE0IDExLjI1IDguNzVDMTEuMjUgOC40NzM4NiAxMS4wMjYxIDguMjUgMTAuNzUgOC4yNUMxMC40NzM5IDguMjUgMTAuMjUgOC40NzM4NiAxMC4yNSA4Ljc1QzEwLjI1IDkuMDI2MTQgMTAuNDczOSA5LjI1IDEwLjc1IDkuMjVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/arrow-up-map-pin
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowUpMapPin = createFoamicon('ArrowUpMapPin', __iconNode);
