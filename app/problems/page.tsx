import Calender from "@/components/calender/Calender.component";
import Session from "@/components/dashboard/Session.component";
import ProblemSection from "@/components/problem/ProblemSection.component";
import OnGoingStudyPlan from "@/components/study-plan/OnGoingStudyPlan.component";
import StudyPlan from "@/components/study-plan/StudyPlan.component";
import TopicContainer from "@/components/Topic/TopicContainer.component";

const Problems = () => {
  return (
    <main className="xl:w-[95%] flex flex-col xl:flex-row justify-between items-start xl:space-x-3 py-5 px-2 m-auto">
      <section className="flex flex-col space-y-4 w-full p-2 border-2 border-primarybdr rounded-lg">
        <StudyPlan />

        <TopicContainer />

        <ProblemSection />
      </section>

      <section className="flex flex-col space-y-2 w-full xl:w-[500px] my-2 xl:my-0 ">
        <Calender />
        <section className="flex flex-wrap *:m-1 *:grow *:min-w-[300px] *:w-fit *:border-2 *:border-primarybdr *:rounded-lg">
          <Session />
          <OnGoingStudyPlan />
        </section>
      </section>
    </main>
  );
};

export default Problems;
