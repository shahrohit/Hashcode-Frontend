import getMonth from "@/utils/getMonth.utills";
import { LeftArrowIcon, RightArrowIcon } from "@/components/icon";
import CalenderDate from "@/types/CalenderDate.type";
import CalenderMonthInfo from "@/types/CalenderMonthInfo.type";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
type Props = {
  date: CalenderDate;
  monthInfo: CalenderMonthInfo;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
};

const CalenderHeader = ({
  date,
  monthInfo,
  handleNextMonth,
  handlePrevMonth,
}: Props) => {
  return (
    <div className="flex justify-between items-center p-2">
      <button
        className={` rounded-full p-1 ${
          monthInfo.hasPrev ? "bg-primarycol" : "bg-primarycol/20"
        }`}
        onClick={handlePrevMonth}
        disabled={!monthInfo.hasPrev}
      >
        <HiChevronLeft className={`h-6 w-6 text-white`} />
      </button>
      <h1 className="">
        {getMonth(date.month)} {date.year}
      </h1>
      <button
        className={` rounded-full p-1 ${
          monthInfo.hasNext ? "bg-primarycol" : "bg-primarycol/20"
        }`}
        onClick={handleNextMonth}
        disabled={!monthInfo.hasNext}
      >
        <HiChevronRight className={`h-6 w-6 text-white`} />
      </button>
    </div>
  );
};

export default CalenderHeader;
