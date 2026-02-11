import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13 14L10.4419 10.638C10.1583 10.2652 9.65381 10.1392 9.22821 10.335L8.5285 10.6569C8.09494 10.8563 7.58088 10.7216 7.30085 10.3352L6.3472 9.01913C5.96957 8.498 5.20514 8.46409 4.78284 8.94973L3.02051 10.9764C3.00728 10.9916 3 11.0111 3 11.0312',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mecpkh'
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
  ],
  [
    'circle',
    {
      cx: '5.75',
      cy: '4.75',
      r: '0.75',
      fill: 'currentColor',
      key: 'ruulka'
    }
  ]
];

/**
 * @component @name FileImage
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDE0TDEwLjQ0MTkgMTAuNjM4QzEwLjE1ODMgMTAuMjY1MiA5LjY1MzgxIDEwLjEzOTIgOS4yMjgyMSAxMC4zMzVMOC41Mjg1IDEwLjY1NjlDOC4wOTQ5NCAxMC44NTYzIDcuNTgwODggMTAuNzIxNiA3LjMwMDg1IDEwLjMzNTJMNi4zNDcyIDkuMDE5MTNDNS45Njk1NyA4LjQ5OCA1LjIwNTE0IDguNDY0MDkgNC43ODI4NCA4Ljk0OTczTDMuMDIwNTEgMTAuOTc2NEMzLjAwNzI4IDEwLjk5MTYgMyAxMS4wMTExIDMgMTEuMDMxMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMgNlY0LjVMOS41IDFIOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyAyQzMgMS40NDc3MiAzLjQ0NzcyIDEgNCAxSDhDOC41NTIyOCAxIDkgMS40NDc3MiA5IDJWNEM5IDQuNTUyMjggOS40NDc3MiA1IDEwIDVIMTJDMTIuNTUyMyA1IDEzIDUuNDQ3NzIgMTMgNlYxNEMxMyAxNC41NTIzIDEyLjU1MjMgMTUgMTIgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0VjJaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8Y2lyY2xlIGN4PSI1Ljc1IiBjeT0iNC43NSIgcj0iMC43NSIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/file-image
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FileImage = createFoamicon('FileImage', __iconNode);
