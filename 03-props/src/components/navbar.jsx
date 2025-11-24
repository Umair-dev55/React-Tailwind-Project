import React from "react";
const navbar = (props) => {
  console.log(props);
  return <h1 className="navbar">{props.user}</h1>;
};

export default navbar;
