import { lazy, Suspense } from "react";
import parse from "html-react-parser";

const COMPONENTS_CACHE = {}; // Cache for dynamically loaded components

export const loadComponent = (name) => {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1); // Convert "test" to "Test"

  if (!COMPONENTS_CACHE[componentName]) {
    COMPONENTS_CACHE[componentName] = lazy(() =>
      import(`../components/${componentName}.js`).catch(() => ({
        default: () => <div>Component Not Found: {componentName}</div>,
      }))
    );
  }
  return COMPONENTS_CACHE[componentName];
};

export const parsePropsFromText = (text) => {
  const props = {};
  const propRegex = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = propRegex.exec(text)) !== null) {
    props[match[1]] = match[2];
  }
  return props;
};

export const renderContent = (html) => {
  return parse(html, {
    replace: (domNode) => {
      if (domNode.type === "text" && domNode.data) {
        const text = domNode.data.trim();
        const componentMatch = text.match(/^\[([^\s\]]+)(.*)\]$/); // Match [ComponentName props...]
        if (componentMatch) {
          const componentName = componentMatch[1].toLowerCase(); // "test"
          const Component = loadComponent(componentName);
          if (Component) {
            const propsString = componentMatch[2].trim();
            const props = parsePropsFromText(propsString);
            return (
              <Suspense fallback={<div>Loading {componentName}...</div>}>
                <Component {...props} />
              </Suspense>
            );
          }
        }
      }
    },
  });
};
// ==================================================================================================================
