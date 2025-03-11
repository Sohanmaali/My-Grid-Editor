// import React, { useEffect } from "react";
// // import "./js/jquery.grideditor.js";
// import "./js/jquery.grideditor5.js";

// const GridEditor = ({ editorContent, setEditorContent }) => {
//   useEffect(() => {
//     if (typeof $ === "undefined" || typeof $.fn.gridEditor === "undefined") {
//       console.error("jQuery or GridEditor not loaded!");
//       return;
//     }

//     $("#myGrid").gridEditor({
//       content_types: ["ckeditor"],
//       ckeditor: { config: { language: "en" } },
//     });

//     // return () => {
//     //   $("#myGrid").gridEditor("destroy");
//     // };
//   }, []);
//   const getEditorContent = () => {
//     const content = $("#myGrid").gridEditor("getHtml"); // Get HTML content
//     setEditorContent(content);
//     console.log("Editor Content:", content);
//   };

//   return (
//     <>
//       <button onClick={getEditorContent}>Get Content</button>
//       <div>
//         <div id="myGrid" />
//       </div>
//     </>
//   );
// };

// export default GridEditor;

import React, { useEffect } from "react";
// import "./js/jquery.grideditor.js";
import "./js/jquery.grideditor5.js";

const GridEditor = ({ editorContent, setEditorContent }) => {
  useEffect(() => {
    if (typeof $ === "undefined" || typeof $.fn.gridEditor === "undefined") {
      console.error("jQuery or GridEditor not loaded!");
      return;
    }

    $("#myGrid").gridEditor({
      content_types: ["ckeditor"],
      ckeditor: { config: { language: "en" } },
    });

    // Optional: Initialize with content if provided
    if (editorContent) {
      $("#myGrid").html(editorContent);
      $("#myGrid").gridEditor("init");
    }

    // Clean up function
    return () => {
      $("#myGrid").gridEditor("remove");
    };
  }, [editorContent]);

  const getEditorContent = () => {
    const content = $("#myGrid").gridEditor("getHtml"); // Get HTML content
    setEditorContent(content);
    console.log("Editor Content:", content);
  };

  return (
    <>
      <button onClick={getEditorContent}>Get Content</button>
      <div>
        <div id="myGrid" />
      </div>
    </>
  );
};

export default GridEditor;
