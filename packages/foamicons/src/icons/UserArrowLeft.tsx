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
      d: 'M10.0586 8.97523C9.48328 8.65047 8.7918 8.5 8 8.5C5.5 8.5 4 10 4 13.75C4 13.75 5 14 8 14C8.36672 14 8.70355 13.9963 9.01232 13.9897',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yseudj'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 12.2502H14M10.5 12.2502L12.3505 10.3997M10.5 12.2502L12.3505 14.1006',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'o29tok'
    }
  ]
];

/**
 * @component @name UserArrowLeft
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuMDU4NiA4Ljk3NTIzQzkuNDgzMjggOC42NTA0NyA4Ljc5MTggOC41IDggOC41QzUuNSA4LjUgNCAxMCA0IDEzLjc1QzQgMTMuNzUgNSAxNCA4IDE0QzguMzY2NzIgMTQgOC43MDM1NSAxMy45OTYzIDkuMDEyMzIgMTMuOTg5NyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNSAxMi4yNTAySDE0TTEwLjUgMTIuMjUwMkwxMi4zNTA1IDEwLjM5OTdNMTAuNSAxMi4yNTAyTDEyLjM1MDUgMTQuMTAwNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/user-arrow-left
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserArrowLeft = createFoamicon('UserArrowLeft', __iconNode);
