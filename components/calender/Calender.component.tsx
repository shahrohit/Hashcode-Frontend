"use client";
import getMonthInfo from "@/utils/getMonthInfo";
import { useEffect, useState } from "react";
import createCalender from "@/utils/createCalander.utils";
import CalenderHeader from "./CalenderHeader.component";
import CalenderBody from "./CalenderBody.component";

const Calender = () => {
  const [date, setDate] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [monthInfo, setMonthInfo] = useState({
    ...getMonthInfo(date.year, date.month),
    hasNext: date.month < new Date().getMonth(),
    hasPrev: date.month > 0,
  });

  const [calender, setCalender] = useState(createCalender(monthInfo));

  useEffect(() => {
    setMonthInfo({
      ...getMonthInfo(date.year, date.month),
      hasNext: date.month < new Date().getMonth(),
      hasPrev: date.month > 0,
    });
  }, [date]);

  useEffect(() => {
    setCalender(createCalender(monthInfo));
  }, [monthInfo]);

  const handlePrevMonth = () => {
    if (monthInfo.hasPrev) {
      setDate((prevDate) => ({ ...prevDate, month: prevDate.month - 1 }));
    }
  };
  const handleNextMonth = () => {
    if (monthInfo.hasNext) {
      setDate((prevDate) => ({ ...prevDate, month: prevDate.month + 1 }));
    }
  };

  return (
    <div className="mx-1 border-2 border-primarybdr rounded-lg p-2">
      <CalenderHeader
        date={date}
        monthInfo={monthInfo}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />

      <CalenderBody date={date} monthInfo={monthInfo} calender={calender} />
    </div>
  );
};

export default Calender;
