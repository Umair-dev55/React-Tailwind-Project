import React from "react";

const card = (props) => {
  return (
    <div className="parent">
      <img src={props.image} alt="not found" />
      <h1 className="card">{props.sectionName}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default card;
