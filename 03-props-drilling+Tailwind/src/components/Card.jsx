import React from "react";

const Card = (props) => {
  return (
    <div className="card border-white border-2 size-75 p-3 text-center inline-block bg-gray-900 ">
      <img
        className="size-15 mx-auto mb-2 rounded-full contain"
        src={props.img}
        alt=""
      />
      <h1 className="text-4xl font-bold pb-10">
        {props.user},{props.age}
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="my-6 p-2 bg-white inline-block text-black">
        View Profile
      </div>
    </div>
  );
};

export default Card;
