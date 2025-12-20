import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    setCount(count - 1);
  };
  let jump = () => {
    setCount(count + 5);
  };
  return (
    <div>
      <div className="parent">
        <h1 className="head">{count}</h1>
        <button className="btn" onClick={increase}>
          Increase
        </button>
        <button className="btn" onClick={decrease}>
          Decrease
        </button>
        <button className="btn" onClick={jump}>
          Jump 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
