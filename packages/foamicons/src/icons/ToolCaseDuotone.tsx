import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 8.5C2.5 8.22386 2.72275 8 2.99889 8C3.72367 8 5.28666 8 8 8C10.7133 8 12.2763 8 13.0011 8C13.2773 8 13.5 8.22386 13.5 8.5V12.5585C13.5 13.4193 12.9394 14.159 12.0861 14.2726C11.2067 14.3896 9.87927 14.5 8 14.5C6.12073 14.5 4.79328 14.3896 3.91395 14.2726C3.06061 14.159 2.5 13.4193 2.5 12.5585V8.5Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '93teqk'
    }
  ],
  [
    'path',
    {
      d: 'M4.51699 2.12722C4.59822 1.72111 5.10994 1.58442 5.3832 1.89577L6.90859 3.63405C7.01696 3.75741 7.17909 3.81907 7.34218 3.80007L9.64101 3.53151C10.0525 3.48329 10.3411 3.92743 10.1293 4.28347L8.94668 6.27077C8.86271 6.41218 8.85345 6.58622 8.92226 6.73562L9.50429 7.99929H3.85195C3.81625 7.87293 3.73428 7.76385 3.61757 7.69851L1.60097 6.56862C1.23952 6.36624 1.26653 5.83717 1.64687 5.67312L3.77285 4.7571C3.9236 4.69197 4.03272 4.55683 4.06484 4.39577L4.51699 2.12722Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3k175m'
    }
  ],
  [
    'path',
    {
      d: 'M12.3447 8.00055L13.5459 3.51812C13.6172 3.25148 13.459 2.97725 13.1924 2.90581L10.2949 2.12944C10.0283 2.05802 9.75422 2.21642 9.68263 2.48296L9.39356 3.56011',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '561cvy'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 10.5H9.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'bjqlqo'
    }
  ]
];

/**
 * @component @name ToolCaseDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA4LjVDMi41IDguMjIzODYgMi43MjI3NSA4IDIuOTk4ODkgOEMzLjcyMzY3IDggNS4yODY2NiA4IDggOEMxMC43MTMzIDggMTIuMjc2MyA4IDEzLjAwMTEgOEMxMy4yNzczIDggMTMuNSA4LjIyMzg2IDEzLjUgOC41VjEyLjU1ODVDMTMuNSAxMy40MTkzIDEyLjkzOTQgMTQuMTU5IDEyLjA4NjEgMTQuMjcyNkMxMS4yMDY3IDE0LjM4OTYgOS44NzkyNyAxNC41IDggMTQuNUM2LjEyMDczIDE0LjUgNC43OTMyOCAxNC4zODk2IDMuOTEzOTUgMTQuMjcyNkMzLjA2MDYxIDE0LjE1OSAyLjUgMTMuNDE5MyAyLjUgMTIuNTU4NVY4LjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41MTY5OSAyLjEyNzIyQzQuNTk4MjIgMS43MjExMSA1LjEwOTk0IDEuNTg0NDIgNS4zODMyIDEuODk1NzdMNi45MDg1OSAzLjYzNDA1QzcuMDE2OTYgMy43NTc0MSA3LjE3OTA5IDMuODE5MDcgNy4zNDIxOCAzLjgwMDA3TDkuNjQxMDEgMy41MzE1MUMxMC4wNTI1IDMuNDgzMjkgMTAuMzQxMSAzLjkyNzQzIDEwLjEyOTMgNC4yODM0N0w4Ljk0NjY4IDYuMjcwNzdDOC44NjI3MSA2LjQxMjE4IDguODUzNDUgNi41ODYyMiA4LjkyMjI2IDYuNzM1NjJMOS41MDQyOSA3Ljk5OTI5SDMuODUxOTVDMy44MTYyNSA3Ljg3MjkzIDMuNzM0MjggNy43NjM4NSAzLjYxNzU3IDcuNjk4NTFMMS42MDA5NyA2LjU2ODYyQzEuMjM5NTIgNi4zNjYyNCAxLjI2NjUzIDUuODM3MTcgMS42NDY4NyA1LjY3MzEyTDMuNzcyODUgNC43NTcxQzMuOTIzNiA0LjY5MTk3IDQuMDMyNzIgNC41NTY4MyA0LjA2NDg0IDQuMzk1NzdMNC41MTY5OSAyLjEyNzIyWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuMzQ0NyA4LjAwMDU1TDEzLjU0NTkgMy41MTgxMkMxMy42MTcyIDMuMjUxNDggMTMuNDU5IDIuOTc3MjUgMTMuMTkyNCAyLjkwNTgxTDEwLjI5NDkgMi4xMjk0NEMxMC4wMjgzIDIuMDU4MDIgOS43NTQyMiAyLjIxNjQyIDkuNjgyNjMgMi40ODI5Nkw5LjM5MzU2IDMuNTYwMTEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuNSAxMC41SDkuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/tool-case-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ToolCaseDuotone = createFoamicon('ToolCaseDuotone', __iconNode);
