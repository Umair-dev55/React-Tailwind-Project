import React, { useState } from "react";

const Object = () => {
  const [obj, setobj] = useState({ user: " Umair", age: 24 });
  let ObjUpdate = () => {
    // destructuring
    const newObj = { ...obj };
    newObj.user = "ali";
    newObj.age = 25;
    setobj(newObj);
  };
  return (
    <div>
      <h1>
        My Name is {obj.user} & Age is {obj.age}
      </h1>
      <button onClick={ObjUpdate}>Object</button>
    </div>
  );
};

export default Object;
