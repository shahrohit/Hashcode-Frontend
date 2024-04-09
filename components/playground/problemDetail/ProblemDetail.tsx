import { Description, DetailHeader } from "@/components/playground";

const ProblemDetail = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <DetailHeader />
      <Description />
    </div>
  );
};

export default ProblemDetail;
