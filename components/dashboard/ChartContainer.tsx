import getChartInfo from "@/constant/ChartInfo";
import Circle from "./Circle.component";

const Chart = ({
  easy,
  medium,
  hard,
}: {
  easy: number;
  medium: number;
  hard: number;
}) => {
  let data = getChartInfo();
  return (
    <svg
      className="h-full  origin-center -rotate-90 transform"
      viewBox="0 0 100 100"
    >
      <circle
        fill="none"
        cx={data.centerX}
        cy={data.centerY}
        r={data.radius}
        strokeWidth={data.strokeWidth}
        strokeLinecap="square"
        stroke="currentColor"
        className="text-primarypara/10"
      ></circle>

      <Circle
        name="easy"
        length={easy}
        color="text-easy"
        offset={0}
        data={data}
      />
      <Circle
        name="medium"
        color="text-medium"
        length={medium}
        offset={-easy}
        data={data}
      />
      <Circle
        name="hard"
        color="text-hard"
        length={hard}
        offset={-easy - medium}
        data={data}
      />
    </svg>
  );
};

export default Chart;
