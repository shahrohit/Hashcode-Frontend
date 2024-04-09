import { HiFire } from "react-icons/hi2";
import Button from "./button/Button";
const Streak = () => {
  const completed = true;

  return (
    <Button
      text={100}
      className={` p-1 pr-2 ${completed ? "bg-hard/20" : ""}`}
      radius="full"
      leftIcon={
        <HiFire className={`h-7 w-7 ${completed ? "text-hard" : ""}`} />
      }
    />
  );
};

export default Streak;
