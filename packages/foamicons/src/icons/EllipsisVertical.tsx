import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.33333 8.00004C7.33333 8.36823 7.63181 8.66671 8 8.66671C8.36819 8.66671 8.66667 8.36823 8.66667 8.00004C8.66667 7.63185 8.36819 7.33337 8 7.33337C7.63181 7.33337 7.33333 7.63185 7.33333 8.00004Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '926uck'
    }
  ],
  [
    'path',
    {
      d: 'M7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e1aj86'
    }
  ],
  [
    'path',
    {
      d: 'M7.33333 3.33341C7.33333 3.7016 7.63181 4.00008 8 4.00008C8.36819 4.00008 8.66667 3.7016 8.66667 3.33341C8.66667 2.96522 8.36819 2.66675 8 2.66675C7.63181 2.66675 7.33333 2.96522 7.33333 3.33341Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'goeyp'
    }
  ]
];

/**
 * @component @name EllipsisVertical
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzMzMzMgOC4wMDAwNEM3LjMzMzMzIDguMzY4MjMgNy42MzE4MSA4LjY2NjcxIDggOC42NjY3MUM4LjM2ODE5IDguNjY2NzEgOC42NjY2NyA4LjM2ODIzIDguNjY2NjcgOC4wMDAwNEM4LjY2NjY3IDcuNjMxODUgOC4zNjgxOSA3LjMzMzM3IDggNy4zMzMzN0M3LjYzMTgxIDcuMzMzMzcgNy4zMzMzMyA3LjYzMTg1IDcuMzMzMzMgOC4wMDAwNFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy4zMzMzMyAxMi42NjY3QzcuMzMzMzMgMTMuMDM0OSA3LjYzMTgxIDEzLjMzMzMgOCAxMy4zMzMzQzguMzY4MTkgMTMuMzMzMyA4LjY2NjY3IDEzLjAzNDkgOC42NjY2NyAxMi42NjY3QzguNjY2NjcgMTIuMjk4NSA4LjM2ODE5IDEyIDggMTJDNy42MzE4MSAxMiA3LjMzMzMzIDEyLjI5ODUgNy4zMzMzMyAxMi42NjY3WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03LjMzMzMzIDMuMzMzNDFDNy4zMzMzMyAzLjcwMTYgNy42MzE4MSA0LjAwMDA4IDggNC4wMDAwOEM4LjM2ODE5IDQuMDAwMDggOC42NjY2NyAzLjcwMTYgOC42NjY2NyAzLjMzMzQxQzguNjY2NjcgMi45NjUyMiA4LjM2ODE5IDIuNjY2NzUgOCAyLjY2Njc1QzcuNjMxODEgMi42NjY3NSA3LjMzMzMzIDIuOTY1MjIgNy4zMzMzMyAzLjMzMzQxWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/ellipsis-vertical
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const EllipsisVertical = createFoamicon('EllipsisVertical', __iconNode);
