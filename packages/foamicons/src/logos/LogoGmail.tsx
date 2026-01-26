import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.24243 13.3333H4.36365V8.18182L1.33334 5.90909V12.4242C1.33334 12.9273 1.74092 13.3333 2.24243 13.3333Z',
      fill: '#4285F4',
      key: 'f7v6zx'
    }
  ],
  [
    'path',
    {
      d: 'M11.6364 13.3333H13.7576C14.2606 13.3333 14.6667 12.9258 14.6667 12.4242V5.90909L11.6364 8.18182',
      fill: '#34A853',
      key: 'a1ti70'
    }
  ],
  [
    'path',
    {
      d: 'M11.6364 4.24243V8.18182L14.6667 5.90909V4.69697C14.6667 3.57273 13.3833 2.93182 12.4848 3.60606',
      fill: '#FBBC04',
      key: 'itaat4'
    }
  ],
  [
    'path',
    {
      d: 'M4.36365 8.18182V4.24242L8.00001 6.9697L11.6364 4.24242V8.18182L8.00001 10.9091',
      fill: '#EA4335',
      key: 'vj6gpr'
    }
  ],
  [
    'path',
    {
      d: 'M1.33334 4.69697V5.90909L4.36365 8.18182V4.24243L3.51516 3.60606C2.61516 2.93182 1.33334 3.57273 1.33334 4.69697Z',
      fill: '#C5221F',
      key: 'c02ed0'
    }
  ]
];

/**
 * @component @name LogoGmail
 * @description Foamicon logo component with single color (currentColor), renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMjQyNDMgMTMuMzMzM0g0LjM2MzY1VjguMTgxODJMMS4zMzMzNCA1LjkwOTA5VjEyLjQyNDJDMS4zMzMzNCAxMi45MjczIDEuNzQwOTIgMTMuMzMzMyAyLjI0MjQzIDEzLjMzMzNaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTExLjYzNjQgMTMuMzMzM0gxMy43NTc2QzE0LjI2MDYgMTMuMzMzMyAxNC42NjY3IDEyLjkyNTggMTQuNjY2NyAxMi40MjQyVjUuOTA5MDlMMTEuNjM2NCA4LjE4MTgyIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTExLjYzNjQgNC4yNDI0M1Y4LjE4MTgyTDE0LjY2NjcgNS45MDkwOVY0LjY5Njk3QzE0LjY2NjcgMy41NzI3MyAxMy4zODMzIDIuOTMxODIgMTIuNDg0OCAzLjYwNjA2IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTQuMzYzNjUgOC4xODE4MlY0LjI0MjQyTDguMDAwMDEgNi45Njk3TDExLjYzNjQgNC4yNDI0MlY4LjE4MTgyTDguMDAwMDEgMTAuOTA5MSIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0xLjMzMzM0IDQuNjk2OTdWNS45MDkwOUw0LjM2MzY1IDguMTgxODJWNC4yNDI0M0wzLjUxNTE2IDMuNjA2MDZDMi42MTUxNiAyLjkzMTgyIDEuMzMzMzQgMy41NzI3MyAxLjMzMzM0IDQuNjk2OTdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/logos/logo-gmail
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Logo size (width and height)
 * @returns {React.ReactElement} SVG logo element
 */
export const LogoGmail = createFoamicon('LogoGmail', __iconNode);
