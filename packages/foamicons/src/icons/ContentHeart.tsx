import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '6',
      y: '2',
      width: '8',
      height: '10',
      rx: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'uw9a54'
    }
  ],
  [
    'path',
    {
      d: 'M8.45189 13.6943L5.55412 14.4708C5.02065 14.6137 4.47231 14.2971 4.32937 13.7636L2.25882 6.03624C2.11588 5.50277 2.43246 4.95444 2.96593 4.81149L3.93185 4.55267',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'm55cui'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 5.5C11.5 6.39174 10.3072 7.18408 10.0489 7.34519C10.0184 7.36426 9.98165 7.36426 9.95107 7.34519C9.69281 7.18408 8.50004 6.39174 8.5 5.5C8.49998 5 8.74998 4.62501 9.25 4.625C9.75002 4.62499 10 5 10 5C10 5 10.25 4.625 10.75 4.625C11.25 4.625 11.5 5 11.5 5.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wzxgst'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 9.5H11.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'xdejbf'
    }
  ]
];

/**
 * @component @name ContentHeart
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjgiIGhlaWdodD0iMTAiIHJ4PSIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQ1MTg5IDEzLjY5NDNMNS41NTQxMiAxNC40NzA4QzUuMDIwNjUgMTQuNjEzNyA0LjQ3MjMxIDE0LjI5NzEgNC4zMjkzNyAxMy43NjM2TDIuMjU4ODIgNi4wMzYyNEMyLjExNTg4IDUuNTAyNzcgMi40MzI0NiA0Ljk1NDQ0IDIuOTY1OTMgNC44MTE0OUwzLjkzMTg1IDQuNTUyNjciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjUgNS41QzExLjUgNi4zOTE3NCAxMC4zMDcyIDcuMTg0MDggMTAuMDQ4OSA3LjM0NTE5QzEwLjAxODQgNy4zNjQyNiA5Ljk4MTY1IDcuMzY0MjYgOS45NTEwNyA3LjM0NTE5QzkuNjkyODEgNy4xODQwOCA4LjUwMDA0IDYuMzkxNzQgOC41IDUuNUM4LjQ5OTk4IDUgOC43NDk5OCA0LjYyNTAxIDkuMjUgNC42MjVDOS43NTAwMiA0LjYyNDk5IDEwIDUgMTAgNUMxMCA1IDEwLjI1IDQuNjI1IDEwLjc1IDQuNjI1QzExLjI1IDQuNjI1IDExLjUgNSAxMS41IDUuNVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNSA5LjVIMTEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/content-heart
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ContentHeart = createFoamicon('ContentHeart', __iconNode);
