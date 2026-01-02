import React, { useState } from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  let increase = () => {
    setCounter(Counter + 5);
  };
  let decrease = () => {
    setCounter(Counter - 5);
  };
  return (
    <div>
      <h1>{Counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
