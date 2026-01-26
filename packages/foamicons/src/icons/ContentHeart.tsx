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
      d: 'M8.45189 13.6945L5.55412 14.471C5.02065 14.6139 4.47231 14.2974 4.32937 13.7639L2.25882 6.03648C2.11588 5.50302 2.43246 4.95468 2.96593 4.81174L3.93185 4.55292',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'f3bcaq'
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
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjgiIGhlaWdodD0iMTAiIHJ4PSIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQ1MTg5IDEzLjY5NDVMNS41NTQxMiAxNC40NzFDNS4wMjA2NSAxNC42MTM5IDQuNDcyMzEgMTQuMjk3NCA0LjMyOTM3IDEzLjc2MzlMMi4yNTg4MiA2LjAzNjQ4QzIuMTE1ODggNS41MDMwMiAyLjQzMjQ2IDQuOTU0NjggMi45NjU5MyA0LjgxMTc0TDMuOTMxODUgNC41NTI5MiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNSA1LjVDMTEuNSA2LjM5MTc0IDEwLjMwNzIgNy4xODQwOCAxMC4wNDg5IDcuMzQ1MTlDMTAuMDE4NCA3LjM2NDI2IDkuOTgxNjUgNy4zNjQyNiA5Ljk1MTA3IDcuMzQ1MTlDOS42OTI4MSA3LjE4NDA4IDguNTAwMDQgNi4zOTE3NCA4LjUgNS41QzguNDk5OTggNSA4Ljc0OTk4IDQuNjI1MDEgOS4yNSA0LjYyNUM5Ljc1MDAyIDQuNjI0OTkgMTAgNSAxMCA1QzEwIDUgMTAuMjUgNC42MjUgMTAuNzUgNC42MjVDMTEuMjUgNC42MjUgMTEuNSA1IDExLjUgNS41WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC41IDkuNUgxMS41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
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
