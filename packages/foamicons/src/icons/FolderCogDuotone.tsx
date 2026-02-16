import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.76367 2.27344C7.36105 2.27344 7.88952 2.72318 8.32129 3.17285L8.67871 3.55567C9.11023 4.00512 9.63828 4.45491 10.2354 4.45508H12.501C13.3293 4.45525 14 5.12676 14 5.95508V11.9307C13.9998 12.6554 13.4818 13.2739 12.7637 13.3721C11.6122 13.5294 9.80612 13.7275 8 13.7275C6.19388 13.7275 4.38782 13.5294 3.23633 13.3721C2.51824 13.2739 2.00023 12.6554 2 11.9307V3.77344C2 2.94514 2.67077 2.27365 3.49902 2.27344C4.36617 2.27345 5.52859 2.27343 6.76367 2.27344ZM8.04883 7.2002C7.08243 7.20031 6.29883 7.98377 6.29883 8.9502C6.29883 9.91662 7.08243 10.7001 8.04883 10.7002C9.01533 10.7002 9.79883 9.91669 9.79883 8.9502C9.79883 7.9837 9.01533 7.2002 8.04883 7.2002Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'bhs9ld'
    }
  ],
  [
    'path',
    {
      d: 'M2 3.77297C2 2.94454 2.67099 2.27296 3.49942 2.27297C4.3666 2.27298 5.52867 2.27299 6.76381 2.27299C7.44637 2.27299 8.03877 2.86074 8.5 3.36388C8.96123 3.86703 9.55312 4.45477 10.2357 4.45477C10.9738 4.45477 11.8065 4.45477 12.5007 4.45477C13.3291 4.45477 14 5.12634 14 5.95477V11.9302C14 12.6551 13.4821 13.2743 12.7638 13.3724C11.6123 13.5298 9.80617 13.7275 8 13.7275C6.19383 13.7275 4.38766 13.5298 3.23618 13.3724C2.51792 13.2743 2 12.6551 2 11.9302V3.77297Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wvbjkh'
    }
  ],
  [
    'path',
    {
      d: 'M6.79904 6.7002L7.08772 7.2002M9.39712 11.2002L9.10844 10.7002',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'cm489g'
    }
  ],
  [
    'path',
    {
      d: 'M9.39712 6.7002L9.10844 7.2002M6.79904 11.2002L7.08772 10.7002',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5rgag9'
    }
  ],
  [
    'path',
    {
      d: 'M10.6962 8.9502L10 8.9502M5.5 8.95019L6.13062 8.95019',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'z94386'
    }
  ],
  [
    'circle',
    {
      cx: '8.04904',
      cy: '8.9502',
      r: '1.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jta6ja'
    }
  ]
];

/**
 * @component @name FolderCogDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNzYzNjcgMi4yNzM0NEM3LjM2MTA1IDIuMjczNDQgNy44ODk1MiAyLjcyMzE4IDguMzIxMjkgMy4xNzI4NUw4LjY3ODcxIDMuNTU1NjdDOS4xMTAyMyA0LjAwNTEyIDkuNjM4MjggNC40NTQ5MSAxMC4yMzU0IDQuNDU1MDhIMTIuNTAxQzEzLjMyOTMgNC40NTUyNSAxNCA1LjEyNjc2IDE0IDUuOTU1MDhWMTEuOTMwN0MxMy45OTk4IDEyLjY1NTQgMTMuNDgxOCAxMy4yNzM5IDEyLjc2MzcgMTMuMzcyMUMxMS42MTIyIDEzLjUyOTQgOS44MDYxMiAxMy43Mjc1IDggMTMuNzI3NUM2LjE5Mzg4IDEzLjcyNzUgNC4zODc4MiAxMy41Mjk0IDMuMjM2MzMgMTMuMzcyMUMyLjUxODI0IDEzLjI3MzkgMi4wMDAyMyAxMi42NTU0IDIgMTEuOTMwN1YzLjc3MzQ0QzIgMi45NDUxNCAyLjY3MDc3IDIuMjczNjUgMy40OTkwMiAyLjI3MzQ0QzQuMzY2MTcgMi4yNzM0NSA1LjUyODU5IDIuMjczNDMgNi43NjM2NyAyLjI3MzQ0Wk04LjA0ODgzIDcuMjAwMkM3LjA4MjQzIDcuMjAwMzEgNi4yOTg4MyA3Ljk4Mzc3IDYuMjk4ODMgOC45NTAyQzYuMjk4ODMgOS45MTY2MiA3LjA4MjQzIDEwLjcwMDEgOC4wNDg4MyAxMC43MDAyQzkuMDE1MzMgMTAuNzAwMiA5Ljc5ODgzIDkuOTE2NjkgOS43OTg4MyA4Ljk1MDJDOS43OTg4MyA3Ljk4MzcgOS4wMTUzMyA3LjIwMDIgOC4wNDg4MyA3LjIwMDJaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgo8cGF0aCBkPSJNMiAzLjc3Mjk3QzIgMi45NDQ1NCAyLjY3MDk5IDIuMjcyOTYgMy40OTk0MiAyLjI3Mjk3QzQuMzY2NiAyLjI3Mjk4IDUuNTI4NjcgMi4yNzI5OSA2Ljc2MzgxIDIuMjcyOTlDNy40NDYzNyAyLjI3Mjk5IDguMDM4NzcgMi44NjA3NCA4LjUgMy4zNjM4OEM4Ljk2MTIzIDMuODY3MDMgOS41NTMxMiA0LjQ1NDc3IDEwLjIzNTcgNC40NTQ3N0MxMC45NzM4IDQuNDU0NzcgMTEuODA2NSA0LjQ1NDc3IDEyLjUwMDcgNC40NTQ3N0MxMy4zMjkxIDQuNDU0NzcgMTQgNS4xMjYzNCAxNCA1Ljk1NDc3VjExLjkzMDJDMTQgMTIuNjU1MSAxMy40ODIxIDEzLjI3NDMgMTIuNzYzOCAxMy4zNzI0QzExLjYxMjMgMTMuNTI5OCA5LjgwNjE3IDEzLjcyNzUgOCAxMy43Mjc1QzYuMTkzODMgMTMuNzI3NSA0LjM4NzY2IDEzLjUyOTggMy4yMzYxOCAxMy4zNzI0QzIuNTE3OTIgMTMuMjc0MyAyIDEyLjY1NTEgMiAxMS45MzAyVjMuNzcyOTdaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02Ljc5OTA0IDYuNzAwMkw3LjA4NzcyIDcuMjAwMk05LjM5NzEyIDExLjIwMDJMOS4xMDg0NCAxMC43MDAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjM5NzEyIDYuNzAwMkw5LjEwODQ0IDcuMjAwMk02Ljc5OTA0IDExLjIwMDJMNy4wODc3MiAxMC43MDAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC42OTYyIDguOTUwMkwxMCA4Ljk1MDJNNS41IDguOTUwMTlMNi4xMzA2MiA4Ljk1MDE5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjguMDQ5MDQiIGN5PSI4Ljk1MDIiIHI9IjEuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/folder-cog-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FolderCogDuotone = createFoamicon('FolderCogDuotone', __iconNode);
