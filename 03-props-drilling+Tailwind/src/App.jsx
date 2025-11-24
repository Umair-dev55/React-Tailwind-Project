import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Card user="SAM" age={28} img="https://i.pinimg.com/736x/99/bc/9a/99bc9ac688dc94bc27f2bb3b84dda8d3.jpg" />
      <Card user="Fahad" age={27} img="https://i.pinimg.com/736x/99/bc/9a/99bc9ac688dc94bc27f2bb3b84dda8d3.jpg" />
      <Card user="Ali" age={25} img="https://i.pinimg.com/736x/99/bc/9a/99bc9ac688dc94bc27f2bb3b84dda8d3.jpg" />
      
    </>
  );
};

export default App;
