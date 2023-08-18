import React from "react";
import StarterImg from "../assets/Line 70.png";
import CheckBlue from "../assets/icons/check-circle.png";
import CheckWhite from "../assets/icons/check-circle-white.png";

const Price = () => {
  return (
    <div className="w-full h-screen absolute  top-[340%] text-center p-10 ">
      {/* Header */}
      <div className="grid w-[1240px] text-center justify-center m-auto">
        <h1 className="font-bold text-[40px] text-center justify-center  flex mb-5">
          <img className="mr-2" src={StarterImg} alt="" />A{" "}
          <span className="mx-2 text-blue-600"> price perfect </span>for your
          needs.
        </h1>
        <p className=" w-[480px] justify-center text-center m-auto mt-[-10px] text-[15px]">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
      {/* Header ends here */}

      {/* Price display */}
      <div className="my-20 mx-20 flex justify-center align-middle gap-[300px] m-auto ">
        <div className="border-blue-600 border rounded py-8 px-4 w-[350px] mt-[50px]">
          <div className="grid justify-start ml-10 mb-10 gap-2 text-left">
            <h1 className="font-[400] text-2xl">Basic</h1>
            <h1 className="font-bold text-3xl">Free</h1>
            <h1 className="font-[400] text-xl">Free plan for all users</h1>
          </div>
          <div className="grid ">
            <ul className=" grid justify-center align-bottom text-right m-auto">
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Unlimited URL Shortening
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Basic Link Analytics
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Customizable Short Links
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Standard Support
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Ad-supported
              </li>
            </ul>
          </div>
        </div>
        {/* Price 2 */}
        <div className="border-blue-600 border bg-[#1e3448] text-white rounded py-8 px-4 w-[380px] h-[550px]  mt-[20px] pt-[50px] z-1 absolute">
          <div className="grid justify-start ml-10 mb-10 gap-2 text-left">
            <h1 className="font-[400] text-2xl">Professional</h1>
            <h1 className="font-bold text-3xl">$15/month</h1>
            <h1 className="font-[400] text-xl">Ideal for business creators</h1>
          </div>
          <div className="grid ">
            <ul className=" grid justify-center align-bottom text-right m-auto">
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckWhite}
                  alt=""
                />
                Enhanced Link Analytics
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckWhite}
                  alt=""
                />
                Custom Branded Domains
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckWhite}
                  alt=""
                />
                Advanced Link Customization
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckWhite}
                  alt=""
                />
                Priority Support
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckWhite}
                  alt=""
                />
                Ad-free Experience
              </li>
            </ul>
          </div>
        </div>
        {/* Price 3 */}
        <div className="border-blue-600 border rounded py-8 px-4 w-[350px] mt-[50px]">
          <div className="grid justify-start ml-10 mb-10 gap-2 text-left">
            <h1 className="font-[400] text-2xl">Teams</h1>
            <h1 className="font-bold text-3xl">$25/month</h1>
            <h1 className="font-[400] text-xl">Share with up to 10 users</h1>
          </div>
          <div className="grid ">
            <ul className=" grid justify-center align-bottom text-right m-auto">
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Team Collaboration
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                User Roles and Permissions
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Enhanced Security
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                API Access
              </li>
              <li className=" flex text-center ">
                <img
                  className="w-5 h-5 mr-2 mb-[-10px]"
                  src={CheckBlue}
                  alt=""
                />
                Dedicated Account Manager
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Price display ends here */}

      {/* Buttons */}
    </div>
  );
};

export default Price;
