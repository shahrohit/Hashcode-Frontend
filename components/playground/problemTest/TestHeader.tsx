import PlaygroundHeaderDiv from "../PlaygroundHeaderDiv";

import Button from "@/components/button/Button";
import { BiCodeCurly } from "react-icons/bi";
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineCommandLine,
} from "react-icons/hi2";
import { FiMaximize } from "react-icons/fi";

const TestHeader = ({
  showTestCase,
  setShowTestCase,
  maximize,
  setMaximize,
}: {
  showTestCase: boolean;
  setShowTestCase: (showTestCase: boolean) => void;
  maximize: boolean;
  setMaximize: (maximize: boolean) => void;
}) => {
  return (
    <PlaygroundHeaderDiv>
      <Button
        text="Test case"
        leftIcon={<HiOutlineCommandLine className="text-primarycol h-5 w-5" />}
        className="h-8 bg-secondaybg px-2 rounded-md font-semibold space-x-1 "
      />
      <Button
        text="Test Result"
        leftIcon={<BiCodeCurly className="text-secondarycol h-5 w-5" />}
        className="h-8 bg-secondaybg px-2 rounded-md font-semibold space-x-1"
      />
      <div
        className="absolute right-4 top-3"
        onClick={() => {
          setMaximize(!maximize);
          setShowTestCase(false);
        }}
      >
        <Button
          leftIcon={<FiMaximize strokeWidth="2" className="w-4 h-4" />}
          className="h-6 w-6 text-primarycol bg-primarycol/20 rounded-full"
        />
      </div>

      <div
        className={`absolute right-12 top-3 ${maximize ? "hidden" : ""}`}
        onClick={() => setShowTestCase(!showTestCase)}
      >
        {showTestCase ? (
          <Button
            leftIcon={<HiChevronDown strokeWidth="1" className="w-5 h-5" />}
            className="h-6 w-6 text-primarycol bg-primarycol/20 rounded-full"
          />
        ) : (
          <Button
            leftIcon={<HiChevronUp strokeWidth="1" className="w-5 h-5" />}
            className="h-6 w-6 text-primarycol bg-primarycol/20 rounded-full"
          />
        )}
      </div>
    </PlaygroundHeaderDiv>
  );
};

export default TestHeader;
