import React from "react";
import { HiChevronDown } from "react-icons/hi2";

const ProblemHeader = () => {
  return (
    <div className="flex justify-between space-x-1 md:space-x-2 font-semibold">
      <div className="w-28 p-2">Status</div>
      <div className="flex items-center w-full p-2 justify-between">
        <span>Title</span>
        <HiChevronDown className="h-5 w-5" />
      </div>
      <div className="hidden sm:flex items-center justify-between p-2 w-1/3">
        <span>Acceptance</span>
        <HiChevronDown className="h-5 w-5" />
      </div>
      <div className="w-1/3 p-2 flex items-center justify-between">
        <span>Difficulty</span>
        <HiChevronDown className="h-5 w-5" />
      </div>
    </div>
  );
};

export default ProblemHeader;
