import {
  ProblemMarkDown,
  ProblemStatementLabel,
  ProblemStatementTitle,
} from "@/components/playground";

const ProblemStatement = () => {
  return (
    <div
      className="p-4 md:overflow-auto hide-scrollbar  "
      style={{ height: "calc(100% - 3rem" }}
    >
      <ProblemStatementTitle />
      <ProblemStatementLabel />
      <ProblemMarkDown />
    </div>
  );
};

export default ProblemStatement;
