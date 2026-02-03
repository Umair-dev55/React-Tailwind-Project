import React from "react";
import { Link, Outlet } from "react-router";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-5">
        <Link to="/product/men">
          <h2>Men</h2>
        </Link>
        <Link to="/product/women">
          <h2>Women</h2>
        </Link>
        <Link to="/product/kids">
          <h2>Kids</h2>
        </Link>
        <Outlet />
      </div>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
