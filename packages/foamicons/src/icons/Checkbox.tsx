import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.6719 5.76563L7.51604 10.1049C7.33533 10.3534 6.97537 10.3816 6.75812 10.1644L5.42188 8.82812',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'z3wv5x'
    }
  ],
  [
    'path',
    {
      d: 'M1.8953 2.70501C1.95365 2.28173 2.28173 1.95365 2.70501 1.8953C3.76842 1.7487 5.88421 1.5 8 1.5C10.1158 1.5 12.2316 1.7487 13.295 1.8953C13.7183 1.95365 14.0463 2.28173 14.1047 2.70501C14.2513 3.76842 14.5 5.88421 14.5 8C14.5 10.1158 14.2513 12.2316 14.1047 13.295C14.0463 13.7183 13.7183 14.0463 13.295 14.1047C12.2316 14.2513 10.1158 14.5 8 14.5C5.88421 14.5 3.76842 14.2513 2.70501 14.1047C2.28173 14.0463 1.95365 13.7183 1.8953 13.295C1.7487 12.2316 1.5 10.1158 1.5 8C1.5 5.88421 1.7487 3.76842 1.8953 2.70501Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '19p0rg'
    }
  ]
];

/**
 * @component @name Checkbox
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjY3MTkgNS43NjU2M0w3LjUxNjA0IDEwLjEwNDlDNy4zMzUzMyAxMC4zNTM0IDYuOTc1MzcgMTAuMzgxNiA2Ljc1ODEyIDEwLjE2NDRMNS40MjE4OCA4LjgyODEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xLjg5NTMgMi43MDUwMUMxLjk1MzY1IDIuMjgxNzMgMi4yODE3MyAxLjk1MzY1IDIuNzA1MDEgMS44OTUzQzMuNzY4NDIgMS43NDg3IDUuODg0MjEgMS41IDggMS41QzEwLjExNTggMS41IDEyLjIzMTYgMS43NDg3IDEzLjI5NSAxLjg5NTNDMTMuNzE4MyAxLjk1MzY1IDE0LjA0NjMgMi4yODE3MyAxNC4xMDQ3IDIuNzA1MDFDMTQuMjUxMyAzLjc2ODQyIDE0LjUgNS44ODQyMSAxNC41IDhDMTQuNSAxMC4xMTU4IDE0LjI1MTMgMTIuMjMxNiAxNC4xMDQ3IDEzLjI5NUMxNC4wNDYzIDEzLjcxODMgMTMuNzE4MyAxNC4wNDYzIDEzLjI5NSAxNC4xMDQ3QzEyLjIzMTYgMTQuMjUxMyAxMC4xMTU4IDE0LjUgOCAxNC41QzUuODg0MjEgMTQuNSAzLjc2ODQyIDE0LjI1MTMgMi43MDUwMSAxNC4xMDQ3QzIuMjgxNzMgMTQuMDQ2MyAxLjk1MzY1IDEzLjcxODMgMS44OTUzIDEzLjI5NUMxLjc0ODcgMTIuMjMxNiAxLjUgMTAuMTE1OCAxLjUgOEMxLjUgNS44ODQyMSAxLjc0ODcgMy43Njg0MiAxLjg5NTMgMi43MDUwMVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/checkbox
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Checkbox = createFoamicon('Checkbox', __iconNode);
