/// <reference types="@figma/plugin-typings" />

// Show the plugin UI
figma.showUI(__html__, { width: 308, height: 600, themeColors: true });

// Handle drag-and-drop from plugin UI to canvas
figma.on('drop', (event: DropEvent) => {
  const { files, dropMetadata } = event;

  if (files.length > 0 && files[0].type === 'image/svg+xml') {
    files[0].getTextAsync().then((svgString) => {
      try {
        const node = figma.createNodeFromSvg(svgString);
        node.name = (dropMetadata && dropMetadata.name) || 'icon';
        node.x = event.absoluteX - node.width / 2;
        node.y = event.absoluteY - node.height / 2;

        figma.currentPage.selection = [node];
        figma.notify('Inserted ' + node.name);
      } catch (error) {
        figma.notify('Error: ' + error, { error: true });
      }
    });
    return false;
  }

  return false;
});

// Handle messages from the UI
figma.ui.onmessage = async (msg: {
  type: string;
  svgString?: string;
  name?: string;
  size?: number;
  width?: number;
  height?: number;
  message?: string;
  error?: boolean;
}) => {
  if (msg.type === 'resize') {
    figma.ui.resize(msg.width || 308, msg.height || 600);
    return;
  }

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
