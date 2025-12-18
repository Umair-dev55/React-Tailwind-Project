import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const PageContent = (props) => {
  return (
    <>
      <div className="py-8 px-12 h-[88vh] gap-12 flex  items-center">
      <LeftContent />
      <RightContent users={props.users} />
      </div>
    </>
  );
};

export default PageContent;
