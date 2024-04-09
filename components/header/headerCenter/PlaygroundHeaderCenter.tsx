import Button from "@/components/button/Button";
import IconBtn from "@/components/button/IconBtn.component";
import { HiOutlineCloudArrowUp, HiPlay } from "react-icons/hi2";

const PlaygroundHeaderCenter = () => {
  return (
    <div className="flex justify-center h-8 space-x-2">
      <Button
        text="Run"
        leftIcon={<HiPlay className=" h-7 w-7" />}
        className="space-x-1 font-semibold text-primarycol bg-primarycol/20 px-2 rounded-md"
      />
      <Button
        text="Submit"
        leftIcon={<HiOutlineCloudArrowUp className=" h-7 w-7" />}
        className="space-x-1 text-green font-semibold text-secondarycol bg-secondarycol/20 px-2 rounded-md"
      />
    </div>
  );
};

export default PlaygroundHeaderCenter;
