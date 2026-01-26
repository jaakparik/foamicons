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
      d: 'M11.25 10.5V14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '77g86p'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 12.25H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'v36jp2'
    }
  ],
  [
    'path',
    {
      d: 'M10 8.97327C9.4247 8.64851 8.73322 8.49805 7.94142 8.49805C5.44142 8.49805 3.94142 9.99805 3.94142 13.748C3.94142 13.748 4.94142 13.998 7.94142 13.998C8.30814 13.998 8.64497 13.9943 8.95374 13.9878',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 't6m613'
    }
  ]
];

/**
 * @component @name UserPlusFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuMjUgMTAuNVYxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS41IDEyLjI1SDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCA4Ljk3MzI3QzkuNDI0NyA4LjY0ODUxIDguNzMzMjIgOC40OTgwNSA3Ljk0MTQyIDguNDk4MDVDNS40NDE0MiA4LjQ5ODA1IDMuOTQxNDIgOS45OTgwNSAzLjk0MTQyIDEzLjc0OEMzLjk0MTQyIDEzLjc0OCA0Ljk0MTQyIDEzLjk5OCA3Ljk0MTQyIDEzLjk5OEM4LjMwODE0IDEzLjk5OCA4LjY0NDk3IDEzLjk5NDMgOC45NTM3NCAxMy45ODc4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/user-plus-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserPlusFill = createFoamicon('UserPlusFill', __iconNode);
