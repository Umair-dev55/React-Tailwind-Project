import React from "react";

const App = () => {
  let btnClicked = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form
        className="flex items-start justify-between gap-5 xs:p-4 md:p-10 xs:text-[12px]  md:text-3xl 
      
      "
      >
        <div className="flex flex-col *:border-2 gap-5 *:rounded-bl-4xl *:rounded-tr-4xl ">
          <input
            className="xs:p-2 md:p-5"
            type="text"
            placeholder="Add Notes Heading"
            onChange={(e) => {
              btnClicked(e);
            }}
          />
          <textarea
            className="xs:p-2  md:p-5 xs:h-30 md:h-80 rounded-2xl"
            type="text"
            placeholder="Write Details"
          />
          <button className="bg-[#888] text-black p-2 hover:bg-red-600 hover:text-white hover:border-0 transition-colors duration-700 animation-pulse">
            Add Notes
          </button>
        </div>
        <div>
          <img
            className="rotate-y-180 "
            src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
            alt=""
          />
        </div>
      </form>
    </div>
  );
};

export default App;
