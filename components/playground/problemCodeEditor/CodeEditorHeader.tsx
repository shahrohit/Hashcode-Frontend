import PlaygroundHeaderDiv from "../PlaygroundHeaderDiv";
import Button from "@/components/button/Button";
import {
  HiArrowPath,
  HiChevronDown,
  HiOutlineCodeBracket,
} from "react-icons/hi2";
import { HiRefresh } from "react-icons/hi";

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

const CodeEditorHeader = ({ langOption, setLangOption }: Props) => {
  return (
    <PlaygroundHeaderDiv>
      <Button
        text="Code"
        leftIcon={
          <HiOutlineCodeBracket className="h-5 w-5  text-secondarycol" />
        }
        className="h-8 bg-secondaybg px-2 rounded-md space-x-1 font-semibold"
      />

      <Button
        text={langOption.name}
        rightIcon={<HiChevronDown className="h-5 w-5 " />}
        className="h-8 bg-secondaybg px-2 rounded-md space-x-1 font-semibold"
        onClick={() =>
          setLangOption({
            ...langOption,
            showLangOption: !langOption.showLangOption,
          })
        }
      />

      <Button
        leftIcon={<HiArrowPath className="h-5 w-5 " />}
        className="h-8 bg-secondaybg px-2 rounded-md"
      />
    </PlaygroundHeaderDiv>
  );
};

export default CodeEditorHeader;
