import { HashCodeEditor } from "@/components/playground";

type Props = {
  langOption: {
    lang: string;
    name: string;
    showLangOption: boolean;
  };

  setLangOption: (langOption: {
    lang: string;
    name: string;
    showLangOption: boolean;
  }) => void;
};

const CodeEditorContainer = ({ langOption, setLangOption }: Props) => {
  return (
    <div
      className="py-2"
      style={{
        height: "calc(100% - 6rem)",
      }}
    >
      <HashCodeEditor lang={langOption.lang} />
    </div>
  );
};

export default CodeEditorContainer;
