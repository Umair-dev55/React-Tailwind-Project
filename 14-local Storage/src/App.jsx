import React from "react";

const App = () => {
  // localStorage.setItem("age", "20");
  let age = localStorage.getItem("age");
  console.log(age);

  localStorage.clear;
  return <div>App</div>;
};

export default App;
