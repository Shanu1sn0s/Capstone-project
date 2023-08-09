import React from "react";
import Logo from "../assets/Logo.png";
import Line from "../assets/Logo line.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 fixed bg-white drop-shadow-md rounded-[50px] my-[10px]">
      <div className="px-2  py-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="px-2  py-4 w-9" src={Logo} alt="" />
          <img className="mr-2" src={Line} alt="" />
          <h1 className="text-2xl text-blue-600 font-sans uppercase font-[400] fonts-sans">
            Scissor
          </h1>

          <ul className="hidden md:flex space-x-20  pl-[40px] ml-[200px] mr-[-200px] font-[600] text-lg">
            <li className="text-blue-600">My Url</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 gap-3">
          <button className=" border-none bg-transparent text-blue-600 hover:border-none duration-300">
            Log in
          </button>
          <button>Try for Free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;