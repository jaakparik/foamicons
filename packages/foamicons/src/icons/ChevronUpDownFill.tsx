import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.6667 9.33333L8.35356 11.6464C8.1583 11.8417 7.84171 11.8417 7.64645 11.6464L5.33334 9.33333',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'njb7vj'
    }
  ],
  [
    'path',
    {
      d: 'M5.33333 6.66667L7.64644 4.35355C7.8417 4.15829 8.15829 4.15829 8.35355 4.35355L10.6667 6.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'fdv2hc'
    }
  ]
];

/**
 * @component @name ChevronUpDownFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjY2NjcgOS4zMzMzM0w4LjM1MzU2IDExLjY0NjRDOC4xNTgzIDExLjg0MTcgNy44NDE3MSAxMS44NDE3IDcuNjQ2NDUgMTEuNjQ2NEw1LjMzMzM0IDkuMzMzMzMiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuMzMzMzMgNi42NjY2N0w3LjY0NjQ0IDQuMzUzNTVDNy44NDE3IDQuMTU4MjkgOC4xNTgyOSA0LjE1ODI5IDguMzUzNTUgNC4zNTM1NUwxMC42NjY3IDYuNjY2NjciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/chevron-up-down-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChevronUpDownFill = createFoamicon('ChevronUpDownFill', __iconNode);
