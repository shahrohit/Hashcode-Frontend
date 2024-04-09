import topicList from "@/constant/TopicList";
import Topic from "./Topic.component";

const TopicContainer = () => {
  return (
    <div>
      <h1>Topic</h1>
      <div className="flex flex-wrap">
        {topicList?.map((topic) => {
          return <Topic key={topic.title} topic={topic} />;
        })}
      </div>
    </div>
  );
};

export default TopicContainer;
