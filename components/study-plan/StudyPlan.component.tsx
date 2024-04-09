import studyPlanList from "@/constant/StduyPlanList";
import StudyPlanCard from "./StudyPlanCard.component";

const StudyPlan = () => {
  return (
    <section className="">
      <div className="pb-3 flex justify-between items-center">
        <h1 className="">Study Plan</h1>
        <button className="p-1 rounded-md hover:bg-primarycol text-primary hover:text-white hover:bg-primary">
          See All
        </button>
      </div>
      <div className="grid grid-rows-6 grid-cols-1 xmd:grid-rows-3 xmd:grid-cols-2 gap-3 lg:grid-rows-2 lg:grid-cols-3">
        {studyPlanList?.map((study) => {
          return <StudyPlanCard key={study.title} study={study} />;
        })}
      </div>
    </section>
  );
};

export default StudyPlan;
