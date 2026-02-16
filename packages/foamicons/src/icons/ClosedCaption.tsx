import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 5.66915C2.5 4.70258 3.1911 3.87634 4.15044 3.75834C5.18882 3.63062 6.59441 3.5 8 3.5C9.40559 3.5 10.8112 3.63062 11.8496 3.75834C12.8089 3.87634 13.5 4.70258 13.5 5.66915V10.3308C13.5 11.2974 12.8089 12.1237 11.8496 12.2417C10.8112 12.3694 9.40559 12.5 8 12.5C6.59441 12.5 5.18882 12.3694 4.15044 12.2417C3.1911 12.1237 2.5 11.2974 2.5 10.3308V5.66915Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '41jfvf'
    }
  ],
  [
    'path',
    {
      d: 'M7 5.9998C7 5.9998 5 5.4996 5 7.9998C5 10.5 7 9.9998 7 9.9998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'ux2yt9'
    }
  ],
  [
    'path',
    {
      d: 'M11 5.9998C11 5.9998 9 5.4996 9 7.9998C9 10.5 11 9.9998 11 9.9998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '6lw882'
    }
  ]
];

/**
 * @component @name ClosedCaption
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA1LjY2OTE1QzIuNSA0LjcwMjU4IDMuMTkxMSAzLjg3NjM0IDQuMTUwNDQgMy43NTgzNEM1LjE4ODgyIDMuNjMwNjIgNi41OTQ0MSAzLjUgOCAzLjVDOS40MDU1OSAzLjUgMTAuODExMiAzLjYzMDYyIDExLjg0OTYgMy43NTgzNEMxMi44MDg5IDMuODc2MzQgMTMuNSA0LjcwMjU4IDEzLjUgNS42NjkxNVYxMC4zMzA4QzEzLjUgMTEuMjk3NCAxMi44MDg5IDEyLjEyMzcgMTEuODQ5NiAxMi4yNDE3QzEwLjgxMTIgMTIuMzY5NCA5LjQwNTU5IDEyLjUgOCAxMi41QzYuNTk0NDEgMTIuNSA1LjE4ODgyIDEyLjM2OTQgNC4xNTA0NCAxMi4yNDE3QzMuMTkxMSAxMi4xMjM3IDIuNSAxMS4yOTc0IDIuNSAxMC4zMzA4VjUuNjY5MTVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDUuOTk5OEM3IDUuOTk5OCA1IDUuNDk5NiA1IDcuOTk5OEM1IDEwLjUgNyA5Ljk5OTggNyA5Ljk5OTgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTExIDUuOTk5OEMxMSA1Ljk5OTggOSA1LjQ5OTYgOSA3Ljk5OThDOSAxMC41IDExIDkuOTk5OCAxMSA5Ljk5OTgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/closed-caption
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ClosedCaption = createFoamicon('ClosedCaption', __iconNode);
