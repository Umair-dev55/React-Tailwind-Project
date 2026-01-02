import React, { useState } from "react";

const Array = () => {
  const [val, setVal] = useState([10, 20, 30, 40, 50]);
  let btnClick = () => {
    // destructuring method
    let newVal = [...val];
    newVal = [100, 200, 300, 400, 500];
    setVal(newVal);

  };
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={btnClick}>Click me </button>
    </div>
  );
};

export default Array;
