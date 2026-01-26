import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8.10039 8.10034L8.10039 11.6003M8.10039 8.10034L9.95094 9.95086M8.10039 8.10034L6.25 9.95086',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'qvisg6'
    }
  ],
  [
    'path',
    {
      d: 'M13 6V4.5L9.5 1H8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yt83dd'
    }
  ],
  [
    'path',
    {
      d: 'M3 2C3 1.44772 3.44772 1 4 1H8C8.55228 1 9 1.44772 9 2V4C9 4.55228 9.44772 5 10 5H12C12.5523 5 13 5.44772 13 6V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V2Z',
      stroke: 'currentColor',
      key: 'pevcqm'
    }
  ]
];

/**
 * @component @name FileArrowUp
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMTAwMzkgOC4xMDAzNEw4LjEwMDM5IDExLjYwMDNNOC4xMDAzOSA4LjEwMDM0TDkuOTUwOTQgOS45NTA4Nk04LjEwMDM5IDguMTAwMzRMNi4yNSA5Ljk1MDg2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA2VjQuNUw5LjUgMUg4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zIDJDMyAxLjQ0NzcyIDMuNDQ3NzIgMSA0IDFIOEM4LjU1MjI4IDEgOSAxLjQ0NzcyIDkgMlY0QzkgNC41NTIyOCA5LjQ0NzcyIDUgMTAgNUgxMkMxMi41NTIzIDUgMTMgNS40NDc3MiAxMyA2VjE0QzEzIDE0LjU1MjMgMTIuNTUyMyAxNSAxMiAxNUg0QzMuNDQ3NzIgMTUgMyAxNC41NTIzIDMgMTRWMloiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/file-arrow-up
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FileArrowUp = createFoamicon('FileArrowUp', __iconNode);
