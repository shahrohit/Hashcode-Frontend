import onGoingStudyPlan from "@/constant/OnGoingStudyPlanL";
import OnGoingStudyPlanCard from "./OnGoingStudyPlanCard.component";

const OnGoingStudyPlan = () => {
  return (
    <div className="w-full p-2 ">
      <h1>Ongoing Study Plan</h1>

      <div className="flex flex-col space-y-4 my-2">
        {onGoingStudyPlan.map((study) => {
          return <OnGoingStudyPlanCard key={study.title} study={study} />;
        })}
      </div>
    </div>
  );
};

export default OnGoingStudyPlan;
