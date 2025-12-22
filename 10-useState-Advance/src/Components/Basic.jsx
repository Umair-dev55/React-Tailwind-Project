import React from "react";
import { useState } from "react";

const Basics = () => {
  const [num, setNum] = useState(0);
  let btnClicked = () => {
    // Set Num Work async
    console.log(num);
    setNum(num + 10);
    console.log(num);
  };
  return (
    <div className="basic">
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  );
};

export default Basics;
