import React from "react";
import Scroll from "./components/Scroll";
import General from "./General";

const App = () => {
  return (
    <>
      <div
        className="size-60 bg-cyan-800"
        onMouseMove={(elem) => {
          console.log(elem.clientY);
        }}
      >
        Mouse Move
      </div>
      <Scroll />
      <General />
    </>
  );
};

export default App;
