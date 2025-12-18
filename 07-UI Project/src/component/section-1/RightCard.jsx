import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  
  return (
    <div className="  h-full w-70 shrink-0  relative *:rounded-4xl">
      <img
        className="h-full w-full object-cover
"
        src="https://i.pinimg.com/736x/c1/25/ae/c125ae1ab262ce5368aa4079f8a597c3.jpg"
        alt=""
      />
     <RightCardContent/>
    </div>
  );
};

export default RightCard;
