import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M15.0268 4.89488C14.8582 4.2802 14.3612 3.79617 13.7302 3.63189C12.5864 3.33334 7.99999 3.33334 7.99999 3.33334C7.99999 3.33334 3.4136 3.33334 2.26981 3.63189C1.63879 3.79617 1.14179 4.2802 0.973134 4.89488C0.666656 6.00893 0.666656 8.33334 0.666656 8.33334C0.666656 8.33334 0.666656 10.6577 0.973134 11.7719C1.14179 12.3865 1.63879 12.8705 2.26981 13.0349C3.4136 13.3333 7.99999 13.3333 7.99999 13.3333C7.99999 13.3333 12.5864 13.3333 13.7302 13.0349C14.3612 12.8705 14.8582 12.3865 15.0268 11.7719C15.3333 10.6577 15.3333 8.33334 15.3333 8.33334C15.3333 8.33334 15.3333 6.00893 15.0268 4.89488Z',
      fill: '#FF0302',
      key: 'hriguy'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 10.4437L10.3333 8.33344L6.5 6.22296V10.4437Z',
      fill: 'white',
      key: 'yt4j7o'
    }
  ]
];

/**
 * @component @name LogoYoutube
 * @description Foamicon logo component with single color (currentColor), renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjAyNjggNC44OTQ4OEMxNC44NTgyIDQuMjgwMiAxNC4zNjEyIDMuNzk2MTcgMTMuNzMwMiAzLjYzMTg5QzEyLjU4NjQgMy4zMzMzNCA3Ljk5OTk5IDMuMzMzMzQgNy45OTk5OSAzLjMzMzM0QzcuOTk5OTkgMy4zMzMzNCAzLjQxMzYgMy4zMzMzNCAyLjI2OTgxIDMuNjMxODlDMS42Mzg3OSAzLjc5NjE3IDEuMTQxNzkgNC4yODAyIDAuOTczMTM0IDQuODk0ODhDMC42NjY2NTYgNi4wMDg5MyAwLjY2NjY1NiA4LjMzMzM0IDAuNjY2NjU2IDguMzMzMzRDMC42NjY2NTYgOC4zMzMzNCAwLjY2NjY1NiAxMC42NTc3IDAuOTczMTM0IDExLjc3MTlDMS4xNDE3OSAxMi4zODY1IDEuNjM4NzkgMTIuODcwNSAyLjI2OTgxIDEzLjAzNDlDMy40MTM2IDEzLjMzMzMgNy45OTk5OSAxMy4zMzMzIDcuOTk5OTkgMTMuMzMzM0M3Ljk5OTk5IDEzLjMzMzMgMTIuNTg2NCAxMy4zMzMzIDEzLjczMDIgMTMuMDM0OUMxNC4zNjEyIDEyLjg3MDUgMTQuODU4MiAxMi4zODY1IDE1LjAyNjggMTEuNzcxOUMxNS4zMzMzIDEwLjY1NzcgMTUuMzMzMyA4LjMzMzM0IDE1LjMzMzMgOC4zMzMzNEMxNS4zMzMzIDguMzMzMzQgMTUuMzMzMyA2LjAwODkzIDE1LjAyNjggNC44OTQ4OFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNNi41IDEwLjQ0MzdMMTAuMzMzMyA4LjMzMzQ0TDYuNSA2LjIyMjk2VjEwLjQ0MzdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/logos/logo-youtube
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Logo size (width and height)
 * @returns {React.ReactElement} SVG logo element
 */
export const LogoYoutube = createFoamicon('LogoYoutube', __iconNode);
