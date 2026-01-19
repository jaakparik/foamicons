import { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import * as icons from 'foamicons';
import { iconNames, type IconProps, Sun, Moon } from 'foamicons';

type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

// Type for CSS custom properties in React 19
interface CustomCSSProperties extends React.CSSProperties {
  '--foamicon-secondary-color'?: string;
  '--foamicon-secondary-opacity'?: number;
}

// Convert PascalCase to kebab-case for display
const toKebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

// Convert kebab-case to PascalCase for component names
const toPascalCase = (str: string) =>
  str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());

const iconMap = iconNames.reduce((acc, name) => {
  acc[name] = icons[name as keyof typeof icons] as IconComponent;
  return acc;
}, {} as Record<string, IconComponent>);

// Separate regular and color icons
const regularIcons = iconNames.filter(name => !name.endsWith('Color'));
const colorIcons = iconNames.filter(name => name.endsWith('Color'));

type FilterType = 'all' | 'regular' | 'color';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(0.75);
  const [color, setColor] = useState('#ffffff');
  const [secondaryColor, setSecondaryColor] = useState('#0084ff');
  const [fillOpacity, setFillOpacity] = useState(0.2);
  const [filter, setFilter] = useState<FilterType>('all');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      setColor('#022D55');
      setSecondaryColor('#1E85F8');
    } else {
      setColor('#C4E0FF');
      setSecondaryColor('#0078FF');
    }
  }, [theme]);

  // Sync URL with selected icon
  useEffect(() => {
    const path = location.pathname.slice(1); // Remove leading /
    if (path) {
      const pascalName = toPascalCase(path);
      if (iconNames.includes(pascalName as any)) {
        setSelectedIcon(pascalName);
      } else {
        // Invalid icon name, go back to home
        navigate('/', { replace: true });
      }
    } else {
      setSelectedIcon(null);
    }
  }, [location.pathname, navigate]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const filteredIcons = useMemo(() => {
    let icons: readonly string[];

    if (filter === 'regular') {
      icons = regularIcons;
    } else if (filter === 'color') {
      icons = colorIcons;
    } else {
      icons = iconNames;
    }

    if (!search) return icons;
    const lower = search.toLowerCase();
    return icons.filter((name) =>
      name.toLowerCase().includes(lower) ||
      toKebabCase(name).includes(lower)
    );
  }, [search, filter]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadSVG = (iconName: string) => {
    // Get the rendered SVG element from the preview
    const kebabName = toKebabCase(iconName);
    const svgElement = document.querySelector(`[data-icon="${kebabName}"]`) as SVGElement;
    if (!svgElement) return;

    // Clone the SVG to avoid modifying the original
    const svgClone = svgElement.cloneNode(true) as SVGElement;
    
    // Get computed styles
    const computedColor = color;
    const computedSecondaryColor = secondaryColor;
    const computedOpacity = fillOpacity;
    
    // Set the SVG attributes to match current customization
    svgClone.setAttribute('width', size.toString());
    svgClone.setAttribute('height', size.toString());
    svgClone.setAttribute('stroke-width', strokeWidth.toString());
    
    // Apply colors by traversing and updating elements
    svgClone.querySelectorAll('[stroke="currentColor"]').forEach(el => {
      el.setAttribute('stroke', computedColor);
    });
    
    // Handle secondary color elements (with CSS variables)
    svgClone.querySelectorAll('[fill*="--foamicon-secondary-color"]').forEach(el => {
      el.setAttribute('fill', computedSecondaryColor);
      // Update style attribute to use actual opacity value
      const currentStyle = el.getAttribute('style') || '';
      const updatedStyle = currentStyle.replace(/fillOpacity:\s*"var\([^)]+\)"/g, `fillOpacity: "${computedOpacity}"`);
      el.setAttribute('style', updatedStyle);
    });
    
    svgClone.querySelectorAll('[stroke*="--foamicon-secondary-color"]').forEach(el => {
      el.setAttribute('stroke', computedSecondaryColor);
      const currentStyle = el.getAttribute('style') || '';
      const updatedStyle = currentStyle.replace(/strokeOpacity:\s*"var\([^)]+\)"/g, `strokeOpacity: "${computedOpacity}"`);
      el.setAttribute('style', updatedStyle);
    });
    
    // Serialize the SVG
    const svgData = new XMLSerializer().serializeToString(svgClone);
    
    // Create a properly formatted SVG with XML declaration
    const svgBlob = new Blob(
      ['<?xml version="1.0" encoding="UTF-8"?>\n' + svgData],
      { type: 'image/svg+xml;charset=utf-8' }
    );
    
    // Create download link
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${toKebabCase(iconName)}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getJSXCode = (name: string) => {
    const isColor = name.endsWith('Color');
    if (isColor) {
      return `<${name} size={${size}} />`;
    }
    return `<${name} size={${size}} strokeWidth={${strokeWidth}} />`;
  };

  const SelectedIconComponent = selectedIcon ? iconMap[selectedIcon] : null;
  const isColorIcon = selectedIcon?.endsWith('Color');

  return (
    <div className={`min-h-screen flex ${theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-zinc-900'}`}>
      {/* Sidebar */}
      <aside className={`w-64 border-r p-6 flex flex-col gap-6 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Foamicons</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-medium text-zinc-400">Customizer</h2>

          {/* Filter */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Type</label>
            <div className="flex gap-1">
              {(['all', 'regular', 'color'] as FilterType[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 text-xs py-1.5 px-2 rounded transition-colors ${
                    filter === f
                      ? 'bg-[#155FEF] text-white'
                      : theme === 'dark'
                      ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Stroke color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className={`w-8 h-8 rounded border bg-transparent cursor-pointer ${theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'}`}
                />
                <span className="text-sm text-zinc-500">{color}</span>
              </div>
          </div>

          {/* Secondary Color */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Fill color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className={`w-8 h-8 rounded border bg-transparent cursor-pointer ${theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'}`}
                />
                <span className="text-sm text-zinc-500">{secondaryColor}</span>
              </div>
          </div>

          {/* Stroke Width */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Stroke width</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.25"
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                className="flex-1 accent-[#155FEF]"
              />
              <span className="text-sm text-zinc-500 w-10">{strokeWidth}px</span>
            </div>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Size</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="12"
                max="48"
                step="1"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="flex-1 accent-[#155FEF]"
              />
              <span className="text-sm text-zinc-500 w-10">{size}px</span>
            </div>
          </div>

          {/* Fill Opacity */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Fill opacity</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={fillOpacity}
                onChange={(e) => setFillOpacity(parseFloat(e.target.value))}
                className="flex-1 accent-[#155FEF]"
              />
              <span className="text-sm text-zinc-500 w-10">{Math.round(fillOpacity * 100)}%</span>
            </div>
          </div>
        </div>

        <div className="mt-auto text-xs text-zinc-600">
          <div>{regularIcons.length} regular icons</div>
          <div>{colorIcons.length} color icons</div>
          <div className="font-medium text-zinc-500">{iconNames.length} total</div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Search */}
        <div className={`p-4 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
          <div className="relative">
            <input
              type="text"
              placeholder={`Search ${filteredIcons.length} icons...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full rounded-lg px-4 py-2.5 pl-10 text-sm focus:outline-none ${
                theme === 'dark'
                  ? 'bg-zinc-900 border border-zinc-800 focus:border-zinc-600'
                  : 'bg-zinc-50 border border-zinc-200 focus:border-zinc-400'
              }`}
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Icon Grid */}
        <div className="flex-1 overflow-auto p-4">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(52px,1fr))] gap-2">
            {filteredIcons.map((name) => {
              const Icon = iconMap[name];
              if (!Icon) return null;
              const isColor = name.endsWith('Color');
              return (
                <button
                  key={name}
                  onClick={() => {
                    const kebabName = toKebabCase(name);
                    navigate(`/${kebabName}`);
                  }}
                  className={`aspect-square flex items-center justify-center rounded-lg border transition-colors ${
                    selectedIcon === name
                      ? theme === 'dark'
                        ? 'border-[#155FEF] bg-zinc-800'
                        : 'border-[#155FEF] bg-zinc-100'
                      : isColor
                      ? theme === 'dark'
                        ? 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800'
                        : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100'
                      : theme === 'dark'
                      ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800'
                      : 'border-zinc-200 bg-white hover:bg-zinc-50'
                  }`}
                  title={toKebabCase(name)}
                >
                  <Icon
                    size={size}
                    strokeWidth={strokeWidth}
                    style={{ color, '--foamicon-secondary-color': secondaryColor, '--foamicon-secondary-opacity': fillOpacity } as CustomCSSProperties}
                    data-icon={toKebabCase(name)}
                  />
                </button>
              );
            })}
          </div>

          {filteredIcons.length === 0 && (
            <div className="text-center text-zinc-500 py-12">
              No icons found for "{search}"
            </div>
          )}
        </div>
      </main>

      {/* Detail Panel */}
      {selectedIcon && SelectedIconComponent && (
        <aside className={`w-80 border-l flex flex-col ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
          {/* Preview */}
          <div className={`flex-1 flex items-center justify-center border-b p-8 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
            <SelectedIconComponent
              size={Math.min(size * 4, 128)}
              strokeWidth={strokeWidth}
              style={{ color, '--foamicon-secondary-color': secondaryColor, '--foamicon-secondary-opacity': fillOpacity } as CustomCSSProperties}
            />
          </div>

          {/* Info */}
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{toKebabCase(selectedIcon)}</h3>
                {isColorIcon && (
                  <span className="text-xs text-zinc-500">Color variant</span>
                )}
              </div>
              <button
                onClick={() => navigate('/')}
                className={`p-1 rounded ${theme === 'dark' ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(getJSXCode(selectedIcon))}
                className={`flex-1 text-sm py-2 px-3 rounded-lg transition-colors ${
                  theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'
                }`}
              >
                Copy JSX
              </button>
              <button
                onClick={() => copyToClipboard(`import { ${selectedIcon} } from 'foamicons';`)}
                className={`flex-1 text-sm py-2 px-3 rounded-lg transition-colors ${
                  theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'
                }`}
              >
                Copy Import
              </button>
            </div>

            <button
              onClick={() => downloadSVG(selectedIcon)}
              className={`w-full text-sm py-2 px-3 rounded-lg transition-colors ${
                theme === 'dark' ? 'bg-[#155FEF] hover:bg-[#0D4FD8] text-white' : 'bg-[#155FEF] hover:bg-[#0D4FD8] text-white'
              }`}
            >
              Download SVG
            </button>

            <div className={`rounded-lg p-3 text-sm font-mono ${theme === 'dark' ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
              {getJSXCode(selectedIcon)}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
