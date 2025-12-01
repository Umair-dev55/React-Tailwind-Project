import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="  h-full w-60 gap-2  overflow-hidden relative *:rounded-4xl">
      <img
        className="h-full w-full object-cover "
        src="https://i.pinimg.com/736x/d3/ab/20/d3ab200e47233f96a5279af578b0fa68.jpg"
        alt=""
      />
     <RightCardContent/>
    </div>
  );
};

export default RightCard;
