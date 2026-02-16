import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 4.04543C2 3.217 2.67099 2.54542 3.49942 2.54543C4.3666 2.54544 5.52867 2.54545 6.76381 2.54545C7.44637 2.54545 8.03877 3.1332 8.5 3.63634C8.96123 4.13949 9.55312 4.72723 10.2357 4.72723C10.9738 4.72723 11.8065 4.72723 12.5007 4.72723C13.3291 4.72723 14 5.3988 14 6.22723V12.2026C14 12.9276 13.4821 13.5467 12.7638 13.6449C11.6123 13.8022 9.80617 14 8 14C6.19383 14 4.38766 13.8022 3.23618 13.6449C2.51792 13.5467 2 12.9276 2 12.2026V4.04543Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '72sroe'
    }
  ],
  [
    'path',
    {
      d: 'M10.3881 7.64628L7.97353 10.9663C7.79282 11.2148 7.43286 11.243 7.21561 11.0258L6.25 10.0602',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3yo12b'
    }
  ]
];

/**
 * @component @name FolderCheck
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNC4wNDU0M0MyIDMuMjE3IDIuNjcwOTkgMi41NDU0MiAzLjQ5OTQyIDIuNTQ1NDNDNC4zNjY2IDIuNTQ1NDQgNS41Mjg2NyAyLjU0NTQ1IDYuNzYzODEgMi41NDU0NUM3LjQ0NjM3IDIuNTQ1NDUgOC4wMzg3NyAzLjEzMzIgOC41IDMuNjM2MzRDOC45NjEyMyA0LjEzOTQ5IDkuNTUzMTIgNC43MjcyMyAxMC4yMzU3IDQuNzI3MjNDMTAuOTczOCA0LjcyNzIzIDExLjgwNjUgNC43MjcyMyAxMi41MDA3IDQuNzI3MjNDMTMuMzI5MSA0LjcyNzIzIDE0IDUuMzk4OCAxNCA2LjIyNzIzVjEyLjIwMjZDMTQgMTIuOTI3NiAxMy40ODIxIDEzLjU0NjcgMTIuNzYzOCAxMy42NDQ5QzExLjYxMjMgMTMuODAyMiA5LjgwNjE3IDE0IDggMTRDNi4xOTM4MyAxNCA0LjM4NzY2IDEzLjgwMjIgMy4yMzYxOCAxMy42NDQ5QzIuNTE3OTIgMTMuNTQ2NyAyIDEyLjkyNzYgMiAxMi4yMDI2VjQuMDQ1NDNaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC4zODgxIDcuNjQ2MjhMNy45NzM1MyAxMC45NjYzQzcuNzkyODIgMTEuMjE0OCA3LjQzMjg2IDExLjI0MyA3LjIxNTYxIDExLjAyNThMNi4yNSAxMC4wNjAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/folder-check
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FolderCheck = createFoamicon('FolderCheck', __iconNode);
