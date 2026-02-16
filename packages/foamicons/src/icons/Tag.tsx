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
          id: 'clip0_247_967',
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
      clipPath: 'url(#clip0_247_967)',
      key: '87zllz'
    }
  ],
  [
    'path',
    {
      d: 'M3.14072 9.03461C2.99225 8.88613 2.89428 8.69469 2.8607 8.48742L2.12551 3.94955C1.90726 2.60243 3.07251 1.43719 4.41962 1.65544L8.9575 2.39062C9.16477 2.4242 9.35621 2.52217 9.50468 2.67064L14.1662 7.33212C14.734 7.89996 14.8809 8.74437 14.4087 9.39392C13.9812 9.98191 13.3125 10.7946 12.2886 11.8185C11.2647 12.8424 10.452 13.5112 9.86399 13.9386C9.21445 14.4108 8.37004 14.2639 7.80219 13.6961L3.14072 9.03461Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'c2zs2j'
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
 * @component @name Tag
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0N185NjcpIj4KPHBhdGggZD0iTTMuMTQwNzIgOS4wMzQ2MUMyLjk5MjI1IDguODg2MTMgMi44OTQyOCA4LjY5NDY5IDIuODYwNyA4LjQ4NzQyTDIuMTI1NTEgMy45NDk1NUMxLjkwNzI2IDIuNjAyNDMgMy4wNzI1MSAxLjQzNzE5IDQuNDE5NjIgMS42NTU0NEw4Ljk1NzUgMi4zOTA2MkM5LjE2NDc3IDIuNDI0MiA5LjM1NjIxIDIuNTIyMTcgOS41MDQ2OCAyLjY3MDY0TDE0LjE2NjIgNy4zMzIxMkMxNC43MzQgNy44OTk5NiAxNC44ODA5IDguNzQ0MzcgMTQuNDA4NyA5LjM5MzkyQzEzLjk4MTIgOS45ODE5MSAxMy4zMTI1IDEwLjc5NDYgMTIuMjg4NiAxMS44MTg1QzExLjI2NDcgMTIuODQyNCAxMC40NTIgMTMuNTExMiA5Ljg2Mzk5IDEzLjkzODZDOS4yMTQ0NSAxNC40MTA4IDguMzcwMDQgMTQuMjYzOSA3LjgwMjE5IDEzLjY5NjFMMy4xNDA3MiA5LjAzNDYxWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI2LjI3ODE4IiBjeT0iNS44MDc2MiIgcj0iMC41IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNi4yNzgxOCA1LjgwNzYyKSIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI0N185NjciPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/tag
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Tag = createFoamicon('Tag', __iconNode);
