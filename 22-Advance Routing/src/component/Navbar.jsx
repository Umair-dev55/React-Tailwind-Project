import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="relative w-full top-0 flex justify-between  items-center px-5"
    >
      <h3 className="text-2xl font-bold">Umair Tech</h3>
      <div className="flex gap-4 *:p-5 ">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
