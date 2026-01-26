import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4.23624 8.00002H9.23624C9.94348 8.00002 10.6218 8.28097 11.1219 8.78107C11.622 9.28117 11.9029 9.95944 11.9029 10.6667C11.9029 11.3739 11.622 12.0522 11.1219 12.5523C10.6218 13.0524 9.94348 13.3334 9.23624 13.3334H4.9029C4.72609 13.3334 4.55652 13.2631 4.4315 13.1381C4.30647 13.0131 4.23624 12.8435 4.23624 12.6667V8.00002ZM4.23624 8.00002V3.33335C4.23624 3.15654 4.30647 2.98697 4.4315 2.86195C4.55652 2.73693 4.72609 2.66669 4.9029 2.66669H8.56957C9.27681 2.66669 9.95509 2.94764 10.4552 3.44774C10.9553 3.94783 11.2362 4.62611 11.2362 5.33335C11.2362 6.0406 10.9553 6.71888 10.4552 7.21897C9.95509 7.71907 9.27681 8.00002 8.56957 8.00002',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '10sev4'
    }
  ]
];

/**
 * @component @name BoldFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjM2MjQgOC4wMDAwMkg5LjIzNjI0QzkuOTQzNDggOC4wMDAwMiAxMC42MjE4IDguMjgwOTcgMTEuMTIxOSA4Ljc4MTA3QzExLjYyMiA5LjI4MTE3IDExLjkwMjkgOS45NTk0NCAxMS45MDI5IDEwLjY2NjdDMTEuOTAyOSAxMS4zNzM5IDExLjYyMiAxMi4wNTIyIDExLjEyMTkgMTIuNTUyM0MxMC42MjE4IDEzLjA1MjQgOS45NDM0OCAxMy4zMzM0IDkuMjM2MjQgMTMuMzMzNEg0LjkwMjlDNC43MjYwOSAxMy4zMzM0IDQuNTU2NTIgMTMuMjYzMSA0LjQzMTUgMTMuMTM4MUM0LjMwNjQ3IDEzLjAxMzEgNC4yMzYyNCAxMi44NDM1IDQuMjM2MjQgMTIuNjY2N1Y4LjAwMDAyWk00LjIzNjI0IDguMDAwMDJWMy4zMzMzNUM0LjIzNjI0IDMuMTU2NTQgNC4zMDY0NyAyLjk4Njk3IDQuNDMxNSAyLjg2MTk1QzQuNTU2NTIgMi43MzY5MyA0LjcyNjA5IDIuNjY2NjkgNC45MDI5IDIuNjY2NjlIOC41Njk1N0M5LjI3NjgxIDIuNjY2NjkgOS45NTUwOSAyLjk0NzY0IDEwLjQ1NTIgMy40NDc3NEMxMC45NTUzIDMuOTQ3ODMgMTEuMjM2MiA0LjYyNjExIDExLjIzNjIgNS4zMzMzNUMxMS4yMzYyIDYuMDQwNiAxMC45NTUzIDYuNzE4ODggMTAuNDU1MiA3LjIxODk3QzkuOTU1MDkgNy43MTkwNyA5LjI3NjgxIDguMDAwMDIgOC41Njk1NyA4LjAwMDAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/bold-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BoldFill = createFoamicon('BoldFill', __iconNode);
