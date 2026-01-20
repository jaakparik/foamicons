/// <reference types="@figma/plugin-typings" />

// Figma API token (injected at build time from .env)
declare const process: { env: { FIGMA_API_TOKEN: string } };
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;

// Show the plugin UI
figma.showUI(__html__, { width: 320, height: 480 });

// Handle messages from the UI
figma.ui.onmessage = async (msg: { type: string; iconName?: string; svgContent?: string }) => {
  if (msg.type === 'insert-icon') {
    if (!msg.svgContent || !msg.iconName) return;

    try {
      // Create a frame from SVG
      const node = figma.createNodeFromSvg(msg.svgContent);
      node.name = msg.iconName;

      // Center in viewport
      const center = figma.viewport.center;
      node.x = center.x - node.width / 2;
      node.y = center.y - node.height / 2;

      // Select the new node
      figma.currentPage.selection = [node];
      figma.viewport.scrollAndZoomIntoView([node]);

      figma.notify(`Inserted ${msg.iconName}`);
    } catch (error) {
      figma.notify(`Error inserting icon: ${error}`, { error: true });
    }
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
