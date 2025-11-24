import React from "react";

const UserName = (props) => {
  return (
    <div>
      {props.name}
      {props.age}
      <hr />
    </div>
  );
};

export default UserName;
