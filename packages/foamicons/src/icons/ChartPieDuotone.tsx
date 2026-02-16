import { createFoamicon } from '../createFoamicon';
import type { IconNode } from '../types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.584 11C10.8124 12.7659 9.05032 14 7 14C4.23858 14 2 11.7614 2 8.99997C2 6.94965 3.2341 5.18757 5 4.41602',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'utvvev'
    }
  ],
  [
    'path',
    {
      d: 'M7 2.19775C7 2.08729 7.09008 1.99746 7.20049 2.00057C10.9072 2.10482 13.8929 5.09058 13.9972 8.79726C14.0003 8.90767 13.9105 8.99775 13.8 8.99775H7.2C7.08954 8.99775 7 8.90821 7 8.79775V2.19775Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '7ojto3'
    }
  ],
  [
    'path',
    {
      d: 'M13.9972 8.79726L14.497 8.7832L13.9972 8.79726ZM7.20049 2.00057L7.18644 2.50037C10.628 2.59716 13.4006 5.36976 13.4974 8.81131L13.9972 8.79726L14.497 8.7832C14.3853 4.81141 11.1863 1.61247 7.21455 1.50076L7.20049 2.00057ZM13.8 8.99775V8.49775H7.2V8.99775V9.49775H13.8V8.99775ZM7 8.79775H7.5V2.19775H7H6.5V8.79775H7ZM7.2 8.99775V8.49775C7.36569 8.49775 7.5 8.63206 7.5 8.79775H7H6.5C6.5 9.18435 6.8134 9.49775 7.2 9.49775V8.99775ZM13.9972 8.79726L13.4974 8.81131C13.4924 8.63267 13.6364 8.49775 13.8 8.49775V8.99775V9.49775C14.1845 9.49775 14.5082 9.18267 14.497 8.7832L13.9972 8.79726ZM7.20049 2.00057L7.21455 1.50076C6.81508 1.48953 6.5 1.81323 6.5 2.19775H7H7.5C7.5 2.36136 7.36508 2.50539 7.18644 2.50037L7.20049 2.00057Z',
      fill: 'currentColor',
      key: '8w6hcr'
    }
  ]
];

/**
 * @component @name ChartPieDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU4NCAxMUMxMC44MTI0IDEyLjc2NTkgOS4wNTAzMiAxNCA3IDE0QzQuMjM4NTggMTQgMiAxMS43NjE0IDIgOC45OTk5N0MyIDYuOTQ5NjUgMy4yMzQxIDUuMTg3NTcgNSA0LjQxNjAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDIuMTk3NzVDNyAyLjA4NzI5IDcuMDkwMDggMS45OTc0NiA3LjIwMDQ5IDIuMDAwNTdDMTAuOTA3MiAyLjEwNDgyIDEzLjg5MjkgNS4wOTA1OCAxMy45OTcyIDguNzk3MjZDMTQuMDAwMyA4LjkwNzY3IDEzLjkxMDUgOC45OTc3NSAxMy44IDguOTk3NzVINy4yQzcuMDg5NTQgOC45OTc3NSA3IDguOTA4MjEgNyA4Ljc5Nzc1VjIuMTk3NzVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgo8cGF0aCBkPSJNMTMuOTk3MiA4Ljc5NzI2TDE0LjQ5NyA4Ljc4MzJMMTMuOTk3MiA4Ljc5NzI2Wk03LjIwMDQ5IDIuMDAwNTdMNy4xODY0NCAyLjUwMDM3QzEwLjYyOCAyLjU5NzE2IDEzLjQwMDYgNS4zNjk3NiAxMy40OTc0IDguODExMzFMMTMuOTk3MiA4Ljc5NzI2TDE0LjQ5NyA4Ljc4MzJDMTQuMzg1MyA0LjgxMTQxIDExLjE4NjMgMS42MTI0NyA3LjIxNDU1IDEuNTAwNzZMNy4yMDA0OSAyLjAwMDU3Wk0xMy44IDguOTk3NzVWOC40OTc3NUg3LjJWOC45OTc3NVY5LjQ5Nzc1SDEzLjhWOC45OTc3NVpNNyA4Ljc5Nzc1SDcuNVYyLjE5Nzc1SDdINi41VjguNzk3NzVIN1pNNy4yIDguOTk3NzVWOC40OTc3NUM3LjM2NTY5IDguNDk3NzUgNy41IDguNjMyMDYgNy41IDguNzk3NzVIN0g2LjVDNi41IDkuMTg0MzUgNi44MTM0IDkuNDk3NzUgNy4yIDkuNDk3NzVWOC45OTc3NVpNMTMuOTk3MiA4Ljc5NzI2TDEzLjQ5NzQgOC44MTEzMUMxMy40OTI0IDguNjMyNjcgMTMuNjM2NCA4LjQ5Nzc1IDEzLjggOC40OTc3NVY4Ljk5Nzc1VjkuNDk3NzVDMTQuMTg0NSA5LjQ5Nzc1IDE0LjUwODIgOS4xODI2NyAxNC40OTcgOC43ODMyTDEzLjk5NzIgOC43OTcyNlpNNy4yMDA0OSAyLjAwMDU3TDcuMjE0NTUgMS41MDA3NkM2LjgxNTA4IDEuNDg5NTMgNi41IDEuODEzMjMgNi41IDIuMTk3NzVIN0g3LjVDNy41IDIuMzYxMzYgNy4zNjUwOCAyLjUwNTM5IDcuMTg2NDQgMi41MDAzN0w3LjIwMDQ5IDIuMDAwNTdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/chart-pie-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartPieDuotone = createFoamicon('ChartPieDuotone', __iconNode);
