import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.66675 11L5.35364 13.3131C5.15837 13.5083 4.84179 13.5083 4.64653 13.3131L2.33341 11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6i2axc'
    }
  ],
  [
    'path',
    {
      d: 'M5 13L5 2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '9q2irf'
    }
  ],
  [
    'path',
    {
      d: 'M11 2.5H12M13 2.5H12M12 2.5V6.5M12 6.5H13M12 6.5H11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '2vt5gr'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 9.5H12C10.8954 9.5 10 10.3954 10 11.5C10 12.6046 10.8954 13.5 12 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5C13.5 11.9477 13.0523 11.5 12.5 11.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'pxndho'
    }
  ]
];

/**
 * @component @name ArrowDownIG
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjY2NzUgMTFMNS4zNTM2NCAxMy4zMTMxQzUuMTU4MzcgMTMuNTA4MyA0Ljg0MTc5IDEzLjUwODMgNC42NDY1MyAxMy4zMTMxTDIuMzMzNDEgMTEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUgMTNMNSAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMSAyLjVIMTJNMTMgMi41SDEyTTEyIDIuNVY2LjVNMTIgNi41SDEzTTEyIDYuNUgxMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNSA5LjVIMTJDMTAuODk1NCA5LjUgMTAgMTAuMzk1NCAxMCAxMS41QzEwIDEyLjYwNDYgMTAuODk1NCAxMy41IDEyIDEzLjVIMTIuNUMxMy4wNTIzIDEzLjUgMTMuNSAxMy4wNTIzIDEzLjUgMTIuNUMxMy41IDExLjk0NzcgMTMuMDUyMyAxMS41IDEyLjUgMTEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/arrow-down-ig
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowDownIG = createFoamicon('ArrowDownIG', __iconNode);
