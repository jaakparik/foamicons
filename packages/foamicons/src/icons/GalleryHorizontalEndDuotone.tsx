import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '7.5',
      y: '14',
      width: '12',
      height: '6',
      rx: '1',
      transform: 'rotate(-90 7.5 14)',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'sfl0c5'
    }
  ],
  [
    'path',
    {
      d: 'M5 13L5 3',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '6f77oq'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 11L2.5 5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '9avod3'
    }
  ]
];

/**
 * @component @name GalleryHorizontalEndDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNy41IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNy41IDE0KSIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUgMTNMNSAzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjUgMTFMMi41IDUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/gallery-horizontal-end-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const GalleryHorizontalEndDuotone = createFoamicon('GalleryHorizontalEndDuotone', __iconNode);
