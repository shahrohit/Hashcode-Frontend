import {
  LeftArrowIcon,
  ProblemListIcon,
  RightArrowIcon,
} from "@/components/icon";

import { HeaderLogo } from "../index";
import IconBtn from "@/components/button/IconBtn.component";
import Logo from "@/components/Logo";
import {
  HiMiniListBullet,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import Button from "@/components/button/Button";

const PlaygroundHeaderStart = () => {
  return (
    <div className="flex items-center space-x-1 w-full px-1">
      <Logo logo="/code.png" textSize="2xl" logoStyle="h-10 w-10" />
      <div className="flex items-center hover:bg-primarycol hover:text-white bg-primarycol/20 text-primarycol p-1 px-2 rounded-full space-x-1">
        <Button
          leftIcon={<HiMiniListBullet className="h-5 w-5 " />}
          className=" "
        />
        <span className="hidden xs:block">Problems</span>
      </div>
      <Button
        leftIcon={
          <HiChevronLeft className="h-7 w-7 p-1 rounded-full text-primarycol bg-primarycol/20 hover:bg-primarycol hover:text-white" />
        }
        className="hidden xxs:block"
      />
      <Button
        leftIcon={
          <HiChevronRight className="h-7 w-7 p-1 rounded-full text-primarycol bg-primarycol/20 hover:bg-primarycol hover:text-white" />
        }
        className="hidden xxs:block"
      />
    </div>
  );
};

export default PlaygroundHeaderStart;
