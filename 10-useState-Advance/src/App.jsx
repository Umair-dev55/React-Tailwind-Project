import React from "react";
import Basics from "./Components/Basic";
import Array from "./Array";
import Counter from "./Components/Counter";
import BatchUpdate from "./Components/BatchUpdate";

const App = () => {
  return (
    <div className="">
      <Array />
      <Counter />
      <Basics />
      <BatchUpdate />
    </div>
  );
};

export default App;
