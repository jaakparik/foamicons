import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.33301 14.667H1.33301V8.66699H7.33301V14.667ZM14.667 8.66699V14.667H8.66699V8.66699H14.667ZM7.33301 7.33398H1.33301V1.33301H7.33301V7.33398ZM14.667 7.33398H8.66699V1.33301H14.667V7.33398Z',
      fill: 'currentColor',
      key: 'xe33mm'
    }
  ]
];

/**
 * @component @name LogoMicrosoftFill
 * @description Foamicon logo component with single color (currentColor), renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzMzMDEgMTQuNjY3SDEuMzMzMDFWOC42NjY5OUg3LjMzMzAxVjE0LjY2N1pNMTQuNjY3IDguNjY2OTlWMTQuNjY3SDguNjY2OTlWOC42NjY5OUgxNC42NjdaTTcuMzMzMDEgNy4zMzM5OEgxLjMzMzAxVjEuMzMzMDFINy4zMzMwMVY3LjMzMzk4Wk0xNC42NjcgNy4zMzM5OEg4LjY2Njk5VjEuMzMzMDFIMTQuNjY3VjcuMzMzOThaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/logos/logo-microsoft-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Logo size (width and height)
 * @returns {React.ReactElement} SVG logo element
 */
export const LogoMicrosoftFill = createFoamicon('LogoMicrosoftFill', __iconNode);
