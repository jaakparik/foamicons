import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.00085 4.20493C1.99993 4.09447 2.08958 4.00028 2.19999 3.99708C4.79323 3.92191 7.33661 2.41732 7.88954 2.07076C7.95795 2.02788 8.04205 2.02788 8.11046 2.07076C8.66339 2.41732 11.2068 3.92191 13.8 3.99708C13.9104 4.00028 14.0001 4.09448 13.9992 4.20493C13.9177 14 8 14 8 14C8 14 2.08225 14 2.00085 4.20493Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'vm6mdl'
    }
  ],
  [
    'path',
    {
      d: 'M7.88966 2.07062C7.95798 2.02789 8.04203 2.02789 8.11036 2.07062C8.66327 2.41717 11.2066 3.92213 13.7998 3.99738C13.9102 4.00058 13.9999 4.09494 13.999 4.20539C13.9175 14.0001 8.00001 14.0003 8.00001 14.0003C7.9927 14.0003 2.0825 13.994 2.00098 4.20539C2.00007 4.09494 2.08979 4.00058 2.2002 3.99738C4.79338 3.92214 7.33674 2.41717 7.88966 2.07062ZM8.00001 10.8753C6.00001 10.8753 5.50001 12.5003 5.50001 13.0003C5.51401 13.0088 6.95361 13.8753 8.00001 13.8753C9.04616 13.8753 10.4853 13.0092 10.5 13.0003C10.5 12.5003 10 10.8753 8.00001 10.8753ZM8.00001 6.00031C7.26947 6.00032 6.67774 6.59302 6.67774 7.32355C6.67814 8.05375 7.26972 8.64582 8.00001 8.64582C8.7303 8.64582 9.32285 8.05375 9.32325 7.32355C9.32325 6.59302 8.73054 6.00031 8.00001 6.00031Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'bczbe8'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '7.32275',
      r: '1.32275',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yplx35'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 13C10.5 12.5 10 10.8745 8 10.8745C6 10.8745 5.5 12.5 5.5 13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e70d0x'
    }
  ]
];

/**
 * @component @name ShieldUserDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMDAwODUgNC4yMDQ5M0MxLjk5OTkzIDQuMDk0NDcgMi4wODk1OCA0LjAwMDI4IDIuMTk5OTkgMy45OTcwOEM0Ljc5MzIzIDMuOTIxOTEgNy4zMzY2MSAyLjQxNzMyIDcuODg5NTQgMi4wNzA3NkM3Ljk1Nzk1IDIuMDI3ODggOC4wNDIwNSAyLjAyNzg4IDguMTEwNDYgMi4wNzA3NkM4LjY2MzM5IDIuNDE3MzIgMTEuMjA2OCAzLjkyMTkxIDEzLjggMy45OTcwOEMxMy45MTA0IDQuMDAwMjggMTQuMDAwMSA0LjA5NDQ4IDEzLjk5OTIgNC4yMDQ5M0MxMy45MTc3IDE0IDggMTQgOCAxNEM4IDE0IDIuMDgyMjUgMTQgMi4wMDA4NSA0LjIwNDkzWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy44ODk2NiAyLjA3MDYyQzcuOTU3OTggMi4wMjc4OSA4LjA0MjAzIDIuMDI3ODkgOC4xMTAzNiAyLjA3MDYyQzguNjYzMjcgMi40MTcxNyAxMS4yMDY2IDMuOTIyMTMgMTMuNzk5OCAzLjk5NzM4QzEzLjkxMDIgNC4wMDA1OCAxMy45OTk5IDQuMDk0OTQgMTMuOTk5IDQuMjA1MzlDMTMuOTE3NSAxNC4wMDAxIDguMDAwMDEgMTQuMDAwMyA4LjAwMDAxIDE0LjAwMDNDNy45OTI3IDE0LjAwMDMgMi4wODI1IDEzLjk5NCAyLjAwMDk4IDQuMjA1MzlDMi4wMDAwNyA0LjA5NDk0IDIuMDg5NzkgNC4wMDA1OCAyLjIwMDIgMy45OTczOEM0Ljc5MzM4IDMuOTIyMTQgNy4zMzY3NCAyLjQxNzE3IDcuODg5NjYgMi4wNzA2MlpNOC4wMDAwMSAxMC44NzUzQzYuMDAwMDEgMTAuODc1MyA1LjUwMDAxIDEyLjUwMDMgNS41MDAwMSAxMy4wMDAzQzUuNTE0MDEgMTMuMDA4OCA2Ljk1MzYxIDEzLjg3NTMgOC4wMDAwMSAxMy44NzUzQzkuMDQ2MTYgMTMuODc1MyAxMC40ODUzIDEzLjAwOTIgMTAuNSAxMy4wMDAzQzEwLjUgMTIuNTAwMyAxMCAxMC44NzUzIDguMDAwMDEgMTAuODc1M1pNOC4wMDAwMSA2LjAwMDMxQzcuMjY5NDcgNi4wMDAzMiA2LjY3Nzc0IDYuNTkzMDIgNi42Nzc3NCA3LjMyMzU1QzYuNjc4MTQgOC4wNTM3NSA3LjI2OTcyIDguNjQ1ODIgOC4wMDAwMSA4LjY0NTgyQzguNzMwMyA4LjY0NTgyIDkuMzIyODUgOC4wNTM3NSA5LjMyMzI1IDcuMzIzNTVDOS4zMjMyNSA2LjU5MzAyIDguNzMwNTQgNi4wMDAzMSA4LjAwMDAxIDYuMDAwMzFaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgo8Y2lyY2xlIGN4PSI4IiBjeT0iNy4zMjI3NSIgcj0iMS4zMjI3NSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNSAxM0MxMC41IDEyLjUgMTAgMTAuODc0NSA4IDEwLjg3NDVDNiAxMC44NzQ1IDUuNSAxMi41IDUuNSAxMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/shield-user-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ShieldUserDuotone = createFoamicon('ShieldUserDuotone', __iconNode);
