import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12 2.66602C12.3536 2.66602 12.6933 2.80659 12.9434 3.05664C13.1934 3.30669 13.333 3.64639 13.333 4V13.333C13.333 13.6866 13.1934 14.0263 12.9434 14.2764C12.6933 14.5264 12.3536 14.667 12 14.667H4C3.64659 14.667 3.3076 14.5262 3.05762 14.2764C2.80757 14.0263 2.66699 13.6866 2.66699 13.333V4C2.66699 3.64638 2.80757 3.30669 3.05762 3.05664C3.3076 2.80684 3.64659 2.66605 4 2.66602H5.33301V3.33301C5.33301 3.7012 5.63181 4 6 4H10C10.3681 3.99993 10.667 3.70116 10.667 3.33301V2.66602H12Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'fn5nuk'
    }
  ],
  [
    'path',
    {
      d: 'M9.99987 1.3335H5.99987C5.63168 1.3335 5.33321 1.63197 5.33321 2.00016V3.3335C5.33321 3.70169 5.63168 4.00016 5.99987 4.00016H9.99987C10.3681 4.00016 10.6665 3.70169 10.6665 3.3335V2.00016C10.6665 1.63197 10.3681 1.3335 9.99987 1.3335Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '39ojxu'
    }
  ],
  [
    'path',
    {
      d: 'M10.6668 2.6665H12.0001C12.3537 2.6665 12.6929 2.80698 12.9429 3.05703C13.193 3.30708 13.3335 3.64622 13.3335 3.99984V13.3332C13.3335 13.6868 13.193 14.0259 12.9429 14.276C12.6929 14.526 12.3537 14.6665 12.0001 14.6665H4.00013C3.64651 14.6665 3.30737 14.526 3.05732 14.276C2.80727 14.0259 2.66679 13.6868 2.66679 13.3332V3.99984C2.66679 3.64622 2.80727 3.30708 3.05732 3.05703C3.30737 2.80698 3.64651 2.6665 4.00013 2.6665H5.33346',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '9hmudr'
    }
  ],
  [
    'path',
    {
      d: 'M8 7.3335H10.6667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ips4x0'
    }
  ],
  [
    'path',
    {
      d: 'M8 10.6665H10.6667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '22wbc'
    }
  ],
  [
    'path',
    {
      d: 'M5.33321 7.3335H5.34029',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6mn32q'
    }
  ],
  [
    'path',
    {
      d: 'M5.33321 10.6665H5.34029',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'qfwq2k'
    }
  ]
];

/**
 * @component @name ClipboardListDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIuNjY2MDJDMTIuMzUzNiAyLjY2NjAyIDEyLjY5MzMgMi44MDY1OSAxMi45NDM0IDMuMDU2NjRDMTMuMTkzNCAzLjMwNjY5IDEzLjMzMyAzLjY0NjM5IDEzLjMzMyA0VjEzLjMzM0MxMy4zMzMgMTMuNjg2NiAxMy4xOTM0IDE0LjAyNjMgMTIuOTQzNCAxNC4yNzY0QzEyLjY5MzMgMTQuNTI2NCAxMi4zNTM2IDE0LjY2NyAxMiAxNC42NjdINEMzLjY0NjU5IDE0LjY2NyAzLjMwNzYgMTQuNTI2MiAzLjA1NzYyIDE0LjI3NjRDMi44MDc1NyAxNC4wMjYzIDIuNjY2OTkgMTMuNjg2NiAyLjY2Njk5IDEzLjMzM1Y0QzIuNjY2OTkgMy42NDYzOCAyLjgwNzU3IDMuMzA2NjkgMy4wNTc2MiAzLjA1NjY0QzMuMzA3NiAyLjgwNjg0IDMuNjQ2NTkgMi42NjYwNSA0IDIuNjY2MDJINS4zMzMwMVYzLjMzMzAxQzUuMzMzMDEgMy43MDEyIDUuNjMxODEgNCA2IDRIMTBDMTAuMzY4MSAzLjk5OTkzIDEwLjY2NyAzLjcwMTE2IDEwLjY2NyAzLjMzMzAxVjIuNjY2MDJIMTJaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgo8cGF0aCBkPSJNOS45OTk4NyAxLjMzMzVINS45OTk4N0M1LjYzMTY4IDEuMzMzNSA1LjMzMzIxIDEuNjMxOTcgNS4zMzMyMSAyLjAwMDE2VjMuMzMzNUM1LjMzMzIxIDMuNzAxNjkgNS42MzE2OCA0LjAwMDE2IDUuOTk5ODcgNC4wMDAxNkg5Ljk5OTg3QzEwLjM2ODEgNC4wMDAxNiAxMC42NjY1IDMuNzAxNjkgMTAuNjY2NSAzLjMzMzVWMi4wMDAxNkMxMC42NjY1IDEuNjMxOTcgMTAuMzY4MSAxLjMzMzUgOS45OTk4NyAxLjMzMzVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC42NjY4IDIuNjY2NUgxMi4wMDAxQzEyLjM1MzcgMi42NjY1IDEyLjY5MjkgMi44MDY5OCAxMi45NDI5IDMuMDU3MDNDMTMuMTkzIDMuMzA3MDggMTMuMzMzNSAzLjY0NjIyIDEzLjMzMzUgMy45OTk4NFYxMy4zMzMyQzEzLjMzMzUgMTMuNjg2OCAxMy4xOTMgMTQuMDI1OSAxMi45NDI5IDE0LjI3NkMxMi42OTI5IDE0LjUyNiAxMi4zNTM3IDE0LjY2NjUgMTIuMDAwMSAxNC42NjY1SDQuMDAwMTNDMy42NDY1MSAxNC42NjY1IDMuMzA3MzcgMTQuNTI2IDMuMDU3MzIgMTQuMjc2QzIuODA3MjcgMTQuMDI1OSAyLjY2Njc5IDEzLjY4NjggMi42NjY3OSAxMy4zMzMyVjMuOTk5ODRDMi42NjY3OSAzLjY0NjIyIDIuODA3MjcgMy4zMDcwOCAzLjA1NzMyIDMuMDU3MDNDMy4zMDczNyAyLjgwNjk4IDMuNjQ2NTEgMi42NjY1IDQuMDAwMTMgMi42NjY1SDUuMzMzNDYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTggNy4zMzM1SDEwLjY2NjciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTggMTAuNjY2NUgxMC42NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjMzMzIxIDcuMzMzNUg1LjM0MDI5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjMzMzIxIDEwLjY2NjVINS4zNDAyOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/clipboard-list-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ClipboardListDuotone = createFoamicon('ClipboardListDuotone', __iconNode);
