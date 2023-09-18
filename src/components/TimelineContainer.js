import { timelineData } from "../timelineData.js"
import TimelineItem from "../components/TimelineItem.js"
import { BriefcaseIcon} from "@heroicons/react/24/outline";

const Timeline = () => {
    console.log(timelineData)
    if (!timelineData || timelineData.length === 0) {
      return <div>No data to display</div>;
    }
    
    return (
        <>
        <section id="experience">
        <div className="container px-5 pt-10 mx-auto border-t-[3px]">
        <div className="text-center mb-20">
        <BriefcaseIcon className="w-10 inline-block mb-4 text-white" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Experience
            </h1>
            <p className=" text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A timeline of my work experience.
            </p>
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
        </div>
        </section>
      </>
    );
  };
  
  export default Timeline;