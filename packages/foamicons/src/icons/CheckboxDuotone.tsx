import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M1.8953 2.70501C1.95365 2.28173 2.28173 1.95365 2.70501 1.8953C3.76842 1.7487 5.88421 1.5 8 1.5C10.1158 1.5 12.2316 1.7487 13.295 1.8953C13.7183 1.95365 14.0463 2.28173 14.1047 2.70501C14.2513 3.76842 14.5 5.88421 14.5 8C14.5 10.1158 14.2513 12.2316 14.1047 13.295C14.0463 13.7183 13.7183 14.0463 13.295 14.1047C12.2316 14.2513 10.1158 14.5 8 14.5C5.88421 14.5 3.76842 14.2513 2.70501 14.1047C2.28173 14.0463 1.95365 13.7183 1.8953 13.295C1.7487 12.2316 1.5 10.1158 1.5 8C1.5 5.88421 1.7487 3.76842 1.8953 2.70501Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'yfbsgy'
    }
  ],
  [
    'path',
    {
      d: 'M10.6719 5.76563L7.51604 10.1049C7.33533 10.3534 6.97537 10.3816 6.75812 10.1644L5.42188 8.82812',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'z3wv5w'
    }
  ]
];

/**
 * @component @name CheckboxDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuODk1MyAyLjcwNTAxQzEuOTUzNjUgMi4yODE3MyAyLjI4MTczIDEuOTUzNjUgMi43MDUwMSAxLjg5NTNDMy43Njg0MiAxLjc0ODcgNS44ODQyMSAxLjUgOCAxLjVDMTAuMTE1OCAxLjUgMTIuMjMxNiAxLjc0ODcgMTMuMjk1IDEuODk1M0MxMy43MTgzIDEuOTUzNjUgMTQuMDQ2MyAyLjI4MTczIDE0LjEwNDcgMi43MDUwMUMxNC4yNTEzIDMuNzY4NDIgMTQuNSA1Ljg4NDIxIDE0LjUgOEMxNC41IDEwLjExNTggMTQuMjUxMyAxMi4yMzE2IDE0LjEwNDcgMTMuMjk1QzE0LjA0NjMgMTMuNzE4MyAxMy43MTgzIDE0LjA0NjMgMTMuMjk1IDE0LjEwNDdDMTIuMjMxNiAxNC4yNTEzIDEwLjExNTggMTQuNSA4IDE0LjVDNS44ODQyMSAxNC41IDMuNzY4NDIgMTQuMjUxMyAyLjcwNTAxIDE0LjEwNDdDMi4yODE3MyAxNC4wNDYzIDEuOTUzNjUgMTMuNzE4MyAxLjg5NTMgMTMuMjk1QzEuNzQ4NyAxMi4yMzE2IDEuNSAxMC4xMTU4IDEuNSA4QzEuNSA1Ljg4NDIxIDEuNzQ4NyAzLjc2ODQyIDEuODk1MyAyLjcwNTAxWiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjY3MTkgNS43NjU2M0w3LjUxNjA0IDEwLjEwNDlDNy4zMzUzMyAxMC4zNTM0IDYuOTc1MzcgMTAuMzgxNiA2Ljc1ODEyIDEwLjE2NDRMNS40MjE4OCA4LjgyODEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/checkbox-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CheckboxDuotone = createFoamicon('CheckboxDuotone', __iconNode);
