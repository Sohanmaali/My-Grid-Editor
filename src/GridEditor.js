import React, { useEffect } from "react";
import "./js/jquery.grideditor.js";

const GridEditor = () => {
  useEffect(() => {
    if (typeof $ === "undefined" || typeof $.fn.gridEditor === "undefined") {
      console.error("jQuery or GridEditor not loaded!");
      return;
    }

    $("#myGrid").gridEditor({
      content_types: ["ckeditor"],
      ckeditor: { config: { language: "en" } },
    });

    return () => {
      $("#myGrid").gridEditor("destroy");
    };
  }, []);

  return <div id="myGrid" />;
};

export default GridEditor;
