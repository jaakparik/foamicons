import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '2',
      y: '2.5',
      width: '12',
      height: '8.5',
      rx: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7tj2k4'
    }
  ],
  [
    'path',
    {
      d: 'M2.25 13.5H3.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'fw1xrd'
    }
  ],
  [
    'path',
    {
      d: 'M5.75 13.5H6.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'wpmhei'
    }
  ],
  [
    'path',
    {
      d: 'M9.25 13.5H10.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'sp7u1m'
    }
  ],
  [
    'path',
    {
      d: 'M12.75 13.5H13.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'qsi6uo'
    }
  ]
];

/**
 * @component @name GalleryThumbnails
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iMi41IiB3aWR0aD0iMTIiIGhlaWdodD0iOC41IiByeD0iMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi4yNSAxMy41SDMuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTUuNzUgMTMuNUg2Ljc1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjI1IDEzLjVIMTAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyLjc1IDEzLjVIMTMuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/gallery-thumbnails
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryThumbnails = createFoamicon('GalleryThumbnails', __iconNode);
