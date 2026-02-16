import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 3.77297C2 2.94454 2.67099 2.27296 3.49942 2.27297C4.3666 2.27298 5.52867 2.27299 6.76381 2.27299C7.44637 2.27299 8.03877 2.86074 8.5 3.36388C8.96123 3.86703 9.55312 4.45477 10.2357 4.45477C10.9738 4.45477 11.8065 4.45477 12.5007 4.45477C13.3291 4.45477 14 5.12634 14 5.95477V11.9302C14 12.6551 13.4821 13.2743 12.7638 13.3724C11.6123 13.5298 9.80617 13.7275 8 13.7275C6.19383 13.7275 4.38766 13.5298 3.23618 13.3724C2.51792 13.2743 2 12.6551 2 11.9302V3.77297Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'bba6h5'
    }
  ],
  [
    'path',
    {
      d: 'M8 7V11',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'm7wa9z'
    }
  ],
  [
    'path',
    {
      d: 'M6 9H10',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rvfqad'
    }
  ]
];

/**
 * @component @name FolderPlusFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMy43NzI5N0MyIDIuOTQ0NTQgMi42NzA5OSAyLjI3Mjk2IDMuNDk5NDIgMi4yNzI5N0M0LjM2NjYgMi4yNzI5OCA1LjUyODY3IDIuMjcyOTkgNi43NjM4MSAyLjI3Mjk5QzcuNDQ2MzcgMi4yNzI5OSA4LjAzODc3IDIuODYwNzQgOC41IDMuMzYzODhDOC45NjEyMyAzLjg2NzAzIDkuNTUzMTIgNC40NTQ3NyAxMC4yMzU3IDQuNDU0NzdDMTAuOTczOCA0LjQ1NDc3IDExLjgwNjUgNC40NTQ3NyAxMi41MDA3IDQuNDU0NzdDMTMuMzI5MSA0LjQ1NDc3IDE0IDUuMTI2MzQgMTQgNS45NTQ3N1YxMS45MzAyQzE0IDEyLjY1NTEgMTMuNDgyMSAxMy4yNzQzIDEyLjc2MzggMTMuMzcyNEMxMS42MTIzIDEzLjUyOTggOS44MDYxNyAxMy43Mjc1IDggMTMuNzI3NUM2LjE5MzgzIDEzLjcyNzUgNC4zODc2NiAxMy41Mjk4IDMuMjM2MTggMTMuMzcyNEMyLjUxNzkyIDEzLjI3NDMgMiAxMi42NTUxIDIgMTEuOTMwMlYzLjc3Mjk3WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04IDdWMTEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA5SDEwIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/folder-plus-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FolderPlusFill = createFoamicon('FolderPlusFill', __iconNode);
