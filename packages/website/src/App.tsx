import { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import * as icons from 'foamicons';
import { iconNames, iconAliases, iconTags, logoNames, logoAliases, logoTags, type IconProps, Sun, Moon, Copy } from 'foamicons';

type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

// Convert PascalCase to kebab-case for display
const toKebabCase = (str: string) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const prev = str[i - 1];

    // Insert dash before uppercase if preceded by lowercase/digit OR another uppercase
    if (i > 0 && /[A-Z]/.test(char) && /[a-zA-Z\d]/.test(prev)) {
      result += '-';
    }
    result += char;
  }
  return result.toLowerCase();
};

// Convert kebab-case to PascalCase for component names
const toPascalCase = (str: string) =>
  str.replace(/(^|-)([a-z\d])/gi, (_, __, c) => c.toUpperCase());

const iconMap = iconNames.reduce((acc, name) => {
  acc[name] = icons[name as keyof typeof icons] as IconComponent;
  return acc;
}, {} as Record<string, IconComponent>);

// Add logos to the map
const logoMap = logoNames.reduce((acc, name) => {
  acc[name] = icons[name as keyof typeof icons] as IconComponent;
  return acc;
}, {} as Record<string, IconComponent>);

// Combined map for lookups
const allComponentsMap = { ...iconMap, ...logoMap };

// Separate stroke, duotone, and fill icons
const strokeIcons = iconNames.filter(name => !name.endsWith('Duotone') && !name.endsWith('Fill'));
const duotoneIcons = iconNames.filter(name => name.endsWith('Duotone'));
const fillIcons = iconNames.filter(name => name.endsWith('Fill'));

// Separate logo variants
// Default logos don't have a suffix (LogoInstagram), dark have Dark suffix, fill have Fill suffix
const defaultLogos = logoNames.filter(name => !name.endsWith('Dark') && !name.endsWith('Fill'));
const darkLogos = logoNames.filter(name => name.endsWith('Dark'));
const fillLogos = logoNames.filter(name => name.endsWith('Fill'));

type CategoryType = 'icons' | 'logos';
type IconVariantType = 'stroke' | 'duotone' | 'fill';
type LogoVariantType = 'default' | 'dark' | 'fill';

const logoVariantLabels: Record<LogoVariantType, string> = {
  default: 'Color',
  dark: 'Dark',
  fill: 'Filled',
};

// Display labels for filter buttons
const variantLabels: Record<IconVariantType, string> = {
  stroke: 'Stroked',
  duotone: 'Duotone',
  fill: 'Filled',
};

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(0.75);
  const [absoluteStrokeWidth, setAbsoluteStrokeWidth] = useState(true);
  const [color, setColor] = useState('#ffffff');
  const [secondaryColor, setSecondaryColor] = useState('#0084ff');
  const [fillOpacity, setFillOpacity] = useState(0.2);
  const [category, setCategory] = useState<CategoryType>('icons');
  const [iconVariant, setIconVariant] = useState<IconVariantType>('stroke');
  const [logoVariant, setLogoVariant] = useState<LogoVariantType>('default');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (iconVariant === 'fill') {
      // Fill icons: fill color is primary, stroke details are secondary
      if (theme === 'light') {
        setColor('#000000');
        setSecondaryColor('#ffffff');
      } else {
        setColor('#ffffff');
        setSecondaryColor('#000000');
      }
    } else {
      // Stroke and Duotone icons
      if (theme === 'light') {
        setColor('#022D55');
        setSecondaryColor('#1E85F8');
      } else {
        setColor('#ffffff');
        setSecondaryColor('#C4E0FF');
      }
    }
  }, [theme, iconVariant]);

  // Sync URL with selected icon
  useEffect(() => {
    const path = location.pathname.slice(1); // Remove leading /
    if (path) {
      const pascalName = toPascalCase(path);
      if (iconNames.includes(pascalName as any) || logoNames.includes(pascalName as any)) {
        setSelectedIcon(pascalName);
        // Auto-switch category if needed
        if (logoNames.includes(pascalName as any) && category !== 'logos') {
          setCategory('logos');
        } else if (iconNames.includes(pascalName as any) && category === 'logos') {
          setCategory('icons');
          // Switch to appropriate icon variant
          if (pascalName.endsWith('Duotone')) setIconVariant('duotone');
          else if (pascalName.endsWith('Fill')) setIconVariant('fill');
          else setIconVariant('stroke');
        }
      } else {
        // Invalid icon name, go back to home
        navigate('/', { replace: true });
      }
    } else {
      setSelectedIcon(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, navigate]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Get aliases for an icon or logo (handles variants by stripping suffix)
  const getAliasesFor = (name: string): string[] => {
    const isLogo = name.startsWith('Logo');
    if (isLogo) {
      const baseName = name.replace(/(Dark|Fill)$/, '');
      return logoAliases[baseName] || [];
    }
    const baseName = name.replace(/(Duotone|Fill)$/, '');
    return iconAliases[baseName] || [];
  };

  // Get tags for an icon or logo (handles variants by stripping suffix)
  const getTagsFor = (name: string): string[] => {
    const isLogo = name.startsWith('Logo');
    if (isLogo) {
      const baseName = name.replace(/(Dark|Fill)$/, '');
      return logoTags[baseName] || [];
    }
    const baseName = name.replace(/(Duotone|Fill)$/, '');
    return iconTags[baseName] || [];
  };


  const filteredIcons = useMemo(() => {
    let iconsToFilter: readonly string[];

    if (category === 'logos') {
      if (logoVariant === 'default') {
        iconsToFilter = defaultLogos;
      } else if (logoVariant === 'dark') {
        iconsToFilter = darkLogos;
      } else {
        iconsToFilter = fillLogos;
      }
    } else if (iconVariant === 'stroke') {
      iconsToFilter = strokeIcons;
    } else if (iconVariant === 'duotone') {
      iconsToFilter = duotoneIcons;
    } else {
      iconsToFilter = fillIcons;
    }

    if (!search) return iconsToFilter;
    const lower = search.toLowerCase();

    return iconsToFilter.filter((name) => {
      // Search by component name
      if (name.toLowerCase().includes(lower)) return true;
      // Search by kebab-case name
      if (toKebabCase(name).includes(lower)) return true;
      // Search by aliases
      const aliases = getAliasesFor(name);
      if (aliases.some(alias =>
        alias.toLowerCase().includes(lower) ||
        toKebabCase(alias).includes(lower)
      )) return true;
      // Search by tags
      const tags = getTagsFor(name);
      if (tags.some(tag => tag.toLowerCase().includes(lower))) return true;

      return false;
    });
  }, [search, category, iconVariant, logoVariant]);

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
    const isLogoComp = name.startsWith('Logo');
    const isDuotone = name.endsWith('Duotone');
    const isFill = name.endsWith('Fill') && !isLogoComp;
    if (isLogoComp || isDuotone || isFill) {
      return `<${name} size={${size}} />`;
    }
    const absStroke = absoluteStrokeWidth ? '' : ' absoluteStrokeWidth={false}';
    return `<${name} size={${size}} strokeWidth={${strokeWidth}}${absStroke} />`;
  };

  const getImportCode = (name: string) => {
    const isLogoComp = name.startsWith('Logo');
    if (isLogoComp) {
      return `import { ${name} } from 'foamicons/logos';`;
    }
    return `import { ${name} } from 'foamicons';`;
  };

  const SelectedIconComponent = selectedIcon ? allComponentsMap[selectedIcon] : null;
  const isDuotoneIcon = selectedIcon?.endsWith('Duotone');
  const isFillIcon = selectedIcon?.endsWith('Fill') && !selectedIcon?.startsWith('Logo');
  const isLogoIcon = selectedIcon?.startsWith('Logo');
  const isDefaultLogo = isLogoIcon && !selectedIcon?.endsWith('Dark') && !selectedIcon?.endsWith('Fill');
  const isDarkLogo = isLogoIcon && selectedIcon?.endsWith('Dark');
  const isFillLogo = isLogoIcon && selectedIcon?.endsWith('Fill');

  return (
    <div className={`h-screen flex ${theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-zinc-900'}`}>
      {/* Sidebar */}
      <aside className={`w-64 border-r p-6 flex flex-col gap-6 overflow-y-auto shrink-0 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            <button 
              onClick={() => navigate('/')}
              className="hover:opacity-70 transition-opacity"
            >
              foamicons
            </button>
          </h1>
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

          {/* Category: Icons / Logos */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Category</label>
            <div className="flex gap-1">
              {(['icons', 'logos'] as CategoryType[]).map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`flex-1 text-xs py-1.5 px-2 rounded transition-colors ${
                    category === c
                      ? 'bg-[#155FEF] text-white'
                      : theme === 'dark'
                      ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {c === 'icons' ? 'Icons' : 'Logos'}
                </button>
              ))}
            </div>
          </div>

          {/* Variant filter - for icons */}
          {category === 'icons' && (
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">Variant</label>
              <div className="flex gap-1">
                {(['stroke', 'duotone', 'fill'] as IconVariantType[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setIconVariant(v)}
                    className={`flex-1 text-xs py-1.5 px-2 rounded transition-colors ${
                      iconVariant === v
                        ? 'bg-[#155FEF] text-white'
                        : theme === 'dark'
                        ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {variantLabels[v]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Variant filter - for logos */}
          {category === 'logos' && (
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">Variant</label>
              <div className="flex gap-1">
                {(['default', 'dark', 'fill'] as LogoVariantType[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setLogoVariant(v)}
                    className={`flex-1 text-xs py-1.5 px-2 rounded transition-colors ${
                      logoVariant === v
                        ? 'bg-[#155FEF] text-white'
                        : theme === 'dark'
                        ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {logoVariantLabels[v]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color customization - only for icons */}
          {category === 'icons' && (
            <>
              {/* Fill Color - for Fill and Duotone */}
              {(iconVariant === 'fill' || iconVariant === 'duotone') && (
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Fill color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={iconVariant === 'fill' ? color : secondaryColor}
                      onChange={(e) => iconVariant === 'fill' ? setColor(e.target.value) : setSecondaryColor(e.target.value)}
                      className={`w-8 h-8 rounded border bg-transparent cursor-pointer ${theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'}`}
                    />
                    <span className="text-sm text-zinc-500">{iconVariant === 'fill' ? color : secondaryColor}</span>
                  </div>
                </div>
              )}

              {/* Stroke Color */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Stroke color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={iconVariant === 'fill' ? secondaryColor : color}
                    onChange={(e) => iconVariant === 'fill' ? setSecondaryColor(e.target.value) : setColor(e.target.value)}
                    className={`w-8 h-8 rounded border bg-transparent cursor-pointer ${theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'}`}
                  />
                  <span className="text-sm text-zinc-500">{iconVariant === 'fill' ? secondaryColor : color}</span>
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
                <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={absoluteStrokeWidth}
                    onChange={(e) => setAbsoluteStrokeWidth(e.target.checked)}
                    className="accent-[#155FEF]"
                  />
                  Absolute stroke width
                </label>
              </div>

              {/* Fill Opacity - only for Duotone */}
              {iconVariant === 'duotone' && (
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
              )}
            </>
          )}

          {/* Size - applies to both icons and logos */}
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

        {/* Installation */}
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-zinc-400">Installation</h2>
          <div className="relative group">
            <div className={`rounded-lg p-3 text-xs font-mono ${theme === 'dark' ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>
              npm install foamicons
            </div>
            <button
              onClick={() => copyToClipboard('npm install foamicons')}
              className={`absolute top-2 right-2 p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'
              }`}
              title="Copy to clipboard"
            >
              <Copy size={14} />
            </button>
          </div>
          <div className={`text-xs ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>
            <div className="mb-2">Import icons:</div>
            <div className="relative group">
              <div className={`rounded-lg p-3 font-mono ${theme === 'dark' ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                {`import { Bell } from 'foamicons';`}
              </div>
              <button
                onClick={() => copyToClipboard(`import { Bell } from 'foamicons';`)}
                className={`absolute top-2 right-2 p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                  theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'
                }`}
                title="Copy to clipboard"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-auto text-xs text-zinc-600">
          <div>{strokeIcons.length} stroke icons</div>
          <div>{duotoneIcons.length} duotone icons</div>
          <div>{fillIcons.length} fill icons</div>
          <div>{defaultLogos.length} color logos, {fillLogos.length} fill</div>
          <div className="font-medium text-zinc-500">{iconNames.length + logoNames.length} total</div>
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
              const Icon = category === 'logos' ? logoMap[name] : iconMap[name];
              if (!Icon) return null;
              const isDuotone = name.endsWith('Duotone');
              const isFill = name.endsWith('Fill') && !name.startsWith('Logo');
              const isLogoItem = name.startsWith('Logo');
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
                      : isLogoItem
                      ? theme === 'dark'
                        ? 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800'
                        : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100'
                      : isDuotone || isFill
                      ? theme === 'dark'
                        ? 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800'
                        : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100'
                      : theme === 'dark'
                      ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800'
                      : 'border-zinc-200 bg-white hover:bg-zinc-50'
                  }`}
                  title={toKebabCase(name)}
                  style={
                    isLogoItem
                      ? undefined // Logos use their own colors
                      : {
                          color,
                          '--foamicon-secondary-color': secondaryColor,
                          '--foamicon-secondary-opacity': fillOpacity,
                        } as React.CSSProperties
                  }
                >
                  <Icon
                    size={size}
                    strokeWidth={isLogoItem ? 0 : strokeWidth}
                    absoluteStrokeWidth={absoluteStrokeWidth}
                    stroke={isLogoItem ? 'none' : undefined}
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
        <aside className={`w-80 border-l flex flex-col overflow-y-auto ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
          {/* Preview */}
          <div
            className={`shrink-0 h-64 flex items-start justify-center border-b p-8 pt-16 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}
            style={
              isLogoIcon
                ? undefined
                : {
                    color,
                    '--foamicon-secondary-color': secondaryColor,
                    '--foamicon-secondary-opacity': fillOpacity,
                  } as React.CSSProperties
            }
          >
            <SelectedIconComponent
              size={Math.min(size * 4, 128)}
              strokeWidth={isLogoIcon ? 0 : strokeWidth}
              absoluteStrokeWidth={absoluteStrokeWidth}
              stroke={isLogoIcon ? 'none' : undefined}
            />
          </div>

          {/* Info */}
          <div className="p-4 space-y-4 shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{toKebabCase(selectedIcon)}</h3>
                {isDuotoneIcon && (
                  <span className="text-xs text-zinc-500">Duotone variant</span>
                )}
                {isFillIcon && (
                  <span className="text-xs text-zinc-500">Fill variant</span>
                )}
                {isDefaultLogo && (
                  <span className="text-xs text-zinc-500">Logo (brand colors)</span>
                )}
                {isDarkLogo && (
                  <span className="text-xs text-zinc-500">Logo (dark theme)</span>
                )}
                {isFillLogo && (
                  <span className="text-xs text-zinc-500">Logo (single color)</span>
                )}
                {getAliasesFor(selectedIcon).length > 0 && (
                  <div className="text-xs text-zinc-500 mt-1">
                    Also known as: {getAliasesFor(selectedIcon).map(a => toKebabCase(a)).join(', ')}
                  </div>
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
                onClick={() => copyToClipboard(getImportCode(selectedIcon))}
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

            <div className="relative group">
              <div className={`rounded-lg p-3 text-xs font-mono ${theme === 'dark' ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                {getJSXCode(selectedIcon)}
              </div>
              <button
                onClick={() => copyToClipboard(getJSXCode(selectedIcon))}
                className={`absolute top-2 right-2 p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                  theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'
                }`}
                title="Copy to clipboard"
              >
                <Copy size={14} />
              </button>
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
