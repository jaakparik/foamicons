import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.8644 11.8692C10.1404 13.9999 8 13.9999 8 13.9999C8 13.9999 2.08225 13.9999 2.00085 4.20479C1.99993 4.09433 2.08956 4.00014 2.19997 3.99694C2.71353 3.98205 3.22513 3.91111 3.7197 3.8042',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'iowmqy'
    }
  ],
  [
    'path',
    {
      d: 'M14 14L1 0.999999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'k5jpei'
    }
  ],
  [
    'path',
    {
      d: 'M12.9142 10.1294C13.542 8.72466 13.9782 6.81022 13.9995 4.20035C14.0004 4.0899 13.9107 4.00028 13.8003 3.99708C11.2067 3.92189 8.66294 2.41688 8.11037 2.07052C8.04211 2.02774 7.95681 2.0287 7.88848 2.07139C7.61998 2.23914 6.88785 2.67569 5.91078 3.0911',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '2co34y'
    }
  ]
];

/**
 * @component @name ShieldOff
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjg2NDQgMTEuODY5MkMxMC4xNDA0IDEzLjk5OTkgOCAxMy45OTk5IDggMTMuOTk5OUM4IDEzLjk5OTkgMi4wODIyNSAxMy45OTk5IDIuMDAwODUgNC4yMDQ3OUMxLjk5OTkzIDQuMDk0MzMgMi4wODk1NiA0LjAwMDE0IDIuMTk5OTcgMy45OTY5NEMyLjcxMzUzIDMuOTgyMDUgMy4yMjUxMyAzLjkxMTExIDMuNzE5NyAzLjgwNDIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTE0IDE0TDEgMC45OTk5OTkiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyLjkxNDIgMTAuMTI5NEMxMy41NDIgOC43MjQ2NiAxMy45NzgyIDYuODEwMjIgMTMuOTk5NSA0LjIwMDM1QzE0LjAwMDQgNC4wODk5IDEzLjkxMDcgNC4wMDAyOCAxMy44MDAzIDMuOTk3MDhDMTEuMjA2NyAzLjkyMTg5IDguNjYyOTQgMi40MTY4OCA4LjExMDM3IDIuMDcwNTJDOC4wNDIxMSAyLjAyNzc0IDcuOTU2ODEgMi4wMjg3IDcuODg4NDggMi4wNzEzOUM3LjYxOTk4IDIuMjM5MTQgNi44ODc4NSAyLjY3NTY5IDUuOTEwNzggMy4wOTExIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/shield-off
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ShieldOff = createFoamicon('ShieldOff', __iconNode);
