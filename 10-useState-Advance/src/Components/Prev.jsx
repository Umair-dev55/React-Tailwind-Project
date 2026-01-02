import React, { useState } from "react";

const Prev = () => {
  const [num, setnum] = useState({ user: "Sarthak", age: 20 });
  let prevClick = () => {
    setnum((prev) => ({ prev, user: "ALi", age: 20 }));
  };
  return (
    <div>
      <h1>
        {num.user}
        {num.age}
      </h1>
      <button onClick={prevClick}>hi</button>
    </div>
  );
};

export default Prev;
