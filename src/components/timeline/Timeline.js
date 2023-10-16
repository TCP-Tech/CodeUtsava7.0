import hackathonData from "../../assets/data/hackathonData";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { ReactComponent as Ghost } from "../../assets/images/pumpkin.svg";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline animate={true} lineColor="white">
        {hackathonData.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              icon={<Ghost/>}
              iconStyle={{backgroundColor: 'var(--secondary-c)'}}
            >
              <h3 className="vertical-timeline-element-title">
                {element.id} {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
