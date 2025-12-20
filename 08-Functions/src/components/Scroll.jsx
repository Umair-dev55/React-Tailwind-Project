import React from "react";

const Scroll = () => {
  return (
    <div
      className="*:h-screen"
      onWheel={(elem) => {
        console.log(elem.deltaY);
        if (elem.deltaY >= 0.28282901844482) {
          console.log("Scroll Down");
        } else {
          console.log("Scroll Up");
        }
      }}
    >
      <div className="bg-cyan-950"></div>
      <div className="bg-cyan-800"></div>
      <div className="bg-cyan-600"></div>
    </div>
  );
};

export default Scroll;
