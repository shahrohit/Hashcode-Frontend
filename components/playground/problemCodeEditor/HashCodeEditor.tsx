"use client";
import { useEffect, useState } from "react";
import { MonacoEditor } from "@/components/playground";
import * as monaco from "monaco-editor";
import { useTheme } from "next-themes";

const hashcodeThemeLight: monaco.editor.IStandaloneThemeData = {
  base: "vs",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#e5e7eb",
  },
};
const hashcodeThemeDark: monaco.editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#000000",
  },
};

function getCode(lang: string) {
  if (lang === "cpp")
    return `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello World";\n  return 0;\n}`;
  else if (lang == "java")
    return `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}`;
  else if (lang == "python") return `print("Hello World")`;
  else if (lang == "javascript") return `console.log("Hello World")`;
}

const HashCodeEditor = ({ lang }: { lang: string }) => {
  const [code, setCode] = useState(getCode(lang));

  useEffect(() => {
    setCode(getCode(lang));
  }, [lang]);

  const { resolvedTheme } = useTheme();

  const handleEditorChange = (value?: string) => {
    if (value) setCode(value);
  };

  return (
    <MonacoEditor
      value={code}
      onChange={handleEditorChange}
      defaultLanguage="cpp"
      language={lang}
      defaultValue={`console.log("Hello World")`}
      className="h-full w-full "
      theme={resolvedTheme}
      loading={<div>Loading...</div>}
      options={{
        scrollbar: {
          horizontal: "hidden",
        },
        scrollBeyondLastLine: false,

        fontSize: 18,
        fontFamily: "Fira Code, monospace",
        minimap: {
          enabled: false,
        },

        contextmenu: false,
        suggestOnTriggerCharacters: false,
        quickSuggestions: false,
      }}
      beforeMount={(monaco) => {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: true,
          noSyntaxValidation: true,
          noSuggestionDiagnostics: true,
        });
      }}
      onMount={(_, monaco) => {
        monaco.editor.defineTheme("light", hashcodeThemeLight);
        monaco.editor.defineTheme("dark", hashcodeThemeDark);
        monaco.editor.setTheme(resolvedTheme || "dark");
      }}
    />
  );
};

export default HashCodeEditor;
