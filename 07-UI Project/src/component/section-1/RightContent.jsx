import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  
  return (
    <div id="right" className="h-full w-2/3 py-2 flex gap-4 overflow-auto">
      {props.users.map((elem, idx) => {
        return (
          <RightCard
            // key={idx}
            id={idx}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
