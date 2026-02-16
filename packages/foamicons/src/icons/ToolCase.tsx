import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 8.5C2.5 8.22386 2.72275 8 2.99889 8C3.72367 8 5.28666 8 8 8C10.7133 8 12.2763 8 13.0011 8C13.2773 8 13.5 8.22386 13.5 8.5V12.5585C13.5 13.4193 12.9394 14.159 12.0861 14.2726C11.2067 14.3896 9.87927 14.5 8 14.5C6.12073 14.5 4.79328 14.3896 3.91395 14.2726C3.06061 14.159 2.5 13.4193 2.5 12.5585V8.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e1c09j'
    }
  ],
  [
    'path',
    {
      d: 'M4.51698 2.12722C4.59822 1.72111 5.10994 1.58442 5.3832 1.89577L6.90859 3.63405C7.01696 3.75741 7.17909 3.81907 7.34218 3.80007L9.64101 3.53151C10.0525 3.48329 10.3411 3.92743 10.1293 4.28347L8.94667 6.27077C8.8627 6.41218 8.85344 6.58622 8.92226 6.73562L9.50429 7.99929H3.85195C3.81625 7.87293 3.73428 7.76385 3.61757 7.69851L1.60097 6.56862C1.23951 6.36624 1.26653 5.83717 1.64687 5.67312L3.77284 4.7571C3.9236 4.69197 4.03271 4.55683 4.06484 4.39577L4.51698 2.12722Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vuxfpu'
    }
  ],
  [
    'path',
    {
      d: 'M12.3447 8.00055L13.5459 3.51812C13.6172 3.25148 13.459 2.97725 13.1924 2.90581L10.2949 2.12944C10.0283 2.05802 9.75422 2.21642 9.68262 2.48296L9.39356 3.56011',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'klqdpb'
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
 * @component @name ToolCase
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA4LjVDMi41IDguMjIzODYgMi43MjI3NSA4IDIuOTk4ODkgOEMzLjcyMzY3IDggNS4yODY2NiA4IDggOEMxMC43MTMzIDggMTIuMjc2MyA4IDEzLjAwMTEgOEMxMy4yNzczIDggMTMuNSA4LjIyMzg2IDEzLjUgOC41VjEyLjU1ODVDMTMuNSAxMy40MTkzIDEyLjkzOTQgMTQuMTU5IDEyLjA4NjEgMTQuMjcyNkMxMS4yMDY3IDE0LjM4OTYgOS44NzkyNyAxNC41IDggMTQuNUM2LjEyMDczIDE0LjUgNC43OTMyOCAxNC4zODk2IDMuOTEzOTUgMTQuMjcyNkMzLjA2MDYxIDE0LjE1OSAyLjUgMTMuNDE5MyAyLjUgMTIuNTU4NVY4LjVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjUxNjk4IDIuMTI3MjJDNC41OTgyMiAxLjcyMTExIDUuMTA5OTQgMS41ODQ0MiA1LjM4MzIgMS44OTU3N0w2LjkwODU5IDMuNjM0MDVDNy4wMTY5NiAzLjc1NzQxIDcuMTc5MDkgMy44MTkwNyA3LjM0MjE4IDMuODAwMDdMOS42NDEwMSAzLjUzMTUxQzEwLjA1MjUgMy40ODMyOSAxMC4zNDExIDMuOTI3NDMgMTAuMTI5MyA0LjI4MzQ3TDguOTQ2NjcgNi4yNzA3N0M4Ljg2MjcgNi40MTIxOCA4Ljg1MzQ0IDYuNTg2MjIgOC45MjIyNiA2LjczNTYyTDkuNTA0MjkgNy45OTkyOUgzLjg1MTk1QzMuODE2MjUgNy44NzI5MyAzLjczNDI4IDcuNzYzODUgMy42MTc1NyA3LjY5ODUxTDEuNjAwOTcgNi41Njg2MkMxLjIzOTUxIDYuMzY2MjQgMS4yNjY1MyA1LjgzNzE3IDEuNjQ2ODcgNS42NzMxMkwzLjc3Mjg0IDQuNzU3MUMzLjkyMzYgNC42OTE5NyA0LjAzMjcxIDQuNTU2ODMgNC4wNjQ4NCA0LjM5NTc3TDQuNTE2OTggMi4xMjcyMloiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyLjM0NDcgOC4wMDA1NUwxMy41NDU5IDMuNTE4MTJDMTMuNjE3MiAzLjI1MTQ4IDEzLjQ1OSAyLjk3NzI1IDEzLjE5MjQgMi45MDU4MUwxMC4yOTQ5IDIuMTI5NDRDMTAuMDI4MyAyLjA1ODAyIDkuNzU0MjIgMi4yMTY0MiA5LjY4MjYyIDIuNDgyOTZMOS4zOTM1NiAzLjU2MDExIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02LjUgMTAuNUg5LjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/tool-case
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ToolCase = createFoamicon('ToolCase', __iconNode);
