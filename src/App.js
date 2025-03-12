// import { useState, lazy, Suspense } from "react";
// import parse from "html-react-parser";
// import "./App.css";
// import GridEditor from "./GridEditor";

// const COMPONENTS = {}; // Object to store dynamically imported components

// const loadComponent = (name) => {
//   const componentName = name.charAt(0).toUpperCase() + name.slice(1); // Convert "test" to "Test"

//   if (!COMPONENTS[componentName]) {
//     COMPONENTS[componentName] = lazy(() =>
//       import(`./components/${componentName}.js`).catch(() => ({
//         default: () => <div>Component Not Found: {componentName}</div>,
//       }))
//     );
//   }
//   return COMPONENTS[componentName];
// };

// const parsePropsFromText = (text) => {
//   const props = {};
//   const propRegex = /(\w+)="([^"]*)"/g;
//   let match;
//   while ((match = propRegex.exec(text)) !== null) {
//     props[match[1]] = match[2];
//   }
//   return props;
// };

// const renderContent = (html) => {
//   return parse(html, {
//     replace: (domNode) => {
//       if (domNode.type === "text" && domNode.data) {
//         const text = domNode.data.trim();
//         const componentMatch = text.match(/^\[([^\s\]]+)(.*)\]$/); // Match [Test props...]
//         if (componentMatch) {
//           const componentName = componentMatch[1].toLowerCase(); // "test"
//           const Component = loadComponent(componentName);
//           if (Component) {
//             const propsString = componentMatch[2].trim();
//             const props = parsePropsFromText(propsString);
//             return (
//               <Suspense fallback={<div>Loading {componentName}...</div>}>
//                 <Component {...props} />
//               </Suspense>
//             );
//           }
//         }
//       }
//     },
//   });
// };

// function App() {
//   const [editorContent, setEditorContent] = useState("");

//   return (
//     <div className="App">
//       <div className="text-center fs-1 fw-bold">
//         <h1>Grid Editor with SOHAN MAALI 🫡🫡</h1>
//       </div>
//       <GridEditor
//         editorContent={editorContent}
//         setEditorContent={setEditorContent}
//       />
//       <div className="mt-5 container">
//         <h2>Rendered Content:</h2>
//         {editorContent ? renderContent(editorContent) : <p>No content yet</p>}
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";
import GridEditor from "./GridEditor";
import { renderContent } from "./Helper/PageRender";

function App() {
  const [editorContent, setEditorContent] = useState("");

  return (
    <div className="App">
      <div className="text-center fs-1 fw-bold">
        <h1>Grid Editor with SOHAN MAALI 🫡🫡</h1>
      </div>
      <GridEditor editorContent={editorContent} setEditorContent={setEditorContent} />
      <div className="mt-5 container">
        <h2>Rendered Content:</h2>
        {editorContent ? renderContent(editorContent) : <p>No content yet</p>}
      </div>
    </div>
  );
}

export default App;
