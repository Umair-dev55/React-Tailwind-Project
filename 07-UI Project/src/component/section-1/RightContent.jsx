import React from "react";
import RightCard from "./RightCard";

const RightContent = () => {
  return (
    <div className="h-full w-2/3 py-2 flex gap-4 overflow-auto ">
      
      <RightCard />
      <RightCard />
      <RightCard />
    </div>
  );
};

export default RightContent;
