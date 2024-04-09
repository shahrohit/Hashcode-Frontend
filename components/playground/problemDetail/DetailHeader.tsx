import Button from "@/components/button/Button";
import { PlaygroundHeaderDiv } from "@/components/playground";
import {
  HiOutlineBookOpen,
  HiOutlineClipboardDocument,
  HiOutlineDocumentText,
} from "react-icons/hi2";

const DetailHeader = () => {
  return (
    <PlaygroundHeaderDiv>
      <Button
        text="Description"
        leftIcon={<HiOutlineDocumentText className="h-5 w-5 text-primarycol" />}
        className="h-8 space-x-1  px-2 bg-secondaybg  rounded-md font-semibold "
      />
      <Button
        text="Editorial"
        leftIcon={<HiOutlineBookOpen className="h-5 w-5  text-medium" />}
        className="h-8 space-x-1  px-2 bg-secondaybg rounded-md font-semibold"
      />
      <Button
        text="Submissions"
        leftIcon={
          <HiOutlineClipboardDocument className="h-5 w-5  text-secondarycol" />
        }
        className="h-8 space-x-1  px-2 bg-secondaybg rounded-md font-semibold"
      />
    </PlaygroundHeaderDiv>
  );
};

export default DetailHeader;
