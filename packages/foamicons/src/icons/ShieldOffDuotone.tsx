import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12.04 11.6396C10.2894 13.9989 8.00001 14 8.00001 14C7.99263 14 2.0824 13.9939 2.00098 4.20508C2.00007 4.09462 2.08979 4.00027 2.2002 3.99707C2.85064 3.9782 3.4978 3.86883 4.11134 3.71094L12.04 11.6396Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'kgkoc5'
    }
  ],
  [
    'path',
    {
      d: 'M11.8644 11.8434C10.1404 13.974 8 13.974 8 13.974C8 13.974 2.08225 13.974 2.00085 4.17891C1.99993 4.06845 2.08956 3.97426 2.19997 3.97106C2.71353 3.95617 3.22513 3.88523 3.7197 3.77832',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'z697wh'
    }
  ],
  [
    'path',
    {
      d: 'M14 14L1 0.999999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'k5jpeh'
    }
  ],
  [
    'path',
    {
      d: 'M12.9142 10.1294C13.542 8.72466 13.9782 6.81022 13.9995 4.20035C14.0004 4.0899 13.9107 4.00028 13.8003 3.99708C11.2068 3.92189 8.66295 2.41688 8.11038 2.07052C8.04212 2.02774 7.95682 2.0287 7.8885 2.07139C7.62 2.23914 6.88787 2.67569 5.9108 3.0911',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'lw2895'
    }
  ]
];

/**
 * @component @name ShieldOffDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjA0IDExLjYzOTZDMTAuMjg5NCAxMy45OTg5IDguMDAwMDEgMTQgOC4wMDAwMSAxNEM3Ljk5MjYzIDE0IDIuMDgyNCAxMy45OTM5IDIuMDAwOTggNC4yMDUwOEMyLjAwMDA3IDQuMDk0NjIgMi4wODk3OSA0LjAwMDI3IDIuMjAwMiAzLjk5NzA3QzIuODUwNjQgMy45NzgyIDMuNDk3OCAzLjg2ODgzIDQuMTExMzQgMy43MTA5NEwxMi4wNCAxMS42Mzk2WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiLz4KPHBhdGggZD0iTTExLjg2NDQgMTEuODQzNEMxMC4xNDA0IDEzLjk3NCA4IDEzLjk3NCA4IDEzLjk3NEM4IDEzLjk3NCAyLjA4MjI1IDEzLjk3NCAyLjAwMDg1IDQuMTc4OTFDMS45OTk5MyA0LjA2ODQ1IDIuMDg5NTYgMy45NzQyNiAyLjE5OTk3IDMuOTcxMDZDMi43MTM1MyAzLjk1NjE3IDMuMjI1MTMgMy44ODUyMyAzLjcxOTcgMy43NzgzMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQgMTRMMSAwLjk5OTk5OSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuOTE0MiAxMC4xMjk0QzEzLjU0MiA4LjcyNDY2IDEzLjk3ODIgNi44MTAyMiAxMy45OTk1IDQuMjAwMzVDMTQuMDAwNCA0LjA4OTkgMTMuOTEwNyA0LjAwMDI4IDEzLjgwMDMgMy45OTcwOEMxMS4yMDY4IDMuOTIxODkgOC42NjI5NSAyLjQxNjg4IDguMTEwMzggMi4wNzA1MkM4LjA0MjEyIDIuMDI3NzQgNy45NTY4MiAyLjAyODcgNy44ODg1IDIuMDcxMzlDNy42MiAyLjIzOTE0IDYuODg3ODcgMi42NzU2OSA1LjkxMDggMy4wOTExIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/shield-off-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ShieldOffDuotone = createFoamicon('ShieldOffDuotone', __iconNode);
