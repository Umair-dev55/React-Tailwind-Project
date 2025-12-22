import React, { useState } from "react";

const Array = () => {
  let [num, setNum] = useState({ user: "Umair", age: 20 });
  const btnclicked = () => {
    let newNum = { ...num };
    console.log(newNum);
    newNum.user = "ali";
    newNum.age = "25";
    setNum(newNum);
    // console.log("User is ", newNum.user);
    // console.log("Age is", newNum.age);

    // console.log(num.user);
    // console.log(num.age);
    // console.log(num);
  };

  const [arr, setarr] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  let withArr = () => {
    let arr12 = [...arr];
    // Update Array with new values
    arr12 = [10, 20, 30, 40, 50, 60, 70, 80];
    // This will trigger a re-render
    setarr(arr12);
  };

  return (
    <div className="array">
      <h1>
        My Name is {num.user} <br /> & My Age is {num.age}
      </h1>
      <button onClick={btnclicked}>Click With Object</button>
      <h1>{arr}</h1>
      <button onClick={withArr}>With Array</button>
    </div>
  );
};

export default Array;
