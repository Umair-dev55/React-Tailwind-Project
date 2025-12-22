import React, { useState } from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(5);
  let increase = () => {
    setCounter(Counter + 5);
  };
  let Decrease = () => {
    setCounter(Counter - 5);
  };
  return (
    <div className="counter">
      <h1>{Counter}</h1>
      <button className="" onClick={increase}>
        Increse
      </button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
