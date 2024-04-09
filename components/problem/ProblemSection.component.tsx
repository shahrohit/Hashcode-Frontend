import problemsList from "@/constant/ProblemsList";
import ProblemSetFilter from "../filter/ProblemSetFilter.component";
import ProblemHeader from "./ProblemHeader.component";
import ProblemRow from "./ProblemRow.component";
import Button from "../button/Button";
import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const ProblemSection = () => {
  return (
    <section>
      <h1>Problem Set</h1>
      <ProblemSetFilter />
      <br />
      <ProblemHeader />
      <div className="flex flex-col space-y-1">
        {problemsList?.map((problem) => {
          return <ProblemRow key={problem.questionNumber} problem={problem} />;
        })}
      </div>
      <div className="flex justify-between mt-2">
        <Button
          text="50 / page"
          rightIcon={<HiChevronDown />}
          className="bg-secondaybg p-2 rounded-md"
        />
        <div className="flex space-x-1">
          <Button
            leftIcon={<HiChevronLeft />}
            className="bg-secondaybg p-2 rounded-md"
          />
          <Button text="1" className="bg-secondaybg p-2 px-3 rounded-md" />
          <Button
            leftIcon={<HiChevronRight />}
            className="bg-secondaybg p-2 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
