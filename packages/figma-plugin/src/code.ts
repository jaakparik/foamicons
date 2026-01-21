/// <reference types="@figma/plugin-typings" />

// Show the plugin UI
figma.showUI(__html__, { width: 308, height: 600, themeColors: true });

// Handle messages from the UI
figma.ui.onmessage = async (msg: {
  type: string;
  svgString?: string;
  name?: string;
  size?: number;
  message?: string;
  error?: boolean;
}) => {
  if (msg.type === 'insert-icon') {
    const { svgString, name, size } = msg;

    if (!svgString || !name) {
      figma.notify('Missing icon data', { error: true });
      return;
    }

    try {
      const node = figma.createNodeFromSvg(svgString);
      node.name = name;

      // SVG already has correct size and stroke-width, no resize needed

      // Center in viewport
      const center = figma.viewport.center;
      node.x = center.x - node.width / 2;
      node.y = center.y - node.height / 2;

      // Select and focus
      figma.currentPage.selection = [node];
      figma.viewport.scrollAndZoomIntoView([node]);

      figma.notify(`Inserted ${name}`);
    } catch (error) {
      figma.notify(`Error: ${error}`, { error: true });
    }
  }

  if (msg.type === 'notify') {
    figma.notify(msg.message || 'Action completed', { error: msg.error });
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
