import React from "react";

const RightCardContent = (props) => {
  console.log(props);
  return (
    <div className="absolute top-0 left-0 size-full p-6 flex flex-col justify-between ">
      <h2 className="bg-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg leading-6 text-white pb-10 mb-2 bg-blend-hard-light">
          {props.intro}
        </p>

        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium px-5 py-2 rounded-full "
          >
            {props.tag}{" "}
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full ">
            <i className=" ri-arrow-right-long-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
