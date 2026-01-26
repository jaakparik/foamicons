import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.33334 8.00004C7.33334 8.36823 7.63182 8.66671 8.00001 8.66671C8.36819 8.66671 8.66667 8.36823 8.66667 8.00004C8.66667 7.63185 8.36819 7.33337 8.00001 7.33337C7.63182 7.33337 7.33334 7.63185 7.33334 8.00004Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '2v53rs'
    }
  ],
  [
    'path',
    {
      d: 'M7.33334 12.6667C7.33334 13.0349 7.63182 13.3333 8.00001 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8.00001 12C7.63182 12 7.33334 12.2985 7.33334 12.6667Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rl5gc4'
    }
  ],
  [
    'path',
    {
      d: 'M7.33334 3.33341C7.33334 3.7016 7.63182 4.00008 8.00001 4.00008C8.36819 4.00008 8.66667 3.7016 8.66667 3.33341C8.66667 2.96522 8.36819 2.66675 8.00001 2.66675C7.63182 2.66675 7.33334 2.96522 7.33334 3.33341Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'k19e6d'
    }
  ]
];

/**
 * @component @name EllipsisVerticalFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzMzMzQgOC4wMDAwNEM3LjMzMzM0IDguMzY4MjMgNy42MzE4MiA4LjY2NjcxIDguMDAwMDEgOC42NjY3MUM4LjM2ODE5IDguNjY2NzEgOC42NjY2NyA4LjM2ODIzIDguNjY2NjcgOC4wMDAwNEM4LjY2NjY3IDcuNjMxODUgOC4zNjgxOSA3LjMzMzM3IDguMDAwMDEgNy4zMzMzN0M3LjYzMTgyIDcuMzMzMzcgNy4zMzMzNCA3LjYzMTg1IDcuMzMzMzQgOC4wMDAwNFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy4zMzMzNCAxMi42NjY3QzcuMzMzMzQgMTMuMDM0OSA3LjYzMTgyIDEzLjMzMzMgOC4wMDAwMSAxMy4zMzMzQzguMzY4MTkgMTMuMzMzMyA4LjY2NjY3IDEzLjAzNDkgOC42NjY2NyAxMi42NjY3QzguNjY2NjcgMTIuMjk4NSA4LjM2ODE5IDEyIDguMDAwMDEgMTJDNy42MzE4MiAxMiA3LjMzMzM0IDEyLjI5ODUgNy4zMzMzNCAxMi42NjY3WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03LjMzMzM0IDMuMzMzNDFDNy4zMzMzNCAzLjcwMTYgNy42MzE4MiA0LjAwMDA4IDguMDAwMDEgNC4wMDAwOEM4LjM2ODE5IDQuMDAwMDggOC42NjY2NyAzLjcwMTYgOC42NjY2NyAzLjMzMzQxQzguNjY2NjcgMi45NjUyMiA4LjM2ODE5IDIuNjY2NzUgOC4wMDAwMSAyLjY2Njc1QzcuNjMxODIgMi42NjY3NSA3LjMzMzM0IDIuOTY1MjIgNy4zMzMzNCAzLjMzMzQxWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/ellipsis-vertical-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const EllipsisVerticalFill = createFoamicon('EllipsisVerticalFill', __iconNode);
