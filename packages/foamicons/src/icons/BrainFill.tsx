import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      width: '16',
      height: '16',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      key: 'ubarid'
    }
  ],
  [
    'path',
    {
      d: 'M3 9C3 8.41659 3.20131 7.88112 3.53647 7.45595C3.58187 7.39836 3.59537 7.32176 3.57422 7.25155C3.52637 7.09266 3.5 6.92447 3.5 6.75C3.5 5.92672 4.06862 5.23748 4.8345 5.05116C4.96179 5.02019 5.04583 4.88788 5.02288 4.7589C5.00793 4.67483 5 4.58836 5 4.5C5 3.67157 5.67157 3 6.5 3C7.32843 3 8 3.67157 8 4.5L8 11C8 12.3807 7.10457 13.5 6 13.5C4.89543 13.5 4 12.3807 4 11C4 10.9982 3.99913 10.9964 3.99766 10.9953C3.39261 10.539 3 9.81618 3 9Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'jsnp7p'
    }
  ],
  [
    'path',
    {
      d: 'M13 9C13 8.41659 12.7987 7.88112 12.4635 7.45595C12.4181 7.39836 12.4046 7.32176 12.4258 7.25155C12.4736 7.09266 12.5 6.92447 12.5 6.75C12.5 5.92672 11.9314 5.23748 11.1655 5.05116C11.0382 5.0202 10.9542 4.88788 10.9771 4.7589C10.9921 4.67483 11 4.58836 11 4.5C11 3.67157 10.3284 3 9.5 3C8.67157 3 8 3.67157 8 4.5L8 11C8 12.3807 8.89543 13.5 10 13.5C11.1046 13.5 12 12.3807 12 11C12 10.9982 12.0009 10.9964 12.0023 10.9953C12.6074 10.539 13 9.81618 13 9Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '65tfk5'
    }
  ],
  [
    'path',
    {
      d: 'M8 7C8 8 7.3 8.5 6.5 8.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: 'ixjrfn'
    }
  ],
  [
    'path',
    {
      d: 'M8 7C8 8 8.7 8.5 9.5 8.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      key: 'vhmqay'
    }
  ]
];

/**
 * @component @name BrainFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMyA5QzMgOC40MTY1OSAzLjIwMTMxIDcuODgxMTIgMy41MzY0NyA3LjQ1NTk1QzMuNTgxODcgNy4zOTgzNiAzLjU5NTM3IDcuMzIxNzYgMy41NzQyMiA3LjI1MTU1QzMuNTI2MzcgNy4wOTI2NiAzLjUgNi45MjQ0NyAzLjUgNi43NUMzLjUgNS45MjY3MiA0LjA2ODYyIDUuMjM3NDggNC44MzQ1IDUuMDUxMTZDNC45NjE3OSA1LjAyMDE5IDUuMDQ1ODMgNC44ODc4OCA1LjAyMjg4IDQuNzU4OUM1LjAwNzkzIDQuNjc0ODMgNSA0LjU4ODM2IDUgNC41QzUgMy42NzE1NyA1LjY3MTU3IDMgNi41IDNDNy4zMjg0MyAzIDggMy42NzE1NyA4IDQuNUw4IDExQzggMTIuMzgwNyA3LjEwNDU3IDEzLjUgNiAxMy41QzQuODk1NDMgMTMuNSA0IDEyLjM4MDcgNCAxMUM0IDEwLjk5ODIgMy45OTkxMyAxMC45OTY0IDMuOTk3NjYgMTAuOTk1M0MzLjM5MjYxIDEwLjUzOSAzIDkuODE2MTggMyA5WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA5QzEzIDguNDE2NTkgMTIuNzk4NyA3Ljg4MTEyIDEyLjQ2MzUgNy40NTU5NUMxMi40MTgxIDcuMzk4MzYgMTIuNDA0NiA3LjMyMTc2IDEyLjQyNTggNy4yNTE1NUMxMi40NzM2IDcuMDkyNjYgMTIuNSA2LjkyNDQ3IDEyLjUgNi43NUMxMi41IDUuOTI2NzIgMTEuOTMxNCA1LjIzNzQ4IDExLjE2NTUgNS4wNTExNkMxMS4wMzgyIDUuMDIwMiAxMC45NTQyIDQuODg3ODggMTAuOTc3MSA0Ljc1ODlDMTAuOTkyMSA0LjY3NDgzIDExIDQuNTg4MzYgMTEgNC41QzExIDMuNjcxNTcgMTAuMzI4NCAzIDkuNSAzQzguNjcxNTcgMyA4IDMuNjcxNTcgOCA0LjVMOCAxMUM4IDEyLjM4MDcgOC44OTU0MyAxMy41IDEwIDEzLjVDMTEuMTA0NiAxMy41IDEyIDEyLjM4MDcgMTIgMTFDMTIgMTAuOTk4MiAxMi4wMDA5IDEwLjk5NjQgMTIuMDAyMyAxMC45OTUzQzEyLjYwNzQgMTAuNTM5IDEzIDkuODE2MTggMTMgOVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCA3QzggOCA3LjMgOC41IDYuNSA4LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCA3QzggOCA4LjcgOC41IDkuNSA4LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
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
