import SessionData from "../../types/SessionData.type";

const SessionRow = ({ data, name }: { data: SessionData; name: string }) => {
  return (
    <div className="flex justify-between space-x-5 font-semibold">
      <span className={`text-${name}`}>{name.toUpperCase()}</span>
      <div className="flex justify-start space-x-1 items-center">
        <h2>{data[name].solved}</h2>
        <h2> / </h2>
        <h2 className="text-sm text-primarypara">{data[name].total}</h2>
      </div>
    </div>
  );
};

export default SessionRow;
