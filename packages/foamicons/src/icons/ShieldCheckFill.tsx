import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.00085 4.20493C1.99993 4.09447 2.08958 4.00028 2.19999 3.99708C4.79323 3.92191 7.33661 2.41732 7.88954 2.07076C7.95795 2.02788 8.04205 2.02788 8.11046 2.07076C8.66339 2.41732 11.2068 3.92191 13.8 3.99708C13.9104 4.00028 14.0001 4.09448 13.9992 4.20493C13.9177 14 8 14 8 14C8 14 2.08225 14 2.00085 4.20493Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '5ihy9u'
    }
  ],
  [
    'path',
    {
      d: 'M10.3881 6.64628L7.97351 9.9663C7.7928 10.2148 7.43284 10.243 7.21559 10.0258L6.24999 9.06016',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'duadp6'
    }
  ]
];

/**
 * @component @name ShieldCheckFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMDAwODUgNC4yMDQ5M0MxLjk5OTkzIDQuMDk0NDcgMi4wODk1OCA0LjAwMDI4IDIuMTk5OTkgMy45OTcwOEM0Ljc5MzIzIDMuOTIxOTEgNy4zMzY2MSAyLjQxNzMyIDcuODg5NTQgMi4wNzA3NkM3Ljk1Nzk1IDIuMDI3ODggOC4wNDIwNSAyLjAyNzg4IDguMTEwNDYgMi4wNzA3NkM4LjY2MzM5IDIuNDE3MzIgMTEuMjA2OCAzLjkyMTkxIDEzLjggMy45OTcwOEMxMy45MTA0IDQuMDAwMjggMTQuMDAwMSA0LjA5NDQ4IDEzLjk5OTIgNC4yMDQ5M0MxMy45MTc3IDE0IDggMTQgOCAxNEM4IDE0IDIuMDgyMjUgMTQgMi4wMDA4NSA0LjIwNDkzWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC4zODgxIDYuNjQ2MjhMNy45NzM1MSA5Ljk2NjNDNy43OTI4IDEwLjIxNDggNy40MzI4NCAxMC4yNDMgNy4yMTU1OSAxMC4wMjU4TDYuMjQ5OTkgOS4wNjAxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/shield-check-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ShieldCheckFill = createFoamicon('ShieldCheckFill', __iconNode);
