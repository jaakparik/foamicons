import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3 1.2C3 1.08954 3.08954 1 3.2 1H12.8C12.9105 1 13 1.08954 13 1.2V14.8C13 14.9105 12.9105 15 12.8 15H3.2C3.08954 15 3 14.9105 3 14.8V1.2Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      key: 'eiaw6b'
    }
  ],
  [
    'ellipse',
    {
      cx: '0.5',
      cy: '-0.5',
      rx: '0.5',
      ry: '-0.5',
      transform: 'matrix(-4.37114e-08 1 1 4.37114e-08 10.5 3.5)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'thwkpj'
    }
  ],
  [
    'ellipse',
    {
      cx: '0.5',
      cy: '-0.5',
      rx: '0.5',
      ry: '-0.5',
      transform: 'matrix(-4.37114e-08 1 1 4.37114e-08 10.5 6.5)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rdyg97'
    }
  ],
  [
    'ellipse',
    {
      cx: '0.5',
      cy: '-0.5',
      rx: '0.5',
      ry: '-0.5',
      transform: 'matrix(-4.37114e-08 1 1 4.37114e-08 10.5 9.5)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'd8pf8t'
    }
  ],
  [
    'ellipse',
    {
      cx: '0.5',
      cy: '-0.5',
      rx: '0.5',
      ry: '-0.5',
      transform: 'matrix(-4.37114e-08 1 1 4.37114e-08 6.5 3.5)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mmnb9'
    }
  ],
  [
    'ellipse',
    {
      cx: '0.5',
      cy: '-0.5',
      rx: '0.5',
      ry: '-0.5',
      transform: 'matrix(-4.37114e-08 1 1 4.37114e-08 6.5 6.5)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'dimdp5'
    }
  ],
  [
    'ellipse',
    {
      cx: '0.5',
      cy: '-0.5',
      rx: '0.5',
      ry: '-0.5',
      transform: 'matrix(-4.37114e-08 1 1 4.37114e-08 6.5 9.5)',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rnvepj'
    }
  ],
  [
    'rect',
    {
      x: '7.5',
      y: '11.5',
      width: '1',
      height: '2.5',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '34cvgb'
    }
  ]
];

/**
 * @component @name OfficeFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMS4yQzMgMS4wODk1NCAzLjA4OTU0IDEgMy4yIDFIMTIuOEMxMi45MTA1IDEgMTMgMS4wODk1NCAxMyAxLjJWMTQuOEMxMyAxNC45MTA1IDEyLjkxMDUgMTUgMTIuOCAxNUgzLjJDMy4wODk1NCAxNSAzIDE0LjkxMDUgMyAxNC44VjEuMloiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPGVsbGlwc2UgY3g9IjAuNSIgY3k9Ii0wLjUiIHJ4PSIwLjUiIHJ5PSItMC41IiB0cmFuc2Zvcm09Im1hdHJpeCgtNC4zNzExNGUtMDggMSAxIDQuMzcxMTRlLTA4IDEwLjUgMy41KSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxlbGxpcHNlIGN4PSIwLjUiIGN5PSItMC41IiByeD0iMC41IiByeT0iLTAuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTQuMzcxMTRlLTA4IDEgMSA0LjM3MTE0ZS0wOCAxMC41IDYuNSkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZWxsaXBzZSBjeD0iMC41IiBjeT0iLTAuNSIgcng9IjAuNSIgcnk9Ii0wLjUiIHRyYW5zZm9ybT0ibWF0cml4KC00LjM3MTE0ZS0wOCAxIDEgNC4zNzExNGUtMDggMTAuNSA5LjUpIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGVsbGlwc2UgY3g9IjAuNSIgY3k9Ii0wLjUiIHJ4PSIwLjUiIHJ5PSItMC41IiB0cmFuc2Zvcm09Im1hdHJpeCgtNC4zNzExNGUtMDggMSAxIDQuMzcxMTRlLTA4IDYuNSAzLjUpIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGVsbGlwc2UgY3g9IjAuNSIgY3k9Ii0wLjUiIHJ4PSIwLjUiIHJ5PSItMC41IiB0cmFuc2Zvcm09Im1hdHJpeCgtNC4zNzExNGUtMDggMSAxIDQuMzcxMTRlLTA4IDYuNSA2LjUpIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGVsbGlwc2UgY3g9IjAuNSIgY3k9Ii0wLjUiIHJ4PSIwLjUiIHJ5PSItMC41IiB0cmFuc2Zvcm09Im1hdHJpeCgtNC4zNzExNGUtMDggMSAxIDQuMzcxMTRlLTA4IDYuNSA5LjUpIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHJlY3QgeD0iNy41IiB5PSIxMS41IiB3aWR0aD0iMSIgaGVpZ2h0PSIyLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/office-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const OfficeFill = createFoamicon('OfficeFill', __iconNode);
