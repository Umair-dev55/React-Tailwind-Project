import React from "react";
import { useNavigate } from "react-router";
const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-red-900 m-5 px-5 py-2 rounded"
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </button>
      <button
        className="bg-red-900 m-5 px-5 py-2 rounded"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="bg-red-900 m-5 px-5 py-2 rounded"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
