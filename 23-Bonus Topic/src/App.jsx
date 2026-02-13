import React from "react";
import Navbar from "./Component/Navbar";
import { useState } from "react";

const App = () => {
  const [Theme, setTheme] = useState("light");
  return (
    <div>
      <h1>The Theme is {Theme}</h1>
      <Navbar theme={Theme} />
    </div>
  );
};

export default App;
