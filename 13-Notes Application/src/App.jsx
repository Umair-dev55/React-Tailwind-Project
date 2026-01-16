import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);
  let btnClicked = (e) => {
    e.preventDefault();

    console.log("Clicked");
    console.log(title, details);

    let copyTask = [...task];
    copyTask.push({ title, details });
    settask(copyTask);
    console.log(copyTask);

    settitle("");
    setdetails("");
  };
  let deleteTask = (idx) => {
    let copyTask = [...task];
    console.log(idx);
    copyTask.splice(idx, 1);
    settask(copyTask);

    // console.log(task);
  };
  return (
    <div className="*:bg-black text-white h-screen md:flex *:xs:p-5 *:lg:p-10 ">
      <div className="md:w-1/2">
        <h1 className="font-dancingScript xs:text-2xl  md:text-6xl font-extrabold mb-5">
          Add Notes Here
        </h1>
        <form
          action=""
          className="flex text-2xl *:p-5 *:border-2 gap-4 flex-col  *:rounded-2xl outline-none"
        >
          <input
            type="text"
            className="bg-[#111] font-serif text-3xl"
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
            className="h-[50vh] bg-[#111] font-serif text-3xl"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          ></textarea>
          <button
            className="font-serif bg-cyan-800  active:scale-90 hover:shadow-2xl hover:shadow-cyan-600/40"
            onClick={(e) => {
              btnClicked(e);
            }}
          >
            Add Notes
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 ">
        <h1 className="font-dancingScript xs:text-2xl  md:text-6xl font-extrabold pb-5">
          Recent Notes
        </h1>
        <div className="flex flex-wrap *:shrink-0 h-[80vh] overflow-auto gap-5 shadow-xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-600/90 transition-shadow duration-300 xs:justify-center md:justify-evenly *:rounded-2xl *:p-5 text-cyan-900">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="xs:h-60 xs:w-50 xs2:h-40 xs2:w-40 bg-cyan-700 leading-tight bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] bg-center bg-cover flex flex-col justify-around"
              >
                <h3 className="font-dancingScript text-3xl font-bold wrap-break ">
                  {elem.title}
                </h3>
                <p className="font-serif text-2xl wrap-break">{elem.details}</p>
                <button
                  className="bg-red-600 px-8 py-2 rounded-2xl text-white active:scale-90"
                  onClick={() => {
                    deleteTask(idx);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
