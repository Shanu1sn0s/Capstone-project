import React from "react";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full  h-screen">
      <div className="max-w-[100%] grid m-auto justify-center">
        <h1>Sign up</h1>
        <form className="">
          <di className="flex flex-col p-2">
            <label>Email address</label>
            <input className="border w-[500px]" type="email" />
          </di>
          <div className="flex flex-col p-2">
            <label>Password</label>
            <input className="border w-[500px]" type="password" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
