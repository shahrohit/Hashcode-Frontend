import Button from "@/components/button/Button";
import {
  HiOutlineHandThumbUp,
  HiOutlineHandThumbDown,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";

const DescriptionFooter = () => {
  return (
    <div className="h-12 flex items-center space-x-2 px-2 text-sm border-t-2 border-primarybdr">
      <Button
        text="55.5K"
        leftIcon={<HiOutlineHandThumbUp />}
        className="space-x-2 h-8 hover:bg-green border-easy text-easy bg-easy/10  px-2 rounded-lg"
      />
      <Button
        leftIcon={<HiOutlineHandThumbDown />}
        className="h-8 border-hard text-hard bg-hard/10  px-2 rounded-lg"
      />
      <Button
        text="788"
        leftIcon={<HiOutlineChatBubbleBottomCenterText />}
        className="space-x-2 h-8 hover:bg-primary border-primarycol text-primarycol bg-primarycol/10  px-2 rounded-lg"
      />
    </div>
  );
};

export default DescriptionFooter;
