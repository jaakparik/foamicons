import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.25 9.85055H9.75M6.25 9.85055L8.10052 8M6.25 9.85055L8.10052 11.7009',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'saqsko'
    }
  ],
  [
    'path',
    {
      d: 'M13 6V4.5L9.5 1H8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yt83dd'
    }
  ],
  [
    'path',
    {
      d: 'M3 2C3 1.44772 3.44772 1 4 1H8C8.55228 1 9 1.44772 9 2V4C9 4.55228 9.44772 5 10 5H12C12.5523 5 13 5.44772 13 6V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V2Z',
      stroke: 'currentColor',
      key: 'pevcqm'
    }
  ]
];

/**
 * @component @name FileArrowLeft
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMjUgOS44NTA1NUg5Ljc1TTYuMjUgOS44NTA1NUw4LjEwMDUyIDhNNi4yNSA5Ljg1MDU1TDguMTAwNTIgMTEuNzAwOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMgNlY0LjVMOS41IDFIOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyAyQzMgMS40NDc3MiAzLjQ0NzcyIDEgNCAxSDhDOC41NTIyOCAxIDkgMS40NDc3MiA5IDJWNEM5IDQuNTUyMjggOS40NDc3MiA1IDEwIDVIMTJDMTIuNTUyMyA1IDEzIDUuNDQ3NzIgMTMgNlYxNEMxMyAxNC41NTIzIDEyLjU1MjMgMTUgMTIgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0VjJaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/file-arrow-left
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FileArrowLeft = createFoamicon('FileArrowLeft', __iconNode);
