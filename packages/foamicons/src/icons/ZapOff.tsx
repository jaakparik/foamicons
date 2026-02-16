import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.8933 9.13281L13.4696 7.3315C13.5825 7.20225 13.4908 6.99969 13.3192 6.99946H10.4175L9.8 7M7.79529 4.85633L8.55844 1.80318C8.60918 1.59962 8.35291 1.46565 8.21469 1.62349L6.5 3.5829',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'a4h9ok'
    }
  ],
  [
    'path',
    {
      d: 'M10.5116 10.7124L7.30551 14.3764C7.16734 14.5343 6.91025 14.4002 6.96078 14.1968L8.19751 9.24798C8.22905 9.12176 8.13358 8.99949 8.00348 8.99949H2.20004C2.02855 8.99921 1.93692 8.79768 2.04965 8.66844L5.14155 5.13525',
      stroke: 'currentColor',
      key: 'mmspgc'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 14.5L1.5 1.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'f8k5um'
    }
  ]
];

/**
 * @component @name ZapOff
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjg5MzMgOS4xMzI4MUwxMy40Njk2IDcuMzMxNUMxMy41ODI1IDcuMjAyMjUgMTMuNDkwOCA2Ljk5OTY5IDEzLjMxOTIgNi45OTk0NkgxMC40MTc1TDkuOCA3TTcuNzk1MjkgNC44NTYzM0w4LjU1ODQ0IDEuODAzMThDOC42MDkxOCAxLjU5OTYyIDguMzUyOTEgMS40NjU2NSA4LjIxNDY5IDEuNjIzNDlMNi41IDMuNTgyOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNTExNiAxMC43MTI0TDcuMzA1NTEgMTQuMzc2NEM3LjE2NzM0IDE0LjUzNDMgNi45MTAyNSAxNC40MDAyIDYuOTYwNzggMTQuMTk2OEw4LjE5NzUxIDkuMjQ3OThDOC4yMjkwNSA5LjEyMTc2IDguMTMzNTggOC45OTk0OSA4LjAwMzQ4IDguOTk5NDlIMi4yMDAwNEMyLjAyODU1IDguOTk5MjEgMS45MzY5MiA4Ljc5NzY4IDIuMDQ5NjUgOC42Njg0NEw1LjE0MTU1IDUuMTM1MjUiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0xNC41IDE0LjVMMS41IDEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/zap-off
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ZapOff = createFoamicon('ZapOff', __iconNode);
