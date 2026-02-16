import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      width: '16',
      height: '16',
      fill: 'white',
      key: 'zec9jj'
    }
  ],
  [
    'path',
    {
      d: 'M8.45489 1.62349C8.59312 1.46565 8.84938 1.59962 8.79864 1.80318L7.56192 6.75097C7.53037 6.87719 7.62584 6.99946 7.75595 6.99946H13.5594C13.731 6.99969 13.8227 7.20225 13.7098 7.3315L7.54571 14.3764C7.40754 14.5343 7.15045 14.4002 7.20098 14.1967L8.43771 9.24795C8.46926 9.12173 8.37379 8.99946 8.24368 8.99946H2.44024C2.26875 8.99919 2.17713 8.79765 2.28985 8.66841L8.45489 1.62349Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '939zp4'
    }
  ]
];

/**
 * @component @name ZapDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOC40NTQ4OSAxLjYyMzQ5QzguNTkzMTIgMS40NjU2NSA4Ljg0OTM4IDEuNTk5NjIgOC43OTg2NCAxLjgwMzE4TDcuNTYxOTIgNi43NTA5N0M3LjUzMDM3IDYuODc3MTkgNy42MjU4NCA2Ljk5OTQ2IDcuNzU1OTUgNi45OTk0NkgxMy41NTk0QzEzLjczMSA2Ljk5OTY5IDEzLjgyMjcgNy4yMDIyNSAxMy43MDk4IDcuMzMxNUw3LjU0NTcxIDE0LjM3NjRDNy40MDc1NCAxNC41MzQzIDcuMTUwNDUgMTQuNDAwMiA3LjIwMDk4IDE0LjE5NjdMOC40Mzc3MSA5LjI0Nzk1QzguNDY5MjYgOS4xMjE3MyA4LjM3Mzc5IDguOTk5NDYgOC4yNDM2OCA4Ljk5OTQ2SDIuNDQwMjRDMi4yNjg3NSA4Ljk5OTE5IDIuMTc3MTMgOC43OTc2NSAyLjI4OTg1IDguNjY4NDFMOC40NTQ4OSAxLjYyMzQ5WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/zap-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ZapDuotone = createFoamicon('ZapDuotone', __iconNode);
