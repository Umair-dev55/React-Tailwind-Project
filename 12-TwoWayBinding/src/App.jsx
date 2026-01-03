import React from "react";
import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  let btnClicked = (e) => {
    e.preventDefault();
    console.log("Clicked", title);
  };
  let inputClicked = (e) => {
    settitle(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            inputClicked(e);
          }}
        />
        <button
          onClick={(e) => {
            btnClicked(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
