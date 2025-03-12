import React, { useEffect } from "react";
import "./js/jquery.grideditor5.js";
// import "./js/jquery.grideditor.js";
import beautify from "js-beautify";

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

    if (editorContent) {
      $("#myGrid").html(editorContent);
      $("#myGrid").gridEditor("init");
    }

    // Clean up function
    return () => {
      $("#myGrid").gridEditor("remove");
    };
  }, []);

  const getEditorContent = () => {
    const rawContent = $("#myGrid").gridEditor("getHtml");
    const formattedContent = beautify.html(rawContent, {
      indent_size: 2,
      space_in_empty_paren: true,
    });

    setEditorContent(formattedContent);
    console.log("Formatted Editor Content:", formattedContent);
  };

  return (
    <>
      <div className="container fluid">
        <button onClick={getEditorContent} className="btn btn-success">
          Get Content
        </button>
        <div>
          <div id="myGrid" />
        </div>
      </div>
    </>
  );
};

export default GridEditor;
