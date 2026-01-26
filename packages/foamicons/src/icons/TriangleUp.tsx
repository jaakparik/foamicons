import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.78787 4.21213L5.51213 6.48787C5.32314 6.67686 5.45699 7 5.72426 7H10.2757C10.543 7 10.6769 6.67686 10.4879 6.48787L8.21213 4.21213C8.09497 4.09497 7.90503 4.09497 7.78787 4.21213Z',
      fill: 'currentColor',
      key: '1o8qmi'
    }
  ]
];

/**
 * @component @name TriangleUp
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzg3ODcgNC4yMTIxM0w1LjUxMjEzIDYuNDg3ODdDNS4zMjMxNCA2LjY3Njg2IDUuNDU2OTkgNyA1LjcyNDI2IDdIMTAuMjc1N0MxMC41NDMgNyAxMC42NzY5IDYuNjc2ODYgMTAuNDg3OSA2LjQ4Nzg3TDguMjEyMTMgNC4yMTIxM0M4LjA5NDk3IDQuMDk0OTcgNy45MDUwMyA0LjA5NDk3IDcuNzg3ODcgNC4yMTIxM1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/triangle-up
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const TriangleUp = createFoamicon('TriangleUp', __iconNode);
