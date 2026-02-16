import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 2.5V12C2 13.1046 2.89543 14 4 14H13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'v2swde'
    }
  ],
  [
    'path',
    {
      d: 'M5 7.58284V10.8C5 10.9105 5.08954 11 5.2 11H11.8C11.9105 11 12 10.9105 12 10.8V4.04065C12 3.85497 11.769 3.76951 11.6481 3.91049L9.16226 6.8107C9.07899 6.90785 8.92718 6.9029 8.85041 6.80054L7.63836 5.18448C7.56534 5.08711 7.423 5.077 7.33694 5.16306L5.05858 7.44142C5.02107 7.47893 5 7.5298 5 7.58284Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5em7ng'
    }
  ]
];

/**
 * @component @name ChartAreaFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMi41VjEyQzIgMTMuMTA0NiAyLjg5NTQzIDE0IDQgMTRIMTMuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNSA3LjU4Mjg0VjEwLjhDNSAxMC45MTA1IDUuMDg5NTQgMTEgNS4yIDExSDExLjhDMTEuOTEwNSAxMSAxMiAxMC45MTA1IDEyIDEwLjhWNC4wNDA2NUMxMiAzLjg1NDk3IDExLjc2OSAzLjc2OTUxIDExLjY0ODEgMy45MTA0OUw5LjE2MjI2IDYuODEwN0M5LjA3ODk5IDYuOTA3ODUgOC45MjcxOCA2LjkwMjkgOC44NTA0MSA2LjgwMDU0TDcuNjM4MzYgNS4xODQ0OEM3LjU2NTM0IDUuMDg3MTEgNy40MjMgNS4wNzcgNy4zMzY5NCA1LjE2MzA2TDUuMDU4NTggNy40NDE0MkM1LjAyMTA3IDcuNDc4OTMgNSA3LjUyOTggNSA3LjU4Mjg0WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/chart-area-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartAreaFill = createFoamicon('ChartAreaFill', __iconNode);
