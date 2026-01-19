import { useState, useMemo } from 'react';
import * as icons from 'foamicons';
import { iconNames, type IconProps } from 'foamicons';

type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

// Convert PascalCase to kebab-case for display
const toKebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const iconMap = iconNames.reduce((acc, name) => {
  acc[name] = icons[name as keyof typeof icons] as IconComponent;
  return acc;
}, {} as Record<string, IconComponent>);

function App() {
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [color, setColor] = useState('#ffffff');

  const filteredIcons = useMemo(() => {
    if (!search) return iconNames;
    const lower = search.toLowerCase();
    return iconNames.filter((name) =>
      name.toLowerCase().includes(lower) ||
      toKebabCase(name).includes(lower)
    );
  }, [search]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getJSXCode = (name: string) => {
    return `<${name} size={${size}} strokeWidth={${strokeWidth}} />`;
  };

  const getSVGCode = (name: string) => {
    const Icon = iconMap[name];
    if (!Icon) return '';
    const el = document.createElement('div');
    const svg = document.querySelector(`[data-icon="${name}"]`);
    return svg?.outerHTML || '';
  };

  const SelectedIconComponent = selectedIcon ? iconMap[selectedIcon] : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col gap-6">
        <h1 className="text-xl font-semibold">Foamicons</h1>

        <div className="space-y-4">
          <h2 className="text-sm font-medium text-zinc-400">Customizer</h2>

          {/* Color */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Color</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-8 h-8 rounded border border-zinc-700 bg-transparent cursor-pointer"
              />
              <span className="text-sm text-zinc-500">{color}</span>
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
        </div>

        <div className="mt-auto text-xs text-zinc-600">
          {iconNames.length} icons
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-zinc-800">
          <div className="relative">
            <input
              type="text"
              placeholder={`Search ${iconNames.length} icons...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 pl-10 text-sm focus:outline-none focus:border-zinc-600"
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
              return (
                <button
                  key={name}
                  onClick={() => setSelectedIcon(name)}
                  className={`aspect-square flex items-center justify-center rounded-lg border transition-colors hover:bg-zinc-800 ${
                    selectedIcon === name
                      ? 'border-[#155FEF] bg-zinc-800'
                      : 'border-zinc-800 bg-zinc-900'
                  }`}
                  title={toKebabCase(name)}
                >
                  <Icon
                    size={size}
                    strokeWidth={strokeWidth}
                    style={{ color }}
                    data-icon={name}
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
        <aside className="w-80 border-l border-zinc-800 flex flex-col">
          {/* Preview */}
          <div className="flex-1 flex items-center justify-center border-b border-zinc-800 p-8">
            <SelectedIconComponent
              size={Math.min(size * 4, 128)}
              strokeWidth={strokeWidth}
              style={{ color }}
            />
          </div>

          {/* Info */}
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{toKebabCase(selectedIcon)}</h3>
              <button
                onClick={() => setSelectedIcon(null)}
                className="p-1 hover:bg-zinc-800 rounded"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(getJSXCode(selectedIcon))}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-sm py-2 px-3 rounded-lg transition-colors"
              >
                Copy JSX
              </button>
              <button
                onClick={() => copyToClipboard(`import { ${selectedIcon} } from 'foamicons';`)}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-sm py-2 px-3 rounded-lg transition-colors"
              >
                Copy Import
              </button>
            </div>

            <div className="bg-zinc-900 rounded-lg p-3 text-sm font-mono text-zinc-400">
              {getJSXCode(selectedIcon)}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default App;
