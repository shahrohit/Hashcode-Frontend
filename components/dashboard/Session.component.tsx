import sessionData from "@/constant/SessionData";
import ChartContainer from "./ChartContainer";
import getChartInfo from "@/constant/ChartInfo";
import SessionRow from "./SessionRow.component";

const Session = () => {
  const data = sessionData;
  let totalSolved = data.easy.solved + data.medium.solved + data.hard.solved;
  let totalQuestion = data.easy.total + data.medium.total + data.hard.total;
  let chartInfo = getChartInfo();

  let easy = (
    (data.easy.solved / totalQuestion) *
    chartInfo.circumference
  ).toFixed(2);

  let medium = (
    (data.medium.solved / totalQuestion) *
    chartInfo.circumference
  ).toFixed(2);

  let hard = (
    (data.hard.solved / totalQuestion) *
    chartInfo.circumference
  ).toFixed(2);

  return (
    <div className="p-2 w-full">
      <h1 className="">Session</h1>
      <div className="flex space-x-3 h-32 w-fit px-2 relative">
        <ChartContainer easy={+easy} medium={+medium} hard={+hard} />
        <div className="flex flex-col items-center absolute top-8 left-10 font-semibold">
          <h2 className="text-primarypara">All</h2>
          <h2 className="text-primaryhead">{totalSolved}</h2>
          <h2 className="border-t-2 border-t-primarybdr text-sm text-primarypara">
            {totalQuestion}
          </h2>
        </div>

        <div className="flex flex-col space-y-3 justify-center ">
          <SessionRow data={data} name="easy" />
          <SessionRow data={data} name="medium" />
          <SessionRow data={data} name="hard" />
        </div>
      </div>
    </div>
  );
};

export default Session;
