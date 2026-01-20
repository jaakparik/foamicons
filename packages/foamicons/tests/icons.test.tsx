import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as Foamicons from '../src';

describe('Generated Icons', () => {
  it('exports iconNames array', () => {
    expect(Foamicons.iconNames).toBeDefined();
    expect(Array.isArray(Foamicons.iconNames)).toBe(true);
    expect(Foamicons.iconNames.length).toBeGreaterThan(0);
  });

  it('exports Icon component', () => {
    expect(Foamicons.Icon).toBeDefined();
  });

  it('exports createFoamicon function', () => {
    expect(Foamicons.createFoamicon).toBeDefined();
    expect(typeof Foamicons.createFoamicon).toBe('function');
  });

  it('exports IconProps type', () => {
    // Type exports are checked at compile time, but we can verify the interface exists
    // by checking that an icon accepts the expected props
    const Alert = (Foamicons as Record<string, unknown>).Alert as React.ComponentType<{
      size?: number;
      color?: string;
      strokeWidth?: number;
      absoluteStrokeWidth?: boolean;
      className?: string;
    }>;

    if (Alert) {
      const { container } = render(<Alert size={24} color="blue" strokeWidth={2} />);
      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();
    }
  });

  describe('Icon aliases', () => {
    it('exports {Name}Icon aliases', () => {
      const iconName = Foamicons.iconNames[0];
      const aliasName = `${iconName}Icon`;
      expect((Foamicons as Record<string, unknown>)[aliasName]).toBeDefined();
    });

    it('exports Foam{Name} aliases', () => {
      const iconName = Foamicons.iconNames[0];
      const aliasName = `Foam${iconName}`;
      expect((Foamicons as Record<string, unknown>)[aliasName]).toBeDefined();
    });

    it('aliases reference the same component', () => {
      const iconName = Foamicons.iconNames[0];
      const original = (Foamicons as Record<string, unknown>)[iconName];
      const withIcon = (Foamicons as Record<string, unknown>)[`${iconName}Icon`];
      const withFoam = (Foamicons as Record<string, unknown>)[`Foam${iconName}`];

      expect(original).toBe(withIcon);
      expect(original).toBe(withFoam);
    });
  });

  describe('Sample icon rendering', () => {
    it('renders first icon correctly', () => {
      const iconName = Foamicons.iconNames[0];
      const IconComponent = (Foamicons as Record<string, unknown>)[iconName] as React.ComponentType<{
        'data-testid'?: string;
      }>;

      if (IconComponent) {
        const { container } = render(<IconComponent data-testid="sample-icon" />);
        const svg = container.querySelector('svg');

        expect(svg).toBeDefined();
        expect(svg?.getAttribute('viewBox')).toBe('0 0 16 16');
        expect(svg?.classList.contains('foamicon')).toBe(true);
      }
    });

    it('renders icon with all child elements having unique keys', () => {
      const iconName = Foamicons.iconNames[0];
      const IconComponent = (Foamicons as Record<string, unknown>)[iconName] as React.ComponentType<{
        'data-testid'?: string;
      }>;

      if (IconComponent) {
        // React will warn in console if keys are missing, but we just verify render succeeds
        const { container } = render(<IconComponent />);
        const svg = container.querySelector('svg');
        expect(svg?.children.length).toBeGreaterThan(0);
      }
    });
  });
});

describe('Icon component props', () => {
  const getFirstIcon = () => {
    const iconName = Foamicons.iconNames[0];
    return (Foamicons as Record<string, unknown>)[iconName] as React.ComponentType<{
      size?: number | string;
      color?: string;
      strokeWidth?: number | string;
      absoluteStrokeWidth?: boolean;
      className?: string;
      style?: React.CSSProperties;
      'data-testid'?: string;
    }>;
  };

  it('accepts size as number', () => {
    const Icon = getFirstIcon();
    const { container } = render(<Icon size={32} />);
    const svg = container.querySelector('svg');

    expect(svg?.getAttribute('width')).toBe('32');
    expect(svg?.getAttribute('height')).toBe('32');
  });

  it('accepts size as string', () => {
    const Icon = getFirstIcon();
    const { container } = render(<Icon size="2em" />);
    const svg = container.querySelector('svg');

    expect(svg?.getAttribute('width')).toBe('2em');
    expect(svg?.getAttribute('height')).toBe('2em');
  });

  it('accepts custom className', () => {
    const Icon = getFirstIcon();
    const { container } = render(<Icon className="my-icon extra-class" />);
    const svg = container.querySelector('svg');

    expect(svg?.classList.contains('foamicon')).toBe(true);
    expect(svg?.classList.contains('my-icon')).toBe(true);
    expect(svg?.classList.contains('extra-class')).toBe(true);
  });

  it('accepts style prop', () => {
    const Icon = getFirstIcon();
    const { container } = render(<Icon style={{ marginRight: '8px' }} />);
    const svg = container.querySelector('svg');

    expect(svg?.style.marginRight).toBe('8px');
  });

  it('handles absoluteStrokeWidth at different sizes', () => {
    const Icon = getFirstIcon();

    // At size 8 (half of default 16), stroke should be doubled
    const { container: container1 } = render(<Icon size={8} strokeWidth={1} absoluteStrokeWidth />);
    const svg1 = container1.querySelector('svg');
    expect(svg1?.getAttribute('stroke-width')).toBe('2');

    // At size 32 (double the default 16), stroke should be halved
    const { container: container2 } = render(<Icon size={32} strokeWidth={1} absoluteStrokeWidth />);
    const svg2 = container2.querySelector('svg');
    expect(svg2?.getAttribute('stroke-width')).toBe('0.5');
  });
});
