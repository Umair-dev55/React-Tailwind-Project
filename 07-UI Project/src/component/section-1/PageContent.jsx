import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const PageContent = () => {
  return (
    <>
      <div className="py-10 px-18 h-[88vh] gap-6 flex justify-between items-center">
      <LeftContent />
      <RightContent />
      </div>
    </>
  );
};

export default PageContent;
