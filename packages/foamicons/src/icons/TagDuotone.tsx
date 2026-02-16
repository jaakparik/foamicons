import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'defs',
    {
      key: 'defs-0'
    },
    [
      [
        'clipPath',
        {
          id: 'clip0_247_1311',
          key: 'defs-0-0'
        },
        [
          [
            'rect',
            {
              width: '16',
              height: '16',
              fill: 'white',
              key: 'defs-0-0-0'
            }
          ]
        ]
      ]
    ]
  ],
  [
    'g',
    {
      clipPath: 'url(#clip0_247_1311)',
      key: 'qnyokb'
    }
  ],
  [
    'path',
    {
      d: 'M3.14072 9.03461C2.99224 8.88613 2.89427 8.69469 2.86069 8.48742L2.12551 3.94955C1.90726 2.60243 3.0725 1.43719 4.41962 1.65544L8.9575 2.39062C9.16476 2.4242 9.3562 2.52217 9.50468 2.67064L14.1662 7.33212C14.734 7.89996 14.8809 8.74437 14.4087 9.39392C13.9812 9.98191 13.3125 10.7946 12.2886 11.8185C11.2647 12.8424 10.452 13.5112 9.86399 13.9386C9.21444 14.4108 8.37003 14.2639 7.80219 13.6961L3.14072 9.03461Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'j4n02h'
    }
  ],
  [
    'circle',
    {
      cx: '6.27818',
      cy: '5.80762',
      r: '0.5',
      transform: 'rotate(-45 6.27818 5.80762)',
      fill: 'currentColor',
      stroke: 'currentColor',
      key: 'rle7x4'
    }
  ]
];

/**
 * @component @name TagDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0N18xMzExKSI+CjxwYXRoIGQ9Ik0zLjE0MDcyIDkuMDM0NjFDMi45OTIyNCA4Ljg4NjEzIDIuODk0MjcgOC42OTQ2OSAyLjg2MDY5IDguNDg3NDJMMi4xMjU1MSAzLjk0OTU1QzEuOTA3MjYgMi42MDI0MyAzLjA3MjUgMS40MzcxOSA0LjQxOTYyIDEuNjU1NDRMOC45NTc1IDIuMzkwNjJDOS4xNjQ3NiAyLjQyNDIgOS4zNTYyIDIuNTIyMTcgOS41MDQ2OCAyLjY3MDY0TDE0LjE2NjIgNy4zMzIxMkMxNC43MzQgNy44OTk5NiAxNC44ODA5IDguNzQ0MzcgMTQuNDA4NyA5LjM5MzkyQzEzLjk4MTIgOS45ODE5MSAxMy4zMTI1IDEwLjc5NDYgMTIuMjg4NiAxMS44MTg1QzExLjI2NDcgMTIuODQyNCAxMC40NTIgMTMuNTExMiA5Ljg2Mzk5IDEzLjkzODZDOS4yMTQ0NCAxNC40MTA4IDguMzcwMDMgMTQuMjYzOSA3LjgwMjE5IDEzLjY5NjFMMy4xNDA3MiA5LjAzNDYxWiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iNi4yNzgxOCIgY3k9IjUuODA3NjIiIHI9IjAuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDYuMjc4MTggNS44MDc2MikiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yNDdfMTMxMSI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/tag-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const TagDuotone = createFoamicon('TagDuotone', __iconNode);
