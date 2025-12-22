import React, { useState } from "react";

const Array = () => {
  let [num, setNum] = useState({ user: "Umair", age: 20 });
  const btnclicked = () => {
    let newNum = { ...num };
    console.log(newNum);
    console.log("User is ", newNum.user);
    console.log("Age is", newNum.age);

    // console.log(num.user);
    // console.log(num.age);
    // console.log(num);
  };
  return (
    <div className="array">
      <button onClick={btnclicked}>Click Me</button>
    </div>
  );
};

export default Array;
