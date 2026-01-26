import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '4.5',
      r: '2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ldhsbk'
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
 * @component @name UserArrowOutUpRight
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIgMTMuNzVDMTIgMTMuNzUgMTEgMTQgOCAxNEM1IDE0IDQgMTMuNzUgNCAxMy43NUM0IDEwIDUuNSA4LjUgOCA4LjVDOC4yNzY3OCA4LjUgOC41NDEzIDguNTE4MzkgOC43OTI4OCA4LjU1NjE3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCA4LjMwODY1TDEwLjMwODQgMTIuMDAwMk0xNCA4LjMwODY1TDE0IDEwLjkyNTdNMTQgOC4zMDg2NUwxMS4zODMxIDguMzA4NzQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/user-arrow-out-up-right
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserArrowOutUpRight = createFoamicon('UserArrowOutUpRight', __iconNode);
