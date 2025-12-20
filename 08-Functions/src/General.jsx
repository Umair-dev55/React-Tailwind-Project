import React from "react";

const General = () => {
  return (
    <>
      {" "}
      <button
        className="bg-cyan-700 "
        onClick={() => {
          console.log("Single Clicked");
        }}
      >
        Single Click
      </button>
      <button
        className="bg-cyan-700 "
        onDoubleClick={() => {
          console.log("Double Clicked");
        }}
      >
        Double Click
      </button>
      <button
        className="bg-cyan-700 "
        onMouseEnter={() => {
          console.log("Mouse Entered");
        }}
      >
        Mouse Entered
        {() => {
          console.log("Single Clicked");
        }}
      </button>
      <input
        className="bg-cyan-800 block text-2xl"
        type="text"
        placeholder="First Time"
        onChange={(elem) => {
          console.log(elem.target.value);
        }}
      />
      <button
        className="bg-cyan-800"
        onMouseMove={(elem) => {
          console.log(elem.clientX);
        }}
      >
        Mouse Move
      </button>
    </>
  );
};

export default General;
