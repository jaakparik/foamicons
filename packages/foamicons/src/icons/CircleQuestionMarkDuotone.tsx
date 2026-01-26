import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'w97vay'
    }
  ],
  [
    'path',
    {
      d: 'M8.05453 8.86291C8.12045 7.91806 9.21944 7.27066 9.51321 6.95069C9.70825 6.73825 9.82338 6.47638 9.82338 6.19312C9.82338 5.48321 9.1003 4.90771 8.20834 4.90771C7.31638 4.90771 6.59331 5.48321 6.59331 6.19312',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'eimvgx'
    }
  ],
  [
    'path',
    {
      d: 'M8.00687 10.5H8.01353Z',
      fill: 'currentColor',
      key: 'x10jnm'
    }
  ],
  [
    'path',
    {
      d: 'M8.00687 10.5H8.01353',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'g0wwbw'
    }
  ]
];

/**
 * @component @name CircleQuestionMarkDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjA1NDUzIDguODYyOTFDOC4xMjA0NSA3LjkxODA2IDkuMjE5NDQgNy4yNzA2NiA5LjUxMzIxIDYuOTUwNjlDOS43MDgyNSA2LjczODI1IDkuODIzMzggNi40NzYzOCA5LjgyMzM4IDYuMTkzMTJDOS44MjMzOCA1LjQ4MzIxIDkuMTAwMyA0LjkwNzcxIDguMjA4MzQgNC45MDc3MUM3LjMxNjM4IDQuOTA3NzEgNi41OTMzMSA1LjQ4MzIxIDYuNTkzMzEgNi4xOTMxMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4wMDY4NyAxMC41SDguMDEzNTNaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTguMDA2ODcgMTAuNUg4LjAxMzUzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/circle-question-mark-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleQuestionMarkDuotone = createFoamicon('CircleQuestionMarkDuotone', __iconNode);
