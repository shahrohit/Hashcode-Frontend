import { SolvedIcon } from "@/components/icon";
import { LuCheckCircle } from "react-icons/lu";

const ProblemStatementTitle = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>1. Two Sum</h1>
      <div className="flex items-center space-x-1 text-secondarycol">
        <span>Solved</span>
        <LuCheckCircle className="h-5 w-5" />
      </div>
    </div>
  );
};

export default ProblemStatementTitle;
