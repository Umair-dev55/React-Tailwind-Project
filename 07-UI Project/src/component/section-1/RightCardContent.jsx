import React from "react";

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 size-full p-6 flex flex-col justify-between ">
      <h2 className="bg-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
        1
      </h2>
      <div>
        <p className="text-lg leading-6 text-white mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, ab
          possimus! Laboriosam repudiandae ratione neque?
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full ">
            Satisfied{" "}
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
