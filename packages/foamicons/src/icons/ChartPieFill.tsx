import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.584 11C10.8124 12.7659 9.05032 14 7 14C4.23858 14 2 11.7614 2 8.99997C2 6.94965 3.2341 5.18757 5 4.41602',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'utvvev'
    }
  ],
  [
    'path',
    {
      d: 'M7 2.19763C7 2.08717 7.09008 1.99734 7.20049 2.00044C10.9072 2.10469 13.8929 5.09046 13.9972 8.79713C14.0003 8.90755 13.9105 8.99763 13.8 8.99763H7.2C7.08954 8.99763 7 8.90809 7 8.79763V2.19763Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'jguvt0'
    }
  ]
];

/**
 * @component @name ChartPieFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU4NCAxMUMxMC44MTI0IDEyLjc2NTkgOS4wNTAzMiAxNCA3IDE0QzQuMjM4NTggMTQgMiAxMS43NjE0IDIgOC45OTk5N0MyIDYuOTQ5NjUgMy4yMzQxIDUuMTg3NTcgNSA0LjQxNjAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDIuMTk3NjNDNyAyLjA4NzE3IDcuMDkwMDggMS45OTczNCA3LjIwMDQ5IDIuMDAwNDRDMTAuOTA3MiAyLjEwNDY5IDEzLjg5MjkgNS4wOTA0NiAxMy45OTcyIDguNzk3MTNDMTQuMDAwMyA4LjkwNzU1IDEzLjkxMDUgOC45OTc2MyAxMy44IDguOTk3NjNINy4yQzcuMDg5NTQgOC45OTc2MyA3IDguOTA4MDkgNyA4Ljc5NzYzVjIuMTk3NjNaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/chart-pie-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartPieFill = createFoamicon('ChartPieFill', __iconNode);
