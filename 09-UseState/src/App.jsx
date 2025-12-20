import React, { useState } from "react";

const App = () => {
  const [a, seta] = useState(20);
  const [userName, setUserName] = useState("Umair");
  const [users, setusers] = useState([10, 20, 30]);
  let changeNum = () => {
    seta(30);
    setUserName("Ali");
    setusers([100, 200, 300]);
  };
  return (
    <div>
      <h1>
        Value Of A is {a} <br />
        value of userName is {userName}
        <br />
        users value is {users}
      </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  );
};

export default App;
