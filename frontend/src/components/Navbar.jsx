// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="mycontainer flex flex-wrap justify-between items-center px-4 py-4 md:py-5">
        <div className="logo font-bold text-white text-2xl flex items-center gap-2">
          <span className="text-blue-950">&lt;</span>
          Pass<span className="text-blue-950">OP/&gt;</span>
        </div>

        <div className="mt-3 md:mt-0">
          <button className="text-white bg-blue-500 rounded-full flex items-center gap-2 px-3 py-2 hover:bg-blue-800 border-2 border-blue-900">
            <img className="invert-0 p-1 w-8 h-8" src="/icons/Github.png" alt="Github Logo" />
            <span className="font-bold text-sm md:text-base pr-1">Github</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
