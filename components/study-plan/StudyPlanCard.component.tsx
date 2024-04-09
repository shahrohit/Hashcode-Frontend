import StudyPlan from "@/types/StudyPlan.type";
import Image from "next/image";

type Props = {
  study: StudyPlan;
};

const StudyPlanCard = ({ study }: Props) => {
  return (
    <div className="h-20 flex space-x-2 bg-secondaybg p-1 rounded-md">
      <div className="w-16 sm:w-24 rounded-md relative">
        <Image
          src={study.img}
          fill={true}
          alt={study.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="font-semibold">{study.title}</h2>
        <p className="text-sm xtext-primarypara">{study.description}</p>
      </div>
    </div>
  );
};

export default StudyPlanCard;
