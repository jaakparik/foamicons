import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.82478 3.82341C2.89314 3.34499 3.30584 3 3.78912 3H5.21088C5.69417 3 6.10686 3.34499 6.17522 3.82341C6.30956 4.76364 6.5 6.38182 6.5 8C6.5 9.61818 6.30956 11.2364 6.17522 12.1766C6.10686 12.655 5.69416 13 5.21088 13H3.78912C3.30584 13 2.89314 12.655 2.82478 12.1766C2.69044 11.2364 2.5 9.61818 2.5 8C2.5 6.38182 2.69044 4.76364 2.82478 3.82341Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jtnhpm'
    }
  ],
  [
    'path',
    {
      d: 'M9.82478 3.82341C9.89314 3.34499 10.3058 3 10.7891 3H12.2109C12.6942 3 13.1069 3.34499 13.1752 3.82341C13.3096 4.76364 13.5 6.38182 13.5 8C13.5 9.61818 13.3096 11.2364 13.1752 12.1766C13.1069 12.655 12.6942 13 12.2109 13H10.7891C10.3058 13 9.89314 12.655 9.82478 12.1766C9.69044 11.2364 9.5 9.61818 9.5 8C9.5 6.38182 9.69044 4.76364 9.82478 3.82341Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5iwhw4'
    }
  ]
];

/**
 * @component @name Pause
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuODI0NzggMy44MjM0MUMyLjg5MzE0IDMuMzQ0OTkgMy4zMDU4NCAzIDMuNzg5MTIgM0g1LjIxMDg4QzUuNjk0MTcgMyA2LjEwNjg2IDMuMzQ0OTkgNi4xNzUyMiAzLjgyMzQxQzYuMzA5NTYgNC43NjM2NCA2LjUgNi4zODE4MiA2LjUgOEM2LjUgOS42MTgxOCA2LjMwOTU2IDExLjIzNjQgNi4xNzUyMiAxMi4xNzY2QzYuMTA2ODYgMTIuNjU1IDUuNjk0MTYgMTMgNS4yMTA4OCAxM0gzLjc4OTEyQzMuMzA1ODQgMTMgMi44OTMxNCAxMi42NTUgMi44MjQ3OCAxMi4xNzY2QzIuNjkwNDQgMTEuMjM2NCAyLjUgOS42MTgxOCAyLjUgOEMyLjUgNi4zODE4MiAyLjY5MDQ0IDQuNzYzNjQgMi44MjQ3OCAzLjgyMzQxWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS44MjQ3OCAzLjgyMzQxQzkuODkzMTQgMy4zNDQ5OSAxMC4zMDU4IDMgMTAuNzg5MSAzSDEyLjIxMDlDMTIuNjk0MiAzIDEzLjEwNjkgMy4zNDQ5OSAxMy4xNzUyIDMuODIzNDFDMTMuMzA5NiA0Ljc2MzY0IDEzLjUgNi4zODE4MiAxMy41IDhDMTMuNSA5LjYxODE4IDEzLjMwOTYgMTEuMjM2NCAxMy4xNzUyIDEyLjE3NjZDMTMuMTA2OSAxMi42NTUgMTIuNjk0MiAxMyAxMi4yMTA5IDEzSDEwLjc4OTFDMTAuMzA1OCAxMyA5Ljg5MzE0IDEyLjY1NSA5LjgyNDc4IDEyLjE3NjZDOS42OTA0NCAxMS4yMzY0IDkuNSA5LjYxODE4IDkuNSA4QzkuNSA2LjM4MTgyIDkuNjkwNDQgNC43NjM2NCA5LjgyNDc4IDMuODIzNDFaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/pause
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Pause = createFoamicon('Pause', __iconNode);
