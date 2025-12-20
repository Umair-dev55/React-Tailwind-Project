import React, { useState } from "react";
import BasicsUseState from "./Components/BasicsUseState";
import Counter from "./Components/Counter";

const App = () => {
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
      <BasicsUseState />
      <Counter />
    </div>
  );
};

export default App;
