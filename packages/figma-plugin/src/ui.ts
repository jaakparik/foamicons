// Figma Plugin UI - Complete Implementation
import { iconsData, type IconData } from './icons-data';

// State Management
interface State {
  icons: IconData[];
  filteredIcons: IconData[];
  variant: 'stroke' | 'duotone' | 'fill';
  size: number;
  strokeWidth: number;
  primaryColor: string;
  secondaryColor: string;
  fillOpacity: number;
  searchQuery: string;
}

const state: State = {
  icons: iconsData,
  filteredIcons: iconsData,
  variant: 'stroke',
  size: 16,
  strokeWidth: 1,
  primaryColor: '#000000',
  secondaryColor: '#3B82F6',
  fillOpacity: 0.2,
  searchQuery: ''
};

// Post message to plugin code
function postMessage(type: string, data?: Record<string, unknown>) {
  parent.postMessage({ pluginMessage: { type, ...data } }, '*');
}

// Apply customizations to SVG string
function customizeSvg(svg: string, forExport = false): string {
  let result = svg;

  // Calculate stroke-width adjustment for scaling when exporting
  // viewBox is 16x16, so if size is different, strokes need adjustment
  const viewBoxSize = 16;
  const scale = forExport ? state.size / viewBoxSize : 1;
  const strokeWidth = state.strokeWidth / scale;

  // Replace colors based on variant
  if (state.variant === 'duotone') {
    // Duotone color logic (matches website):
    // - stroke="#003784" → primary color
    // - fill="#003784" WITH fill-opacity → secondary color
    // - fill="#003784" WITHOUT fill-opacity → primary color

    // First, replace fills that have fill-opacity (secondary color)
    result = result.replace(
      /fill="#003784"(\s+fill-opacity="[^"]*")/g,
      `fill="${state.secondaryColor}"$1`
    );
    // Also handle fill-opacity before fill attribute
    result = result.replace(
      /(fill-opacity="[^"]*"\s+)fill="#003784"/g,
      `$1fill="${state.secondaryColor}"`
    );
    // Update fill-opacity value
    result = result.replace(/fill-opacity="[^"]*"/g, `fill-opacity="${state.fillOpacity}"`);
    // Replace remaining fill="#003784" (no opacity) with primary
    result = result.replace(/fill="#003784"/g, `fill="${state.primaryColor}"`);
    // Replace stroke with primary
    result = result.replace(/stroke="#003784"/g, `stroke="${state.primaryColor}"`);
  } else if (state.variant === 'fill') {
    // Filled: black is primary, white is secondary
    result = result.replace(/stroke="black"/g, `stroke="${state.primaryColor}"`);
    result = result.replace(/fill="black"/g, `fill="${state.primaryColor}"`);
    result = result.replace(/stroke="white"/g, `stroke="${state.secondaryColor}"`);
    result = result.replace(/fill="white"/g, `fill="${state.secondaryColor}"`);
  } else {
    // Stroke: only primary color
    result = result.replace(/stroke="black"/g, `stroke="${state.primaryColor}"`);
    result = result.replace(/fill="black"/g, `fill="${state.primaryColor}"`);
  }

  // Add stroke-width to all stroked elements (icons have no stroke-width after generation)
  result = result.replace(
    /stroke="([^"]*)"/g,
    `stroke="$1" stroke-width="${strokeWidth}"`
  );

  return result;
}

// Filter icons by search query
function filterIcons(query: string): IconData[] {
  if (!query) return state.icons;
  const lower = query.toLowerCase();
  return state.icons.filter(icon =>
    icon.id.includes(lower) ||
    icon.name.toLowerCase().includes(lower) ||
    icon.tags.some(tag => tag.includes(lower))
  );
}

// Render icon grid
function renderGrid() {
  const grid = document.getElementById('iconGrid');
  if (!grid) return;

  // Toggle search mode class for layout
  grid.classList.toggle('has-search', state.searchQuery.length > 0);

  const html = state.filteredIcons.map(icon => {
    const svg = icon.variants[state.variant];
    if (!svg) return '';

    const displaySvg = customizeSvg(svg);

    return `<div class="icon-item" data-id="${icon.id}" title="${icon.name}">${displaySvg}</div>`;
  }).join('');

  grid.innerHTML = html || '<p class="empty-state">No icons found</p>';

  // Add click handlers
  grid.querySelectorAll('.icon-item').forEach(item => {
    const id = item.getAttribute('data-id');
    if (!id) return;

    item.addEventListener('click', () => {
      const icon = state.icons.find(i => i.id === id);
      if (icon) insertIcon(icon);
    });
  });
}

// Insert icon into Figma
function insertIcon(icon: IconData) {
  const svg = icon.variants[state.variant];
  if (!svg) return;

  // Apply customizations and set size (forExport=true adjusts stroke for scaling)
  let customized = customizeSvg(svg, true);
  customized = customized.replace(/width="[^"]*"/, `width="${state.size}"`);
  customized = customized.replace(/height="[^"]*"/, `height="${state.size}"`);

  postMessage('insert-icon', {
    svgString: customized,
    name: `${icon.id}-${state.variant}`,
    size: state.size
  });
}

// Debounce helper
function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  }) as T;
}

// Initialize UI
function init() {
  // Search input
  const search = document.getElementById('search') as HTMLInputElement;
  const clearBtn = document.getElementById('clearSearch');

  if (search && clearBtn) {
    const updateClearButton = () => {
      clearBtn.style.display = search.value ? 'flex' : 'none';
    };

    const handleSearch = debounce(() => {
      state.searchQuery = search.value;
      state.filteredIcons = filterIcons(state.searchQuery);
      updateClearButton();
      renderGrid();
    }, 200);

    search.addEventListener('input', handleSearch);

    clearBtn.addEventListener('click', () => {
      search.value = '';
      state.searchQuery = '';
      state.filteredIcons = filterIcons('');
      updateClearButton();
      renderGrid();
      search.focus();
    });
  }

  // Variant buttons
  document.querySelectorAll('[data-variant]').forEach(btn => {
    btn.addEventListener('click', () => {
      const variant = btn.getAttribute('data-variant') as 'stroke' | 'duotone' | 'fill';
      state.variant = variant;

      document.querySelectorAll('[data-variant]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Set default colors per variant
      const secondaryColor = document.getElementById('secondaryColor') as HTMLInputElement;
      if (variant === 'fill') {
        state.secondaryColor = '#ffffff';
        if (secondaryColor) secondaryColor.value = '#ffffff';
      } else if (variant === 'duotone') {
        state.secondaryColor = '#3B82F6';
        if (secondaryColor) secondaryColor.value = '#3B82F6';
      }

      updateVariantControls();
      renderGrid();
    });
  });

  // Size buttons
  document.querySelectorAll('[data-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = parseInt(btn.getAttribute('data-size') || '16', 10);
      state.size = size;

      document.querySelectorAll('[data-size]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      updateGridSize();
      renderGrid();
    });
  });

  // Stroke width buttons
  document.querySelectorAll('[data-stroke]').forEach(btn => {
    btn.addEventListener('click', () => {
      const strokeWidth = parseFloat(btn.getAttribute('data-stroke') || '1');
      state.strokeWidth = strokeWidth;

      document.querySelectorAll('[data-stroke]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderGrid();
    });
  });

  // Primary color picker
  const primaryColor = document.getElementById('primaryColor') as HTMLInputElement;
  if (primaryColor) {
    primaryColor.addEventListener('input', () => {
      state.primaryColor = primaryColor.value;
      renderGrid();
    });
  }

  // Secondary color picker
  const secondaryColor = document.getElementById('secondaryColor') as HTMLInputElement;
  if (secondaryColor) {
    secondaryColor.addEventListener('input', () => {
      state.secondaryColor = secondaryColor.value;
      renderGrid();
    });
  }

  // Fill opacity slider
  const fillOpacity = document.getElementById('fillOpacity') as HTMLInputElement;
  const fillOpacityValue = document.getElementById('fillOpacityValue');
  if (fillOpacity && fillOpacityValue) {
    fillOpacity.addEventListener('input', () => {
      state.fillOpacity = parseFloat(fillOpacity.value);
      fillOpacityValue.textContent = `${Math.round(state.fillOpacity * 100)}%`;
      renderGrid();
    });
  }

  // Update visibility of variant-specific controls
  updateVariantControls();

  // Toggle settings visibility
  const toggleBtn = document.getElementById('toggleSettings');
  const extraSettings = document.getElementById('extraSettings');
  if (toggleBtn && extraSettings) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('expanded');
      extraSettings.classList.toggle('visible');
    });
  }

  // Initial setup and render
  updateGridSize();
  renderGrid();
}

// Update grid size and columns based on icon size
function updateGridSize() {
  const grid = document.getElementById('iconGrid');
  if (!grid) return;

  // Calculate columns based on size (plugin width ~280px usable)
  const cols = state.size <= 20 ? 8 : state.size <= 32 ? 6 : state.size <= 48 ? 4 : 3;

  grid.style.setProperty('--icon-size', `${state.size}px`);
  grid.style.setProperty('--grid-cols', `${cols}`);
}

// Show/hide variant-specific controls
function updateVariantControls() {
  const secondaryColor = document.getElementById('secondaryColor') as HTMLInputElement;
  const opacityRow = document.getElementById('fillOpacityRow');

  if (secondaryColor) {
    secondaryColor.style.display = (state.variant === 'duotone' || state.variant === 'fill') ? 'block' : 'none';
  }
  if (opacityRow) {
    opacityRow.style.display = state.variant === 'duotone' ? 'flex' : 'none';
  }
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
