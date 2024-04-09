import ChartInfo from "@/types/ChartInfo.type";

type Props = {
  name?: string;
  color: string;
  length: number;
  offset: number;
  data: ChartInfo;
};

const Circle = ({ length, color, offset, data }: Props) => {
  return (
    <circle
      fill="none"
      cx={data.centerX}
      cy={data.centerY}
      r={data.radius}
      strokeWidth={data.strokeWidth}
      strokeLinecap="round"
      stroke="currentColor"
      className={"cursor-pointer " + color}
      strokeDasharray={`${length} 265`}
      strokeDashoffset={offset}
    ></circle>
  );
};
export default Circle;
