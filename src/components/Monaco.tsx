import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

const EditorWithPreview: React.FC = () => {
  const [language, setLanguage] = useState<"html" | "css" | "javascript">("html");
  const [htmlCode, setHtmlCode] = useState("<h1>Hello World</h1>");
  const [cssCode, setCssCode] = useState("body { background: #f0f0f0; }");
  const [jsCode, setJsCode] = useState("console.log('Hello from JS');");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getCurrentCode = () => {
    if (language === "html") return htmlCode;
    if (language === "css") return cssCode;
    if (language === "javascript") return jsCode;
  };

  const setCurrentCode = (val: string) => {
    if (language === "html") setHtmlCode(val);
    if (language === "css") setCssCode(val);
    if (language === "javascript") setJsCode(val);
  };

  const handleRun = () => {
    const src = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    if (iframeRef.current) {
      iframeRef.current.srcdoc = src;
    }
  };

  return (
    <div className="editor-preview-app" style={{ padding: "1rem" }}>
      {/* Controls */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "html" | "css" | "javascript")}
          style={{ padding: "0.5rem" }}
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </select>

        <button
          onClick={handleRun}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007acc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Run / Preview
        </button>
      </div>

      {/* Editor */}
      <div style={{ height: "400px" }}>
        <Editor
          language={language}
          theme="vs-dark"
          value={getCurrentCode()}
          onChange={(value) => setCurrentCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true
          }}
        />
      </div>

      {/* Preview */}
      <div style={{ marginTop: "1rem" }}>
        <h3>🔍 Live Preview</h3>
        <iframe
          ref={iframeRef}
          sandbox="allow-scripts"
          title="preview"
          style={{
            width: "100%",
            height: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px"
          }}
        />
      </div>
    </div>
  );
};

export default EditorWithPreview;
