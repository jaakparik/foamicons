import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '4.5',
      r: '2',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '880ed'
    }
  ],
  [
    'path',
    {
      d: 'M9.36887 8.68385C8.95475 8.55932 8.49715 8.5 8 8.5C5.5 8.5 4 10 4 13.75C4 13.75 5 14 8 14C8.17327 14 8.33988 13.9992 8.5 13.9976',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'r8dito'
    }
  ],
  [
    'path',
    {
      d: 'M10.951 10L11.2396 10.5M13.549 14.5L13.2604 14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nizqiz'
    }
  ],
  [
    'path',
    {
      d: 'M13.549 10L13.2604 10.5M10.951 14.5L11.2396 14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 't1wd1m'
    }
  ],
  [
    'path',
    {
      d: 'M14.8481 12.25L14.1519 12.25M9.65192 12.25L10.2825 12.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'g4gkdm'
    }
  ],
  [
    'circle',
    {
      cx: '12.201',
      cy: '12.25',
      r: '1.75',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '5gmp9e'
    }
  ]
];

/**
 * @component @name UserCogDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuMzY4ODcgOC42ODM4NUM4Ljk1NDc1IDguNTU5MzIgOC40OTcxNSA4LjUgOCA4LjVDNS41IDguNSA0IDEwIDQgMTMuNzVDNCAxMy43NSA1IDE0IDggMTRDOC4xNzMyNyAxNCA4LjMzOTg4IDEzLjk5OTIgOC41IDEzLjk5NzYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjk1MSAxMEwxMS4yMzk2IDEwLjVNMTMuNTQ5IDE0LjVMMTMuMjYwNCAxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNTQ5IDEwTDEzLjI2MDQgMTAuNU0xMC45NTEgMTQuNUwxMS4yMzk2IDE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNC44NDgxIDEyLjI1TDE0LjE1MTkgMTIuMjVNOS42NTE5MiAxMi4yNUwxMC4yODI1IDEyLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyLjIwMSIgY3k9IjEyLjI1IiByPSIxLjc1IiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/user-cog-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserCogDuotone = createFoamicon('UserCogDuotone', __iconNode);
