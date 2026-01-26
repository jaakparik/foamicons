import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8.03072',
      cy: '8',
      r: '2.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'w4x162'
    }
  ],
  [
    'path',
    {
      d: 'M10.5307 5.5C10.5307 5.5 10.5307 7 10.5307 8.5C10.5307 10 10.7807 10.5 11.7807 10.5C12.7807 10.5 13.0307 10 13.0307 8.5C13.0307 5.5 11.0614 3 8.03071 3C5 3 3 5.5 3 8C3 10.5 5 13 8.03071 13C8.75884 13 9.42628 12.8012 10.0196 12.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'atfih8'
    }
  ]
];

/**
 * @component @name AtSignDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOC4wMzA3MiIgY3k9IjgiIHI9IjIuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNTMwNyA1LjVDMTAuNTMwNyA1LjUgMTAuNTMwNyA3IDEwLjUzMDcgOC41QzEwLjUzMDcgMTAgMTAuNzgwNyAxMC41IDExLjc4MDcgMTAuNUMxMi43ODA3IDEwLjUgMTMuMDMwNyAxMCAxMy4wMzA3IDguNUMxMy4wMzA3IDUuNSAxMS4wNjE0IDMgOC4wMzA3MSAzQzUgMyAzIDUuNSAzIDhDMyAxMC41IDUgMTMgOC4wMzA3MSAxM0M4Ljc1ODg0IDEzIDkuNDI2MjggMTIuODAxMiAxMC4wMTk2IDEyLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/at-sign-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const AtSignDuotone = createFoamicon('AtSignDuotone', __iconNode);
