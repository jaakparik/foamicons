import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.7324 10.7323L7.54589 14.3758C7.40773 14.5337 7.15063 14.3996 7.20117 14.1961L8.43749 9.24701C8.46872 9.12094 8.37312 8.99897 8.24316 8.99897H2.44042C2.26894 8.99869 2.17731 8.79715 2.29003 8.66792L5.26562 5.26562L10.7324 10.7323Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '2h7rep'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 14.5L1.5 1.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'f8k5un'
    }
  ],
  [
    'path',
    {
      d: 'M11.8933 9.13281L13.4696 7.3315C13.5825 7.20225 13.4908 6.99969 13.3192 6.99946H10.4175L9.8 7M7.79529 4.85633L8.55844 1.80318C8.60918 1.59962 8.35291 1.46565 8.21469 1.62349L6.5 3.5829',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'a4h9oi'
    }
  ],
  [
    'path',
    {
      d: 'M10.5116 10.7124L7.30551 14.3764C7.16734 14.5343 6.91025 14.4002 6.96078 14.1968L8.19751 9.24798C8.22905 9.12176 8.13358 8.99949 8.00348 8.99949H2.20004C2.02855 8.99921 1.93692 8.79768 2.04965 8.66844L5.14155 5.13525',
      stroke: 'currentColor',
      key: 'mmspge'
    }
  ]
];

/**
 * @component @name ZapOffDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjczMjQgMTAuNzMyM0w3LjU0NTg5IDE0LjM3NThDNy40MDc3MyAxNC41MzM3IDcuMTUwNjMgMTQuMzk5NiA3LjIwMTE3IDE0LjE5NjFMOC40Mzc0OSA5LjI0NzAxQzguNDY4NzIgOS4xMjA5NCA4LjM3MzEyIDguOTk4OTcgOC4yNDMxNiA4Ljk5ODk3SDIuNDQwNDJDMi4yNjg5NCA4Ljk5ODY5IDIuMTc3MzEgOC43OTcxNSAyLjI5MDAzIDguNjY3OTJMNS4yNjU2MiA1LjI2NTYyTDEwLjczMjQgMTAuNzMyM1oiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxwYXRoIGQ9Ik0xNC41IDE0LjVMMS41IDEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuODkzMyA5LjEzMjgxTDEzLjQ2OTYgNy4zMzE1QzEzLjU4MjUgNy4yMDIyNSAxMy40OTA4IDYuOTk5NjkgMTMuMzE5MiA2Ljk5OTQ2SDEwLjQxNzVMOS44IDdNNy43OTUyOSA0Ljg1NjMzTDguNTU4NDQgMS44MDMxOEM4LjYwOTE4IDEuNTk5NjIgOC4zNTI5MSAxLjQ2NTY1IDguMjE0NjkgMS42MjM0OUw2LjUgMy41ODI5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41MTE2IDEwLjcxMjRMNy4zMDU1MSAxNC4zNzY0QzcuMTY3MzQgMTQuNTM0MyA2LjkxMDI1IDE0LjQwMDIgNi45NjA3OCAxNC4xOTY4TDguMTk3NTEgOS4yNDc5OEM4LjIyOTA1IDkuMTIxNzYgOC4xMzM1OCA4Ljk5OTQ5IDguMDAzNDggOC45OTk0OUgyLjIwMDA0QzIuMDI4NTUgOC45OTkyMSAxLjkzNjkyIDguNzk3NjggMi4wNDk2NSA4LjY2ODQ0TDUuMTQxNTUgNS4xMzUyNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/zap-off-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ZapOffDuotone = createFoamicon('ZapOffDuotone', __iconNode);
