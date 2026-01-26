import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8.21213 11.7879L10.4879 9.51213C10.6769 9.32314 10.543 9 10.2757 9L5.72426 9C5.45699 9 5.32314 9.32314 5.51213 9.51213L7.78787 11.7879C7.90503 11.905 8.09497 11.905 8.21213 11.7879Z',
      fill: 'currentColor',
      key: 'mn6pqq'
    }
  ]
];

/**
 * @component @name TriangleDown
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjEyMTMgMTEuNzg3OUwxMC40ODc5IDkuNTEyMTNDMTAuNjc2OSA5LjMyMzE0IDEwLjU0MyA5IDEwLjI3NTcgOUw1LjcyNDI2IDlDNS40NTY5OSA5IDUuMzIzMTQgOS4zMjMxNCA1LjUxMjEzIDkuNTEyMTNMNy43ODc4NyAxMS43ODc5QzcuOTA1MDMgMTEuOTA1IDguMDk0OTcgMTEuOTA1IDguMjEyMTMgMTEuNzg3OVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/triangle-down
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const TriangleDown = createFoamicon('TriangleDown', __iconNode);
