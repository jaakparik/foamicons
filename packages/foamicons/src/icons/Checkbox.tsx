import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.6719 5.76563L7.51604 10.1049C7.33533 10.3534 6.97537 10.3816 6.75812 10.1644L5.42188 8.82812',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'z3wv5x'
    }
  ],
  [
    'path',
    {
      d: 'M1.94575 2.35123C1.97696 2.13988 2.13988 1.97696 2.35123 1.94575C3.22791 1.81629 5.61396 1.5 8 1.5C10.386 1.5 12.7721 1.81629 13.6488 1.94575C13.8601 1.97696 14.023 2.13988 14.0543 2.35123C14.1837 3.22791 14.5 5.61396 14.5 8C14.5 10.386 14.1837 12.7721 14.0543 13.6488C14.023 13.8601 13.8601 14.023 13.6488 14.0543C12.7721 14.1837 10.386 14.5 8 14.5C5.61396 14.5 3.22791 14.1837 2.35123 14.0543C2.13988 14.023 1.97696 13.8601 1.94575 13.6488C1.81629 12.7721 1.5 10.386 1.5 8C1.5 5.61396 1.81629 3.22791 1.94575 2.35123Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rxt9li'
    }
  ]
];

/**
 * @component @name Checkbox
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjY3MTkgNS43NjU2M0w3LjUxNjA0IDEwLjEwNDlDNy4zMzUzMyAxMC4zNTM0IDYuOTc1MzcgMTAuMzgxNiA2Ljc1ODEyIDEwLjE2NDRMNS40MjE4OCA4LjgyODEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xLjk0NTc1IDIuMzUxMjNDMS45NzY5NiAyLjEzOTg4IDIuMTM5ODggMS45NzY5NiAyLjM1MTIzIDEuOTQ1NzVDMy4yMjc5MSAxLjgxNjI5IDUuNjEzOTYgMS41IDggMS41QzEwLjM4NiAxLjUgMTIuNzcyMSAxLjgxNjI5IDEzLjY0ODggMS45NDU3NUMxMy44NjAxIDEuOTc2OTYgMTQuMDIzIDIuMTM5ODggMTQuMDU0MyAyLjM1MTIzQzE0LjE4MzcgMy4yMjc5MSAxNC41IDUuNjEzOTYgMTQuNSA4QzE0LjUgMTAuMzg2IDE0LjE4MzcgMTIuNzcyMSAxNC4wNTQzIDEzLjY0ODhDMTQuMDIzIDEzLjg2MDEgMTMuODYwMSAxNC4wMjMgMTMuNjQ4OCAxNC4wNTQzQzEyLjc3MjEgMTQuMTgzNyAxMC4zODYgMTQuNSA4IDE0LjVDNS42MTM5NiAxNC41IDMuMjI3OTEgMTQuMTgzNyAyLjM1MTIzIDE0LjA1NDNDMi4xMzk4OCAxNC4wMjMgMS45NzY5NiAxMy44NjAxIDEuOTQ1NzUgMTMuNjQ4OEMxLjgxNjI5IDEyLjc3MjEgMS41IDEwLjM4NiAxLjUgOEMxLjUgNS42MTM5NiAxLjgxNjI5IDMuMjI3OTEgMS45NDU3NSAyLjM1MTIzWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/checkbox
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Checkbox = createFoamicon('Checkbox', __iconNode);
