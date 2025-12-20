import React, { useState } from "react";

const BasicsUseState = () => {
  const [a, seta] = useState(20);
  const [userName, setUserName] = useState("Umair");

  let changeNum = () => {
    seta(30);
    setUserName("Ali");
  };
  return (
    <div>
      <h1>
        Value Of A is {a} <br />
        userName is {userName}
        <br />
      </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  );
};

export default BasicsUseState;
