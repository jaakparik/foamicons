import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '11.5',
      cy: '6.5',
      r: '2.5',
      transform: 'rotate(-180 11.5 6.5)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vhvx8w'
    }
  ],
  [
    'circle',
    {
      cx: '4.5',
      cy: '6.5',
      r: '2.5',
      transform: 'rotate(-180 4.5 6.5)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ya388t'
    }
  ],
  [
    'path',
    {
      d: 'M14 6.5L14 8.5C14 9.3 13.1111 12 10 12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '89oxcd'
    }
  ],
  [
    'path',
    {
      d: 'M7 6.5L7 8.5C7 9.3 6.11111 12 3 12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'po0uwx'
    }
  ]
];

/**
 * @component @name QuotationMarkRight
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEuNSIgY3k9IjYuNSIgcj0iMi41IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDExLjUgNi41KSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI0LjUiIGN5PSI2LjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCA0LjUgNi41KSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQgNi41TDE0IDguNUMxNCA5LjMgMTMuMTExMSAxMiAxMCAxMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNyA2LjVMNyA4LjVDNyA5LjMgNi4xMTExMSAxMiAzIDEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/quotation-mark-right
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const QuotationMarkRight = createFoamicon('QuotationMarkRight', __iconNode);
