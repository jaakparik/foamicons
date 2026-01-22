import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M1.94575 2.35123C1.97696 2.13988 2.13988 1.97696 2.35123 1.94575C3.22791 1.81629 5.61396 1.5 8 1.5C10.386 1.5 12.7721 1.81629 13.6488 1.94575C13.8601 1.97696 14.023 2.13988 14.0543 2.35123C14.1837 3.22791 14.5 5.61396 14.5 8C14.5 10.386 14.1837 12.7721 14.0543 13.6488C14.023 13.8601 13.8601 14.023 13.6488 14.0543C12.7721 14.1837 10.386 14.5 8 14.5C5.61396 14.5 3.22791 14.1837 2.35123 14.0543C2.13988 14.023 1.97696 13.8601 1.94575 13.6488C1.81629 12.7721 1.5 10.386 1.5 8C1.5 5.61396 1.81629 3.22791 1.94575 2.35123Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vrncr4'
    }
  ],
  [
    'path',
    {
      d: 'M10.6719 5.76563L7.51604 10.1049C7.33533 10.3534 6.97537 10.3816 6.75812 10.1644L5.42188 8.82812',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'z5yrqx'
    }
  ]
];

/**
 * @component @name CheckboxFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuOTQ1NzUgMi4zNTEyM0MxLjk3Njk2IDIuMTM5ODggMi4xMzk4OCAxLjk3Njk2IDIuMzUxMjMgMS45NDU3NUMzLjIyNzkxIDEuODE2MjkgNS42MTM5NiAxLjUgOCAxLjVDMTAuMzg2IDEuNSAxMi43NzIxIDEuODE2MjkgMTMuNjQ4OCAxLjk0NTc1QzEzLjg2MDEgMS45NzY5NiAxNC4wMjMgMi4xMzk4OCAxNC4wNTQzIDIuMzUxMjNDMTQuMTgzNyAzLjIyNzkxIDE0LjUgNS42MTM5NiAxNC41IDhDMTQuNSAxMC4zODYgMTQuMTgzNyAxMi43NzIxIDE0LjA1NDMgMTMuNjQ4OEMxNC4wMjMgMTMuODYwMSAxMy44NjAxIDE0LjAyMyAxMy42NDg4IDE0LjA1NDNDMTIuNzcyMSAxNC4xODM3IDEwLjM4NiAxNC41IDggMTQuNUM1LjYxMzk2IDE0LjUgMy4yMjc5MSAxNC4xODM3IDIuMzUxMjMgMTQuMDU0M0MyLjEzOTg4IDE0LjAyMyAxLjk3Njk2IDEzLjg2MDEgMS45NDU3NSAxMy42NDg4QzEuODE2MjkgMTIuNzcyMSAxLjUgMTAuMzg2IDEuNSA4QzEuNSA1LjYxMzk2IDEuODE2MjkgMy4yMjc5MSAxLjk0NTc1IDIuMzUxMjNaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjY3MTkgNS43NjU2M0w3LjUxNjA0IDEwLjEwNDlDNy4zMzUzMyAxMC4zNTM0IDYuOTc1MzcgMTAuMzgxNiA2Ljc1ODEyIDEwLjE2NDRMNS40MjE4OCA4LjgyODEyIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/checkbox-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CheckboxFill = createFoamicon('CheckboxFill', __iconNode);
