import { useState } from "react";

type Props = {
  day: string | number;
  date: {
    day: number;
    month: number;
    year: number;
  };
};
const CalnderDay = ({ day, date }: Props) => {
  if (day == -1) return <span></span>;
  const currDate = new Date();
  const today =
    +day === currDate.getDate() && date.month === currDate.getMonth();
  const nextDays =
    +day > currDate.getDate() && date.month === currDate.getMonth();

  const todayStyle = today
    ? "w-10 h-10 rounded-full bg-primarycol text-white"
    : "h-1/2 w-1/2 hover:text-primarycol";

  return (
    <div className="flex justify-center items-center h-12 font-semibold text-center">
      {typeof day === "number" ? (
        <button
          disabled={nextDays}
          className={`flex items-center justify-center ${todayStyle} disabled:text-primarypara`}
        >
          {day}
        </button>
      ) : (
        <span>{day}</span>
      )}
    </div>
  );
};

//

export default CalnderDay;
