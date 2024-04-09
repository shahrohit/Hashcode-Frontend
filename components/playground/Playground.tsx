import {
  ProblemDetail,
  ProblemTest,
  ProblemCodeEditor,
} from "@/components/playground";

const Playground = () => {
  return (
    <main className="h-full w-full flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 overflow-auto">
      <section className="border-2 border-primarybdr rounded-lg w-full md:w-2/5">
        <ProblemDetail />
      </section>
      <section className="border-2 border-primarybdr rounded-lg relative w-full md:w-3/5">
        <ProblemCodeEditor />
        <section className="absolute bottom-0 right-0 w-full bg-primarybg">
          <ProblemTest />
        </section>
      </section>
    </main>
  );
};

export default Playground;
