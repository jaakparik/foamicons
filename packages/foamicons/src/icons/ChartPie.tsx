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
      d: 'M13.9972 8.79706L14.497 8.78301L13.9972 8.79706ZM7.20049 2.00037L7.18644 2.50018C10.628 2.59697 13.4006 5.36957 13.4974 8.81112L13.9972 8.79706L14.497 8.78301C14.3853 4.81122 11.1863 1.61228 7.21455 1.50057L7.20049 2.00037ZM13.8 8.99756V8.49756H7.2V8.99756V9.49756H13.8V8.99756ZM7 8.79756H7.5V2.19756H7H6.5V8.79756H7ZM7.2 8.99756V8.49756C7.36569 8.49756 7.5 8.63187 7.5 8.79756H7H6.5C6.5 9.18416 6.8134 9.49756 7.2 9.49756V8.99756ZM13.9972 8.79706L13.4974 8.81112C13.4924 8.63248 13.6364 8.49756 13.8 8.49756V8.99756V9.49756C14.1845 9.49756 14.5082 9.18248 14.497 8.78301L13.9972 8.79706ZM7.20049 2.00037L7.21455 1.50057C6.81508 1.48934 6.5 1.81304 6.5 2.19756H7H7.5C7.5 2.36117 7.36508 2.5052 7.18644 2.50018L7.20049 2.00037Z',
      fill: 'currentColor',
      key: 'kcb4bj'
    }
  ]
];

/**
 * @component @name ChartPie
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU4NCAxMUMxMC44MTI0IDEyLjc2NTkgOS4wNTAzMiAxNCA3IDE0QzQuMjM4NTggMTQgMiAxMS43NjE0IDIgOC45OTk5N0MyIDYuOTQ5NjUgMy4yMzQxIDUuMTg3NTcgNSA0LjQxNjAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy45OTcyIDguNzk3MDZMMTQuNDk3IDguNzgzMDFMMTMuOTk3MiA4Ljc5NzA2Wk03LjIwMDQ5IDIuMDAwMzdMNy4xODY0NCAyLjUwMDE4QzEwLjYyOCAyLjU5Njk3IDEzLjQwMDYgNS4zNjk1NyAxMy40OTc0IDguODExMTJMMTMuOTk3MiA4Ljc5NzA2TDE0LjQ5NyA4Ljc4MzAxQzE0LjM4NTMgNC44MTEyMiAxMS4xODYzIDEuNjEyMjggNy4yMTQ1NSAxLjUwMDU3TDcuMjAwNDkgMi4wMDAzN1pNMTMuOCA4Ljk5NzU2VjguNDk3NTZINy4yVjguOTk3NTZWOS40OTc1NkgxMy44VjguOTk3NTZaTTcgOC43OTc1Nkg3LjVWMi4xOTc1Nkg3SDYuNVY4Ljc5NzU2SDdaTTcuMiA4Ljk5NzU2VjguNDk3NTZDNy4zNjU2OSA4LjQ5NzU2IDcuNSA4LjYzMTg3IDcuNSA4Ljc5NzU2SDdINi41QzYuNSA5LjE4NDE2IDYuODEzNCA5LjQ5NzU2IDcuMiA5LjQ5NzU2VjguOTk3NTZaTTEzLjk5NzIgOC43OTcwNkwxMy40OTc0IDguODExMTJDMTMuNDkyNCA4LjYzMjQ4IDEzLjYzNjQgOC40OTc1NiAxMy44IDguNDk3NTZWOC45OTc1NlY5LjQ5NzU2QzE0LjE4NDUgOS40OTc1NiAxNC41MDgyIDkuMTgyNDggMTQuNDk3IDguNzgzMDFMMTMuOTk3MiA4Ljc5NzA2Wk03LjIwMDQ5IDIuMDAwMzdMNy4yMTQ1NSAxLjUwMDU3QzYuODE1MDggMS40ODkzNCA2LjUgMS44MTMwNCA2LjUgMi4xOTc1Nkg3SDcuNUM3LjUgMi4zNjExNyA3LjM2NTA4IDIuNTA1MiA3LjE4NjQ0IDIuNTAwMThMNy4yMDA0OSAyLjAwMDM3WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/chart-pie
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartPie = createFoamicon('ChartPie', __iconNode);
