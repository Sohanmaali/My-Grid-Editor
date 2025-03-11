import { useState } from "react";
import "./App.css";

import GridEditor from "./GridEditor";

function App() {
  const [editorContent, setEditorContent] = useState("");

  return (
    <div className="App">
      <div className="text-center fs-1 fw-bold">
        <h1>Grid Editor with SOHAN MAALI 🫡🫡</h1>
      </div>
      <GridEditor
        editorContent={editorContent}
        setEditorContent={setEditorContent}
      />
      <div className="mt-5"></div>
      <div dangerouslySetInnerHTML={{ __html: editorContent }}></div>
    </div>
  );
}

export default App;
