import React,{useState} from "react";
import Logo from "../assets/Logo.png";
import Line from "../assets/Logo line.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {Link}from "react-router-dom"


const Navbar = () => {
const[nav,setNav]=useState(false);
const handleClick =() => setNav(!nav)


  return (
    <div className=" w-screen h-[80px] z-10 fixed mt-[-20px] bg-white drop-shadow-md rounded-[50px] my-[10px] ">
      <div className="px-2  py-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="px-2  py-4 w-9" src={Logo} alt="" />
          <img className="mr-2" src={Line} alt="" />
          <h1 className="text-2xl text-blue-600 font-sans uppercase font-[400] fonts-sans">
            Scissor
          </h1>

          <ul className="hidden md:flex space-x-20  pl-[40px] ml-[200px] mr-[-200px] ease-in-out duration-300 font-[600] text-lg">
            <li className="text-blue-600 ">My Url</li>
            <li className="ease-in-out duration-300">Features</li>
            <li className="ease-in-out duration-300">Pricing</li>
            <li className="ease-in-out duration-300">FAQs</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 gap-3">
          <button className=" border-none bg-transparent text-blue-600  duration-300 hover:border-none ">
           <Link to="/login"> Log in</Link>
          </button>
          <button className="ease-in-out duration-300">Try for Free</button>
        </div>
      <div className="md:hidden md:mr-[500px] duration-300" onClick={handleClick}>
      {!nav ?<MenuIcon className=" mr-5 h-8 w-8 text-blue-600"  />
      : <XIcon className="md:hidden mr-5 h-8 w-8 text-blue-600"  />}
         
      </div>     
      </div>
       {/* Mobile menu */}
<ul className={!nav ? "hidden": "md:hidden absolute text-white text-center bg-blue-600 w-full px-8 py-4 duration-300"}>
  <li className="border-white w-full hover:bg-gray-300 hover:text-blue-600 rounded-[40px] ease-in-out duration-300">My Url</li>
  <li className="border-white w-full hover:bg-gray-300 hover:text-blue-600 rounded-[40px] ease-in-out duration-300">Features</li>
  <li className="border-white w-full hover:bg-gray-300 hover:text-blue-600 rounded-[40px] ease-in-out duration-300">Pricing</li>
  <li className="border-white w-full hover:bg-gray-300 hover:text-blue-600 rounded-[40px] ease-in-out duration-300">FAQs</li>
<div className="flex flex-col my-4">
<button className="bg-white hover:text-white text-blue-600 px-8 py-3 mb-4">
Log in
</button>
<button className="px-8 py-3 border-white hover:text-white">
Try for Free
</button>
</div>
  
</ul>

    </div>
  );
};

export default Navbar;