import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state);

  return (
    <div className="fixed top-0 left-0 w-full">
      <nav className="bg-gray-800 mb-4 p-4 flex justify-between items-center ">
        <span className="text-white ml-6 font-semibold text-lg">
          NIPUN'S REDUX
        </span>
        <div className="mr-6 space-x-10 ">
          <NavLink
            to="/"
            className="text-white hover:text-gray-300 mr-4 font-semibold text-lg"
            activeClassName="border-b-2 border-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className="text-white hover:text-gray-300 mr-4 font-semibold text-lg"
            activeClassName="border-b-2 border-white"
          >
            Cart
          </NavLink>
          <span className="text-white font-semibold text-lg">
            Items: {items.length}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
