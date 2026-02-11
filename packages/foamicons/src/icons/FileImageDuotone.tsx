import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3.02051 10.9764L4.13743 9.69196C4.88976 8.82678 6.25159 8.8872 6.92435 9.8156L7.07219 10.0196C7.48513 10.5895 8.24319 10.7881 8.88253 10.494C9.51014 10.2053 10.254 10.391 10.6723 10.9408L12.7471 13.6677C12.9091 13.8806 12.9805 14.1488 12.9457 14.4141C12.9457 14.4141 12.5523 14.6528 12.4628 14.6905C11.4685 14.8235 9.84292 15 8.21739 15C6.73428 15 5.25117 14.8531 4.24743 14.7263C3.52409 14.6349 3 14.0133 3 13.2842V11.0312C3 11.0111 3.00728 10.9916 3.02051 10.9764Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'he7dfg'
    }
  ],
  [
    'path',
    {
      d: 'M13 14L10.4419 10.638C10.1583 10.2652 9.65381 10.1392 9.22821 10.335L8.5285 10.6569C8.09494 10.8563 7.58088 10.7216 7.30085 10.3352L6.3472 9.01913C5.96957 8.498 5.20514 8.46409 4.78284 8.94973L3.02051 10.9764C3.00728 10.9916 3 11.0111 3 11.0312',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mecpkg'
    }
  ],
  [
    'path',
    {
      d: 'M13 6V4.5L9.5 1H8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yt83de'
    }
  ],
  [
    'path',
    {
      d: 'M3 2C3 1.44772 3.44772 1 4 1H8C8.55228 1 9 1.44772 9 2V4C9 4.55228 9.44772 5 10 5H12C12.5523 5 13 5.44772 13 6V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V2Z',
      stroke: 'currentColor',
      key: 'pevcql'
    }
  ],
  [
    'circle',
    {
      cx: '5.75',
      cy: '4.75',
      r: '0.75',
      fill: 'currentColor',
      key: 'ruulkb'
    }
  ]
];

/**
 * @component @name FileImageDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMDIwNTEgMTAuOTc2NEw0LjEzNzQzIDkuNjkxOTZDNC44ODk3NiA4LjgyNjc4IDYuMjUxNTkgOC44ODcyIDYuOTI0MzUgOS44MTU2TDcuMDcyMTkgMTAuMDE5NkM3LjQ4NTEzIDEwLjU4OTUgOC4yNDMxOSAxMC43ODgxIDguODgyNTMgMTAuNDk0QzkuNTEwMTQgMTAuMjA1MyAxMC4yNTQgMTAuMzkxIDEwLjY3MjMgMTAuOTQwOEwxMi43NDcxIDEzLjY2NzdDMTIuOTA5MSAxMy44ODA2IDEyLjk4MDUgMTQuMTQ4OCAxMi45NDU3IDE0LjQxNDFDMTIuOTQ1NyAxNC40MTQxIDEyLjU1MjMgMTQuNjUyOCAxMi40NjI4IDE0LjY5MDVDMTEuNDY4NSAxNC44MjM1IDkuODQyOTIgMTUgOC4yMTczOSAxNUM2LjczNDI4IDE1IDUuMjUxMTcgMTQuODUzMSA0LjI0NzQzIDE0LjcyNjNDMy41MjQwOSAxNC42MzQ5IDMgMTQuMDEzMyAzIDEzLjI4NDJWMTEuMDMxMkMzIDExLjAxMTEgMy4wMDcyOCAxMC45OTE2IDMuMDIwNTEgMTAuOTc2NFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxwYXRoIGQ9Ik0xMyAxNEwxMC40NDE5IDEwLjYzOEMxMC4xNTgzIDEwLjI2NTIgOS42NTM4MSAxMC4xMzkyIDkuMjI4MjEgMTAuMzM1TDguNTI4NSAxMC42NTY5QzguMDk0OTQgMTAuODU2MyA3LjU4MDg4IDEwLjcyMTYgNy4zMDA4NSAxMC4zMzUyTDYuMzQ3MiA5LjAxOTEzQzUuOTY5NTcgOC40OTggNS4yMDUxNCA4LjQ2NDA5IDQuNzgyODQgOC45NDk3M0wzLjAyMDUxIDEwLjk3NjRDMy4wMDcyOCAxMC45OTE2IDMgMTEuMDExMSAzIDExLjAzMTIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDZWNC41TDkuNSAxSDgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgMkMzIDEuNDQ3NzIgMy40NDc3MiAxIDQgMUg4QzguNTUyMjggMSA5IDEuNDQ3NzIgOSAyVjRDOSA0LjU1MjI4IDkuNDQ3NzIgNSAxMCA1SDEyQzEyLjU1MjMgNSAxMyA1LjQ0NzcyIDEzIDZWMTRDMTMgMTQuNTUyMyAxMi41NTIzIDE1IDEyIDE1SDRDMy40NDc3MiAxNSAzIDE0LjU1MjMgMyAxNFYyWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPGNpcmNsZSBjeD0iNS43NSIgY3k9IjQuNzUiIHI9IjAuNzUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/file-image-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FileImageDuotone = createFoamicon('FileImageDuotone', __iconNode);
