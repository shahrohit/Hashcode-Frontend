import React from "react";
import CalenderDay from "./CalenderDay.component";
import CalenderMonthInfo from "@/types/CalenderMonthInfo.type";
import CalenderDate from "@/types/CalenderDate.type";

type Props = {
  date: CalenderDate;
  monthInfo: CalenderMonthInfo;
  calender: CalenderBoard;
};

const CalenderBody = ({ date, monthInfo, calender }: Props) => {
  let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className={`my-3 grid grid-rows-${monthInfo.row + 1} grid-cols-7`}>
      {dayName.map((day) => {
        return <CalenderDay key={day} day={day} date={date} />;
      })}

      {calender.map((day, index) => {
        return <CalenderDay key={index} date={date} day={day} />;
      })}
    </div>
  );
};

export default CalenderBody;
