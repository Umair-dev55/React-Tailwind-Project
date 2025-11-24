import React from "react";
import cards from "./components/card";
import header from "./components/header";

const App = () => {
  return (
    <>
      {header()}
      {cards()}
      App
    </>
  );
};

export default App;
