import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between ">
      <div className="p-6">
        <h3 className="text-5xl font-bold mb-8 leading-[1.2]">
          Prospective <br />
          <span className="text-gray-500">Customer</span> <br />
          Segmentation
        </h3>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          recusandae. Ipsa, dolore?
        </p>
      </div>
      <div className="text-8xl text-black">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
