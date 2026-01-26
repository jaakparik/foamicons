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
      d: 'M10 8.97303C9.4247 8.64827 8.73322 8.4978 7.94142 8.4978C5.44142 8.4978 3.94142 9.9978 3.94142 13.7478C3.94142 13.7478 4.94142 13.9978 7.94142 13.9978C8.30814 13.9978 8.64497 13.9941 8.95374 13.9875',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'fuyzp4'
    }
  ]
];

/**
 * @component @name UserPlusFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuMjUgMTAuNVYxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS41IDEyLjI1SDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCA4Ljk3MzAzQzkuNDI0NyA4LjY0ODI3IDguNzMzMjIgOC40OTc4IDcuOTQxNDIgOC40OTc4QzUuNDQxNDIgOC40OTc4IDMuOTQxNDIgOS45OTc4IDMuOTQxNDIgMTMuNzQ3OEMzLjk0MTQyIDEzLjc0NzggNC45NDE0MiAxMy45OTc4IDcuOTQxNDIgMTMuOTk3OEM4LjMwODE0IDEzLjk5NzggOC42NDQ5NyAxMy45OTQxIDguOTUzNzQgMTMuOTg3NSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
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
