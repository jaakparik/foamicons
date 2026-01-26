import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3 2C3 1.44772 3.44772 1 4 1H9L11 3L13 5V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V2Z',
      fill: '#DEE2E8',
      key: 'npk2nj'
    }
  ],
  [
    'path',
    {
      d: 'M3 8H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V8Z',
      fill: '#EF4444',
      key: '79xryl'
    }
  ],
  [
    'path',
    {
      d: 'M9 1L11 3L13 5H10C9.44772 5 9 4.55228 9 4V1Z',
      fill: '#8B94A2',
      key: 'w65lhr'
    }
  ]
];

/**
 * @component @name LogoFilePdf
 * @description Foamicon logo component with single color (currentColor), renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMkMzIDEuNDQ3NzIgMy40NDc3MiAxIDQgMUg5TDExIDNMMTMgNVYxNEMxMyAxNC41NTIzIDEyLjU1MjMgMTUgMTIgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0VjJaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTMgOEgxM1YxNEMxMyAxNC41NTIzIDEyLjU1MjMgMTUgMTIgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0VjhaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTkgMUwxMSAzTDEzIDVIMTBDOS40NDc3MiA1IDkgNC41NTIyOCA5IDRWMVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/logos/logo-file-pdf
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Logo size (width and height)
 * @returns {React.ReactElement} SVG logo element
 */
export const LogoFilePdf = createFoamicon('LogoFilePdf', __iconNode);
