import Problem from "@/types/Problem.type";
import { LuCheckCircle } from "react-icons/lu";
import { FaCircleExclamation } from "react-icons/fa6";
import Link from "next/link";

const ProblemRow = ({ problem }: { problem: Problem }) => {
  return (
    <div
      className={`flex justify-between items-center space-x-1 md:space-x-2 odd:bg-secondaybg font-semibold rounded-md`}
    >
      <div className="p-2 w-28">
        {problem.status &&
          (problem.status === "solved" ? (
            <LuCheckCircle className="h-6 w-6 text-secondarycol" />
          ) : (
            <FaCircleExclamation className="h-6 w-6 text-medium" />
          ))}
      </div>
      <div className="w-full p-2">
        <span>{problem.questionNumber}. </span>
        <Link href={`/problems/${problem.link}`}>{problem.title}</Link>
      </div>
      <div className="hidden sm:flex items-center justify-between p-2 w-1/3">
        <span>{problem.acceptance}%</span>
      </div>
      <div className="w-1/3 p-2 flex items-center justify-between">
        <span className={`text-${problem.difficulty.toLowerCase()}`}>
          {problem.difficulty}
        </span>
      </div>
    </div>
  );
};

export default ProblemRow;
