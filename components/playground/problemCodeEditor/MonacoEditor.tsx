import dynamic from "next/dynamic";
const MonacoEditor = dynamic(
  () => import("@monaco-editor/react"),
  { ssr: false } // Disable SSR for Monaco
);
export default MonacoEditor;
