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
      d: 'M12 13.75C12 13.75 11 14 8 14C5 14 4 13.75 4 13.75C4 10 5.5 8.5 8 8.5C8.27678 8.5 8.5413 8.51839 8.79288 8.55617',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '72b7gg'
    }
  ],
  [
    'path',
    {
      d: 'M14 8.30865L10.3084 12.0002M14 8.30865L14 10.9257M14 8.30865L11.3831 8.30874',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '60bjkg'
    }
  ]
];

/**
 * @component @name UserArrowOutUpRightDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyIDEzLjc1QzEyIDEzLjc1IDExIDE0IDggMTRDNSAxNCA0IDEzLjc1IDQgMTMuNzVDNCAxMCA1LjUgOC41IDggOC41QzguMjc2NzggOC41IDguNTQxMyA4LjUxODM5IDguNzkyODggOC41NTYxNyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQgOC4zMDg2NUwxMC4zMDg0IDEyLjAwMDJNMTQgOC4zMDg2NUwxNCAxMC45MjU3TTE0IDguMzA4NjVMMTEuMzgzMSA4LjMwODc0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/user-arrow-out-up-right-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserArrowOutUpRightDuotone = createFoamicon('UserArrowOutUpRightDuotone', __iconNode);
