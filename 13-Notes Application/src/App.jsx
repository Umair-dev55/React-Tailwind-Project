import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);
  let btnClicked = (e) => {
    e.preventDefault();
    console.log("Clicked");
    console.log(title, details);

    let copyTask = { ...task };
    copyTask.push = { title, details };
    settask(copyTask);
    console.log(copyTask);

    settitle("");
    setdetails("");
  };
  return (
    <div className="*:bg-black text-white h-screen md:flex *:xs:p-5 *:lg:p-10 ">
      <div className="md:w-1/2">
        <h1 className="xs:text-2xl  md:text-4xl font-extrabold mb-5">
          Add Notes Here
        </h1>
        <form
          action=""
          className="flex text-2xl *:p-5 *:border-2 gap-4 flex-col  *:rounded-2xl"
        >
          <input
            type="text"
            placeholder="Enter Notes"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Enter Details"
            name=""
            id=""
            className="h-[50vh]"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          ></textarea>
          <button
            className="bg-amber-700 text-black active:scale-90"
            onClick={(e) => {
              btnClicked(e);
            }}
          >
            Add Notes
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 ">
        <h1 className="xs:text-2xl  md:text-4xl font-extrabold pb-5">
          Add Notes Here
        </h1>
        <div className="flex flex-wrap *:shrink-0 h-[80vh] overflow-auto gap-5 shadow-xl shadow-amber-500/70 hover:shadow-2xl hover:shadow-amber-600/80 transition-shadow duration-300 justify-center  *:rounded-2xl *:p-2 ">
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
          <div className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-amber-700"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
