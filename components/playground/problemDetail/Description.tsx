import { DescriptionFooter, ProblemStatement } from "@/components/playground";

const Description = () => {
  return (
    <div className="flex flex-col" style={{ height: "calc(100% - 3rem)" }}>
      <ProblemStatement />
      <DescriptionFooter />
    </div>
  );
};

export default Description;
