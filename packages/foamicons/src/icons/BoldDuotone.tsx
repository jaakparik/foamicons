import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4.23624 8.00002H9.23624C9.94349 8.00002 10.6218 8.28097 11.1219 8.78107C11.622 9.28117 11.9029 9.95944 11.9029 10.6667C11.9029 11.3739 11.622 12.0522 11.1219 12.5523C10.6218 13.0524 9.94349 13.3334 9.23624 13.3334H4.90291C4.7261 13.3334 4.55653 13.2631 4.43151 13.1381C4.30648 13.0131 4.23624 12.8435 4.23624 12.6667V8.00002ZM4.23624 8.00002V3.33335C4.23624 3.15654 4.30648 2.98697 4.43151 2.86195C4.55653 2.73693 4.7261 2.66669 4.90291 2.66669H8.56958C9.27682 2.66669 9.9551 2.94764 10.4552 3.44774C10.9553 3.94783 11.2362 4.62611 11.2362 5.33335C11.2362 6.0406 10.9553 6.71888 10.4552 7.21897C9.9551 7.71907 9.27682 8.00002 8.56958 8.00002',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '41r0ry'
    }
  ]
];

/**
 * @component @name BoldDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjM2MjQgOC4wMDAwMkg5LjIzNjI0QzkuOTQzNDkgOC4wMDAwMiAxMC42MjE4IDguMjgwOTcgMTEuMTIxOSA4Ljc4MTA3QzExLjYyMiA5LjI4MTE3IDExLjkwMjkgOS45NTk0NCAxMS45MDI5IDEwLjY2NjdDMTEuOTAyOSAxMS4zNzM5IDExLjYyMiAxMi4wNTIyIDExLjEyMTkgMTIuNTUyM0MxMC42MjE4IDEzLjA1MjQgOS45NDM0OSAxMy4zMzM0IDkuMjM2MjQgMTMuMzMzNEg0LjkwMjkxQzQuNzI2MSAxMy4zMzM0IDQuNTU2NTMgMTMuMjYzMSA0LjQzMTUxIDEzLjEzODFDNC4zMDY0OCAxMy4wMTMxIDQuMjM2MjQgMTIuODQzNSA0LjIzNjI0IDEyLjY2NjdWOC4wMDAwMlpNNC4yMzYyNCA4LjAwMDAyVjMuMzMzMzVDNC4yMzYyNCAzLjE1NjU0IDQuMzA2NDggMi45ODY5NyA0LjQzMTUxIDIuODYxOTVDNC41NTY1MyAyLjczNjkzIDQuNzI2MSAyLjY2NjY5IDQuOTAyOTEgMi42NjY2OUg4LjU2OTU4QzkuMjc2ODIgMi42NjY2OSA5Ljk1NTEgMi45NDc2NCAxMC40NTUyIDMuNDQ3NzRDMTAuOTU1MyAzLjk0NzgzIDExLjIzNjIgNC42MjYxMSAxMS4yMzYyIDUuMzMzMzVDMTEuMjM2MiA2LjA0MDYgMTAuOTU1MyA2LjcxODg4IDEwLjQ1NTIgNy4yMTg5N0M5Ljk1NTEgNy43MTkwNyA5LjI3NjgyIDguMDAwMDIgOC41Njk1OCA4LjAwMDAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/bold-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BoldDuotone = createFoamicon('BoldDuotone', __iconNode);
