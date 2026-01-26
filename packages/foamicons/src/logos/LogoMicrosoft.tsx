import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.33334 1.33333H1.33334V7.33333H7.33334V1.33333Z',
      fill: '#F25022',
      key: '3lwc70'
    }
  ],
  [
    'path',
    {
      d: 'M7.33334 8.66667H1.33334V14.6667H7.33334V8.66667Z',
      fill: '#00A4EF',
      key: 'y8kglk'
    }
  ],
  [
    'path',
    {
      d: 'M14.6667 1.33333H8.66666V7.33333H14.6667V1.33333Z',
      fill: '#7FBA00',
      key: 'uyjrl8'
    }
  ],
  [
    'path',
    {
      d: 'M14.6667 8.66667H8.66666V14.6667H14.6667V8.66667Z',
      fill: '#FFB900',
      key: '8eq44k'
    }
  ]
];

/**
 * @component @name LogoMicrosoft
 * @description Foamicon logo component with single color (currentColor), renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzMzMzQgMS4zMzMzM0gxLjMzMzM0VjcuMzMzMzNINy4zMzMzNFYxLjMzMzMzWiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik03LjMzMzM0IDguNjY2NjdIMS4zMzMzNFYxNC42NjY3SDcuMzMzMzRWOC42NjY2N1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNMTQuNjY2NyAxLjMzMzMzSDguNjY2NjZWNy4zMzMzM0gxNC42NjY3VjEuMzMzMzNaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTE0LjY2NjcgOC42NjY2N0g4LjY2NjY2VjE0LjY2NjdIMTQuNjY2N1Y4LjY2NjY3WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/logos/logo-microsoft
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Logo size (width and height)
 * @returns {React.ReactElement} SVG logo element
 */
export const LogoMicrosoft = createFoamicon('LogoMicrosoft', __iconNode);
