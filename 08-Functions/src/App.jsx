import React from "react";

const App = () => {
  let btnClcicked = () => {
    console.log("Buton is Clicked");
  };

  return (
    <div
      className="flex flex-col gap-10
    *:bg-pink-500 *:text-2xl *:uppercase
    "
    >
      <input
        onChange={(elem) => {
          console.log(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />
      <button onClick={btnClcicked}>Change USer</button>
      <button
        onMouseEnter={() => {
          console.log("Mouse entered");
        }}
      >
        Change USer
      </button>
      <button onDoubleClick={btnClcicked}>Change USer</button>
    </div>
  );
};

export default App;
