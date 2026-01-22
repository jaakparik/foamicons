import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { createFoamicon } from '../src/createFoamicon';
import type { IconNode } from '../src/types';

const testIconNode: IconNode = [
  ['path', { d: 'M0 0L10 10', stroke: 'currentColor', key: 'test1' }],
  ['circle', { cx: '5', cy: '5', r: '2', fill: 'currentColor', key: 'test2' }],
];

const TestIcon = createFoamicon('TestIcon', testIconNode);

describe('createFoamicon', () => {
  it('creates a valid React component', () => {
    expect(TestIcon).toBeDefined();
    expect(TestIcon.displayName).toBe('TestIcon');
  });

  it('renders an SVG element', () => {
    render(<TestIcon data-testid="test-icon" />);
    const svg = screen.getByTestId('test-icon');
    expect(svg.tagName).toBe('svg');
  });

  it('applies default props', () => {
    render(<TestIcon data-testid="test-icon" />);
    const svg = screen.getByTestId('test-icon');

    // Size is not set by default (allows Tailwind h-*/w-* classes to work)
    expect(svg.getAttribute('width')).toBeNull();
    expect(svg.getAttribute('height')).toBeNull();
    expect(svg.getAttribute('viewBox')).toBe('0 0 16 16');
    expect(svg.getAttribute('stroke')).toBe('currentColor');
    expect(svg.getAttribute('stroke-width')).toBe('1');
  });

  it('applies custom size prop', () => {
    render(<TestIcon data-testid="test-icon" size={24} />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
  });

  it('applies custom color prop', () => {
    render(<TestIcon data-testid="test-icon" color="red" />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.getAttribute('stroke')).toBe('red');
  });

  it('applies custom strokeWidth prop', () => {
    render(<TestIcon data-testid="test-icon" strokeWidth={2} />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.getAttribute('stroke-width')).toBe('2');
  });

  it('calculates absoluteStrokeWidth correctly', () => {
    render(<TestIcon data-testid="test-icon" size={32} strokeWidth={1} absoluteStrokeWidth />);
    const svg = screen.getByTestId('test-icon');

    // With absoluteStrokeWidth: strokeWidth * (16 / size) = 1 * (16 / 32) = 0.5
    expect(svg.getAttribute('stroke-width')).toBe('0.5');
  });

  it('applies className correctly', () => {
    render(<TestIcon data-testid="test-icon" className="custom-class" />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.classList.contains('foamicon')).toBe(true);
    expect(svg.classList.contains('foamicon-test-icon')).toBe(true);
    expect(svg.classList.contains('custom-class')).toBe(true);
  });

  it('forwards ref to SVG element', () => {
    const ref = createRef<SVGSVGElement>();
    render(<TestIcon ref={ref} data-testid="test-icon" />);

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe('svg');
  });

  it('renders icon node children', () => {
    render(<TestIcon data-testid="test-icon" />);
    const svg = screen.getByTestId('test-icon');

    const path = svg.querySelector('path');
    const circle = svg.querySelector('circle');

    expect(path).toBeDefined();
    expect(circle).toBeDefined();
    expect(path?.getAttribute('d')).toBe('M0 0L10 10');
    expect(circle?.getAttribute('cx')).toBe('5');
  });

  it('passes through additional SVG props', () => {
    render(<TestIcon data-testid="test-icon" role="img" aria-label="Test" />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.getAttribute('role')).toBe('img');
    expect(svg.getAttribute('aria-label')).toBe('Test');
  });

  it('has aria-hidden by default', () => {
    render(<TestIcon data-testid="test-icon" />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.getAttribute('aria-hidden')).toBe('true');
  });

  it('applies secondaryColor as CSS variable', () => {
    render(<TestIcon data-testid="test-icon" secondaryColor="#3b82f6" />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.style.getPropertyValue('--foamicon-secondary-color')).toBe('#3b82f6');
  });

  it('applies secondaryOpacity as CSS variable', () => {
    render(<TestIcon data-testid="test-icon" secondaryOpacity={0.5} />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.style.getPropertyValue('--foamicon-secondary-opacity')).toBe('0.5');
  });

  it('applies both secondary props together', () => {
    render(<TestIcon data-testid="test-icon" secondaryColor="red" secondaryOpacity={0.3} />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.style.getPropertyValue('--foamicon-secondary-color')).toBe('red');
    expect(svg.style.getPropertyValue('--foamicon-secondary-opacity')).toBe('0.3');
  });

  it('does not set style when no secondary props provided', () => {
    render(<TestIcon data-testid="test-icon" />);
    const svg = screen.getByTestId('test-icon');

    expect(svg.getAttribute('style')).toBeNull();
  });
});
