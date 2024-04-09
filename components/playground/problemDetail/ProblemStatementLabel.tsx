import { HiOutlineLightBulb, HiOutlineTag } from "react-icons/hi2";

const ProblemStatementLabel = () => {
  return (
    <div className="my-2 flex space-x-2">
      <span className="bg-easy/20 py-1 px-2 rounded-full text-sm text-easy">
        Easy
      </span>
      <button className="flex items-center space-x-1 bg-secondaybg py-1 px-2 rounded-full text-sm">
        <HiOutlineTag />
        <span>Topics</span>
      </button>
      <button className="flex items-center space-x-1 bg-secondaybg py-1 px-2 rounded-full text-sm">
        <HiOutlineLightBulb />
        <span>Hint</span>
      </button>
    </div>
  );
};

export default ProblemStatementLabel;
