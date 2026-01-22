import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M14 6C14 9.79309 8.60468 13.1366 8.0465 13.4723C8.01561 13.4909 7.98439 13.4909 7.9535 13.4723C7.39533 13.1366 2.00016 9.79309 2 6C1.99992 4 2.99992 2.50002 5 2.5C7.00008 2.49998 8 4 8 4C8 4 9.00008 2.5 11 2.5C12.9999 2.5 14 4 14 6Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '2re8nx'
    }
  ]
];

/**
 * @component @name HeartDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDZDMTQgOS43OTMwOSA4LjYwNDY4IDEzLjEzNjYgOC4wNDY1IDEzLjQ3MjNDOC4wMTU2MSAxMy40OTA5IDcuOTg0MzkgMTMuNDkwOSA3Ljk1MzUgMTMuNDcyM0M3LjM5NTMzIDEzLjEzNjYgMi4wMDAxNiA5Ljc5MzA5IDIgNkMxLjk5OTkyIDQgMi45OTk5MiAyLjUwMDAyIDUgMi41QzcuMDAwMDggMi40OTk5OCA4IDQgOCA0QzggNCA5LjAwMDA4IDIuNSAxMSAyLjVDMTIuOTk5OSAyLjUgMTQgNCAxNCA2WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/heart-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const HeartDuotone = createFoamicon('HeartDuotone', __iconNode);
