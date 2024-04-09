"use client";
import { CodeEditorContainer, CodeEditorHeader } from "@/components/playground";
import { useState } from "react";

const ProblemCodeEditor = () => {
  const [langOption, setLangOption] = useState({
    lang: "cpp",
    name: "C++",
    showLangOption: false,
  });

  let language = [
    {
      lang: "cpp",
      name: "C++",
    },
    {
      lang: "java",
      name: "Java",
    },
    {
      lang: "python",
      name: "Python",
    },
    {
      lang: "javascript",
      name: "JavaScript",
    },
  ];

  return (
    <div className="h-[500px] md:h-full relative">
      <CodeEditorHeader langOption={langOption} setLangOption={setLangOption} />
      <CodeEditorContainer
        langOption={langOption}
        setLangOption={setLangOption}
      />
      {langOption.showLangOption && (
        <div className="absolute  top-14 left-2 flex flex-col bg-primarybg border-2 border-primarybdr rounded-md">
          {language.map((lang) => (
            <button
              key={lang.lang}
              className={`m-2 py-1 px-2 rounded-lg font-semibold ${
                langOption.lang === lang.lang
                  ? "bg-primarycol/20 text-primarycol"
                  : "bg-secondaybg"
              }`}
              onClick={() => {
                setLangOption({
                  lang: lang.lang,
                  name: lang.name,
                  showLangOption: false,
                });
              }}
            >
              <p>{lang.name}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProblemCodeEditor;
