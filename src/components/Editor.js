import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = (props) => {
  return <AceEditor theme="monokai" {...props} />;
};

Editor.defaultProps = {
  mode: "javascript",
  fontSize: 14,
  showGutter: true,
  showPrintMargin: false,
  highlightActiveLine: true,
  value: "",
  style: {
    width: "100%",
    height: "50vh",
  },
  setOptions: {
    useWorker: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 2,
  },
};

export default Editor;
