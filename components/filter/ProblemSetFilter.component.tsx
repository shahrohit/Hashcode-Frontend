import InputText from "../inputField/InputText.component";
import Button from "../button/Button";
import { HiChevronDown, HiCog8Tooth, HiMagnifyingGlass } from "react-icons/hi2";

const FilterBtn = ({
  text,
  rightIcon,
}: {
  text: string;
  rightIcon?: React.ReactNode;
}) => {
  return <Button text={text} radius="md" rightIcon={rightIcon} className="" />;
};

const ProblemSetFilter = () => {
  let style =
    "bg-secondaybg p-2 mx-2 my-1 space-x-2 hover:text-primaryhead rounded-md";
  return (
    <div className="flex flex-wrap items-center text-primarypara text-md font-semibold *:grow">
      <Button
        className={style}
        text="Lists"
        rightIcon={<HiChevronDown className="h-5 w-5" />}
      />
      <Button
        text="Difficulty"
        className={style}
        rightIcon={<HiChevronDown />}
      />
      <Button
        text="Status"
        className={style}
        rightIcon={<HiChevronDown className="h-5 w-5" />}
      />
      <Button
        text="Tags"
        className={style}
        rightIcon={<HiChevronDown className="h-5 w-5" />}
      />
      <Button
        text="Settings"
        className={style}
        rightIcon={<HiCog8Tooth className="h-5 w-5" />}
      />
      <InputText
        placeholder="Search questions"
        icon={<HiMagnifyingGlass className="h-5 w-5" />}
      />
    </div>
  );
};

export default ProblemSetFilter;
