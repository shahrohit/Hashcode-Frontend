import Playground from "@/components/playground";

type Props = {
  params: { problemName: string };
};

const ProblemDescription = ({ params }: Props) => {
  return (
    <div className="p-2" style={{ height: "calc(100vh - 3rem)" }}>
      <Playground />
    </div>
  );
};

export default ProblemDescription;
