import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  
  return (
    <div className=" h-full w-80 shrink-0  relative *:rounded-4xl">
      <img className="h-full object-cover" src={props.img} alt="" />
      <RightCardContent
        color={props.color}
        intro={props.intro}
        tag={props.tag}
        id={props.id}
      />
    </div>
  );
};

export default RightCard;
