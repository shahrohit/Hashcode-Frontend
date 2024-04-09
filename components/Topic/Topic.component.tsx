const Topic = ({ topic }: { topic: Topic }) => {
  return (
    <div className="grow flex items-center justify-center space-x-1 m-1 text-primarypara tracking-wide cursor-pointer font-semibold hover:text-primaryhead rounded-full bg-secondaybg p-2">
      <h3>{topic.title}</h3>
      <span className="">({topic.totalQuestion}) </span>
    </div>
  );
};

export default Topic;
