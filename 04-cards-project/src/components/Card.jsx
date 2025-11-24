import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="flex p-4">
      <div className="card bg-white h-90 w-75 p-4 rounded-2xl">
        <div className="top ">
          <button className="relative left-50   p-0.5 border-black rounded border-[1px] ">
            Save <Bookmark size={18} strokeWidth={1} className="inline-block" />
            {/*  color="#0f0505" strokeWidth={1} */}
          </button>
          <img className="size-10 rounded-full" src={props.logo} alt="" />
        </div>
        <div className="mid py-4 mb-8">
          <h3 className="text-xs">
            <span className="font-bold text-[16px]"> {props.name}</span>{" "}
            <span className="pl-4 text-gray-600 text-[12px]">
              {props.posted}
            </span>
          </h3>
          <h2 className="text-2xl font-bold mb-1">{props.position}</h2>
          <div className="*:p-2 text-xs *:rounded-b-md">
            <h4 className="bg-gray-200 inline-block ml-2">{props.tag1}</h4>
            <h4 className="bg-gray-200 inline-block ml-2 ">{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom border-t-2 flex pt-6">
          <div className="*:font-bold">
            <h3 className="text-3xl">{props.pay}</h3>
            <h3>{props.location}</h3>
          </div>
          <button className="bg-black text-white px-4 py-2 ml-12 rounded-2xl">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
