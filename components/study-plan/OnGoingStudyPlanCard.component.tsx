import StudyPlan from "@/types/onGoingStudyPlan.type";
import Image from "next/image";

const OnGoingStudyPlanCard = ({ study }: { study: StudyPlan }) => {
  return (
    <div className="flex items-center px-5 space-x-3 bg-secondaybg rounded-lg">
      <div className="relative w-16 h-16">
        <Image
          src={study.img}
          fill={true}
          alt={study.title}
          className="h-16 w-16 rounded-full"
        />
      </div>

      <div className="w-[75%]">
        <h2 className="font-semibold">{study.title}</h2>
        <div className="flex items-center space-x-2 w-full">
          <div className="w-full h-2 rounded-full bg-primarybg ">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-secondaysh`}
              style={{ width: `${Math.min(Math.abs(study.progress), 100)}%` }}
            ></div>
          </div>
          <span className="text-sm font-semibold">
            {Math.min(Math.abs(study.progress), 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default OnGoingStudyPlanCard;
