import React from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";

const Section1 = (props) => {
  // console.log(props);
  return (
    <div className="h-screen text-black">
      <Navbar />
      <PageContent users={props.users} />
    </div>
  );
};

export default Section1;
