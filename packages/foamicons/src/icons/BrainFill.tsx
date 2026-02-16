import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3 9C3 8.41659 3.20131 7.88112 3.53647 7.45595C3.58187 7.39836 3.59537 7.32176 3.57422 7.25155C3.52637 7.09266 3.5 6.92447 3.5 6.75C3.5 5.92672 4.06862 5.23748 4.8345 5.05116C4.96179 5.02019 5.04583 4.88788 5.02288 4.7589C5.00793 4.67483 5 4.58836 5 4.5C5 3.67157 5.67157 3 6.5 3C7.32843 3 8 3.67157 8 4.5L8 11C8 12.3807 7.10457 13.5 6 13.5C4.89543 13.5 4 12.3807 4 11C4 10.9982 3.99913 10.9964 3.99766 10.9953C3.39261 10.539 3 9.81618 3 9Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'jsnp7q'
    }
  ],
  [
    'path',
    {
      d: 'M13 9C13 8.41659 12.7987 7.88112 12.4635 7.45595C12.4181 7.39836 12.4046 7.32176 12.4258 7.25155C12.4736 7.09266 12.5 6.92447 12.5 6.75C12.5 5.92672 11.9314 5.23748 11.1655 5.05116C11.0382 5.0202 10.9542 4.88788 10.9771 4.7589C10.9921 4.67483 11 4.58836 11 4.5C11 3.67157 10.3284 3 9.5 3C8.67157 3 8 3.67157 8 4.5L8 11C8 12.3807 8.89543 13.5 10 13.5C11.1046 13.5 12 12.3807 12 11C12 10.9982 12.0009 10.9964 12.0023 10.9953C12.6074 10.539 13 9.81618 13 9Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '65tfk4'
    }
  ],
  [
    'path',
    {
      d: 'M8 7C8 8 7.3 8.5 6.5 8.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: 'ixjrfo'
    }
  ],
  [
    'path',
    {
      d: 'M8 7C8 8 8.7 8.5 9.5 8.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: 'vhmqaz'
    }
  ]
];

/**
 * @component @name BrainFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgOUMzIDguNDE2NTkgMy4yMDEzMSA3Ljg4MTEyIDMuNTM2NDcgNy40NTU5NUMzLjU4MTg3IDcuMzk4MzYgMy41OTUzNyA3LjMyMTc2IDMuNTc0MjIgNy4yNTE1NUMzLjUyNjM3IDcuMDkyNjYgMy41IDYuOTI0NDcgMy41IDYuNzVDMy41IDUuOTI2NzIgNC4wNjg2MiA1LjIzNzQ4IDQuODM0NSA1LjA1MTE2QzQuOTYxNzkgNS4wMjAxOSA1LjA0NTgzIDQuODg3ODggNS4wMjI4OCA0Ljc1ODlDNS4wMDc5MyA0LjY3NDgzIDUgNC41ODgzNiA1IDQuNUM1IDMuNjcxNTcgNS42NzE1NyAzIDYuNSAzQzcuMzI4NDMgMyA4IDMuNjcxNTcgOCA0LjVMOCAxMUM4IDEyLjM4MDcgNy4xMDQ1NyAxMy41IDYgMTMuNUM0Ljg5NTQzIDEzLjUgNCAxMi4zODA3IDQgMTFDNCAxMC45OTgyIDMuOTk5MTMgMTAuOTk2NCAzLjk5NzY2IDEwLjk5NTNDMy4zOTI2MSAxMC41MzkgMyA5LjgxNjE4IDMgOVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMgOUMxMyA4LjQxNjU5IDEyLjc5ODcgNy44ODExMiAxMi40NjM1IDcuNDU1OTVDMTIuNDE4MSA3LjM5ODM2IDEyLjQwNDYgNy4zMjE3NiAxMi40MjU4IDcuMjUxNTVDMTIuNDczNiA3LjA5MjY2IDEyLjUgNi45MjQ0NyAxMi41IDYuNzVDMTIuNSA1LjkyNjcyIDExLjkzMTQgNS4yMzc0OCAxMS4xNjU1IDUuMDUxMTZDMTEuMDM4MiA1LjAyMDIgMTAuOTU0MiA0Ljg4Nzg4IDEwLjk3NzEgNC43NTg5QzEwLjk5MjEgNC42NzQ4MyAxMSA0LjU4ODM2IDExIDQuNUMxMSAzLjY3MTU3IDEwLjMyODQgMyA5LjUgM0M4LjY3MTU3IDMgOCAzLjY3MTU3IDggNC41TDggMTFDOCAxMi4zODA3IDguODk1NDMgMTMuNSAxMCAxMy41QzExLjEwNDYgMTMuNSAxMiAxMi4zODA3IDEyIDExQzEyIDEwLjk5ODIgMTIuMDAwOSAxMC45OTY0IDEyLjAwMjMgMTAuOTk1M0MxMi42MDc0IDEwLjUzOSAxMyA5LjgxNjE4IDEzIDlaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTggN0M4IDggNy4zIDguNSA2LjUgOC41IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTggN0M4IDggOC43IDguNSA5LjUgOC41IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/brain-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BrainFill = createFoamicon('BrainFill', __iconNode);
