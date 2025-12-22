import React from "react";

const BatchUpdate = () => {
  let btnClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <button onClick={btnClick}>Batch Update</button>
    </div>
  );
};

export default BatchUpdate;
