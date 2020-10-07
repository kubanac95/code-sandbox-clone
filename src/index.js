import React, { useRef } from "react";

import Editor from "./components/Editor";

import { useLocalStorage, useDebounce } from "react-use";

const App = () => {
  const frame = useRef(null);

  const [html, setHtml] = useLocalStorage("cs-html", "");
  const [js, setJs] = useLocalStorage("cs-js", "");
  const [css, setCss] = useLocalStorage("cs-css", "");

  useDebounce(
    () => {
      const content = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
  `;

      const doc = frame.current.contentDocument;

      if (!doc) {
        return;
      }

      doc.open("text/html", "replace");
      doc.write(content);
      doc.close();
    },
    [250],
    [html, js, css]
  );

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "50vh" }}>
        <div className="col">
          <Editor mode="html" value={html} onChange={setHtml} />
        </div>

        <div className="col">
          <Editor mode="css" value={css} onChange={setCss} />
        </div>
        <div className="col">
          <Editor mode="javascript" value={js} onChange={setJs} />
        </div>
      </div>
      <div className="row" style={{ minHeight: "50vh" }}>
        <div className="col">
          <iframe
            ref={frame}
            title="Output"
            sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            frameBorder="0"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
