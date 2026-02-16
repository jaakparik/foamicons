import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M1.5 5.64068C1.5 4.90463 2.03426 4.27897 2.76576 4.19724C3.62267 4.10149 4.81134 4 6 4C7.18866 4 8.37733 4.10149 9.23424 4.19724C9.96574 4.27897 10.5 4.90463 10.5 5.64068V8V10.3593C10.5 11.0954 9.96574 11.721 9.23424 11.8028C8.37733 11.8985 7.18866 12 6 12C4.81134 12 3.62267 11.8985 2.76576 11.8028C2.03426 11.721 1.5 11.0954 1.5 10.3593V5.64068Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3zs53a'
    }
  ],
  [
    'path',
    {
      d: 'M14.4824 10.1856V5.79843C14.4824 5.65613 14.338 5.55935 14.2064 5.61344L10.624 7.08577C10.549 7.11659 10.5 7.18966 10.5 7.27075V8.50949C10.5 8.58712 10.5449 8.65774 10.6152 8.69064L14.1977 10.3668C14.3303 10.4288 14.4824 10.332 14.4824 10.1856Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nbs1qh'
    }
  ]
];

/**
 * @component @name Video
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSA1LjY0MDY4QzEuNSA0LjkwNDYzIDIuMDM0MjYgNC4yNzg5NyAyLjc2NTc2IDQuMTk3MjRDMy42MjI2NyA0LjEwMTQ5IDQuODExMzQgNCA2IDRDNy4xODg2NiA0IDguMzc3MzMgNC4xMDE0OSA5LjIzNDI0IDQuMTk3MjRDOS45NjU3NCA0LjI3ODk3IDEwLjUgNC45MDQ2MyAxMC41IDUuNjQwNjhWOFYxMC4zNTkzQzEwLjUgMTEuMDk1NCA5Ljk2NTc0IDExLjcyMSA5LjIzNDI0IDExLjgwMjhDOC4zNzczMyAxMS44OTg1IDcuMTg4NjYgMTIgNiAxMkM0LjgxMTM0IDEyIDMuNjIyNjcgMTEuODk4NSAyLjc2NTc2IDExLjgwMjhDMi4wMzQyNiAxMS43MjEgMS41IDExLjA5NTQgMS41IDEwLjM1OTNWNS42NDA2OFoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0LjQ4MjQgMTAuMTg1NlY1Ljc5ODQzQzE0LjQ4MjQgNS42NTYxMyAxNC4zMzggNS41NTkzNSAxNC4yMDY0IDUuNjEzNDRMMTAuNjI0IDcuMDg1NzdDMTAuNTQ5IDcuMTE2NTkgMTAuNSA3LjE4OTY2IDEwLjUgNy4yNzA3NVY4LjUwOTQ5QzEwLjUgOC41ODcxMiAxMC41NDQ5IDguNjU3NzQgMTAuNjE1MiA4LjY5MDY0TDE0LjE5NzcgMTAuMzY2OEMxNC4zMzAzIDEwLjQyODggMTQuNDgyNCAxMC4zMzIgMTQuNDgyNCAxMC4xODU2WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/video
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Video = createFoamicon('Video', __iconNode);
