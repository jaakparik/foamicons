import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 8H3.27924C3.70967 8 4.09181 7.72457 4.22792 7.31623L5.90319 2.29042C5.93377 2.19868 6.06383 2.19946 6.0933 2.29157L9.90289 14.1965C9.93272 14.2898 10.0649 14.289 10.0937 14.1955L11.7828 8.70591C11.9119 8.28632 12.2996 8 12.7386 8H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '3nfz0x'
    }
  ]
];

/**
 * @component @name ActivityFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgOEgzLjI3OTI0QzMuNzA5NjcgOCA0LjA5MTgxIDcuNzI0NTcgNC4yMjc5MiA3LjMxNjIzTDUuOTAzMTkgMi4yOTA0MkM1LjkzMzc3IDIuMTk4NjggNi4wNjM4MyAyLjE5OTQ2IDYuMDkzMyAyLjI5MTU3TDkuOTAyODkgMTQuMTk2NUM5LjkzMjcyIDE0LjI4OTggMTAuMDY0OSAxNC4yODkgMTAuMDkzNyAxNC4xOTU1TDExLjc4MjggOC43MDU5MUMxMS45MTE5IDguMjg2MzIgMTIuMjk5NiA4IDEyLjczODYgOEgxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/activity-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ActivityFill = createFoamicon('ActivityFill', __iconNode);
