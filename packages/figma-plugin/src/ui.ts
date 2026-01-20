// Figma Plugin UI - Plain TypeScript (no React needed)

// Post message to plugin code
function postMessage(type: string, data?: Record<string, unknown>) {
  parent.postMessage({ pluginMessage: { type, ...data } }, '*');
}

// Handle inserting an icon
function insertIcon(iconName: string, svgContent: string) {
  postMessage('insert-icon', { iconName, svgContent });
}

// Close the plugin
function closePlugin() {
  postMessage('close');
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) return;

  root.innerHTML = `
    <div class="container">
      <h2>Foamicons</h2>
      <p class="subtitle">360 icons in 3 styles</p>
      <div class="search-container">
        <input type="text" id="search" placeholder="Search icons..." />
      </div>
      <div class="filters">
        <button class="filter-btn active" data-filter="stroke">Stroked</button>
        <button class="filter-btn" data-filter="duotone">Duotone</button>
        <button class="filter-btn" data-filter="fill">Filled</button>
      </div>
      <div id="icon-grid" class="icon-grid">
        <p class="loading">Loading icons...</p>
      </div>
    </div>
  `;

  // TODO: Load and display icons from @foamicons/core
});

// Export for potential use
export { insertIcon, closePlugin };
