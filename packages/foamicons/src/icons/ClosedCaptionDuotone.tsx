import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 5.25186C2.5 4.52694 3.01792 3.90771 3.73643 3.81151C4.79477 3.66981 6.39738 3.5 8 3.5C9.60262 3.5 11.2052 3.66981 12.2636 3.81151C12.9821 3.90771 13.5 4.52694 13.5 5.25186V10.7481C13.5 11.4731 12.9821 12.0923 12.2636 12.1885C11.2052 12.3302 9.60262 12.5 8 12.5C6.39738 12.5 4.79477 12.3302 3.73643 12.1885C3.01792 12.0923 2.5 11.4731 2.5 10.7481V5.25186Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'mtwdwf'
    }
  ],
  [
    'path',
    {
      d: 'M7 5.9998C7 5.9998 5 5.4996 5 7.9998C5 10.5 7 9.9998 7 9.9998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jmukab'
    }
  ],
  [
    'path',
    {
      d: 'M11 5.9998C11 5.9998 9 5.4996 9 7.9998C9 10.5 11 9.9998 11 9.9998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jeaigk'
    }
  ]
];

/**
 * @component @name ClosedCaptionDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA1LjI1MTg2QzIuNSA0LjUyNjk0IDMuMDE3OTIgMy45MDc3MSAzLjczNjQzIDMuODExNTFDNC43OTQ3NyAzLjY2OTgxIDYuMzk3MzggMy41IDggMy41QzkuNjAyNjIgMy41IDExLjIwNTIgMy42Njk4MSAxMi4yNjM2IDMuODExNTFDMTIuOTgyMSAzLjkwNzcxIDEzLjUgNC41MjY5NCAxMy41IDUuMjUxODZWMTAuNzQ4MUMxMy41IDExLjQ3MzEgMTIuOTgyMSAxMi4wOTIzIDEyLjI2MzYgMTIuMTg4NUMxMS4yMDUyIDEyLjMzMDIgOS42MDI2MiAxMi41IDggMTIuNUM2LjM5NzM4IDEyLjUgNC43OTQ3NyAxMi4zMzAyIDMuNzM2NDMgMTIuMTg4NUMzLjAxNzkyIDEyLjA5MjMgMi41IDExLjQ3MzEgMi41IDEwLjc0ODFWNS4yNTE4NloiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDUuOTk5OEM3IDUuOTk5OCA1IDUuNDk5NiA1IDcuOTk5OEM1IDEwLjUgNyA5Ljk5OTggNyA5Ljk5OTgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExIDUuOTk5OEMxMSA1Ljk5OTggOSA1LjQ5OTYgOSA3Ljk5OThDOSAxMC41IDExIDkuOTk5OCAxMSA5Ljk5OTgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/closed-caption-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ClosedCaptionDuotone = createFoamicon('ClosedCaptionDuotone', __iconNode);
