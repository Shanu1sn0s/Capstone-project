import React, { useState } from "react";
import StarterImg from "../assets/Line 70.png";
import CheckBlue from "../assets/icons/check-circle.png"; 
import CheckWhite from "../assets/icons/check-circle-white.png";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import First from "../assets/faq1 (1).png";
import Second from "../assets/faq1 (2).png";
import Third from "../assets/faq1 (3).png";

const Price = () => {
  const [reveal, setReveal] = useState(false);
  const handleClick = () => setReveal(!reveal);

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
      <div className="flex gap-5 m-auto pb-10 justify-center">
        <button className="w-[270px] bg-transparent text-blue-600 ">
          Get Custom Pricing
        </button>
        <button className="w-[270px] ease-in duration-300">Select Pricing</button>
      </div>
      {/* Buttons end here */}

      {/* FAQs */}
      <div className="w-full h-screen mt-[150px]">
        <div className="grid">
          {/* bg pictures */}
          <div className="z-100 justify-center flex absolute left-[-20px] gap-10 w-[200px]">
            <img
              className="relative top-[-20px] h-[400px] left-[-70px]"
              src={First}
              alt=""
            />
            <img className="absolute left-5" src={Second} alt="" />
            <img className=" absolute left-3" src={Third} alt="" />
          </div>
          {/* bg pictures ends here */}
          {/* Faq write-up */}
          <div className="grid">
            <h1 className="flex gap-0 justify-center font-bold mb-20 text-3xl ">
              <img className="mr-4" src={StarterImg} alt="" />
              FAQs
            </h1>
            {/* Paragraphs 1*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="text-left flex gap-[450px] font-[600] text-[17px] w-[100%] top-0 mb-5">
                How does URL shortening work?{" "}
                <span onClick={handleClick}>
                  {!reveal ? (
                    <PlusIcon className="mr-5 h-5 w-5 sticky" />
                  ) : (
                    <MinusIcon className=" ml-5 h-5 w-5 sticky " />
                  )}
                </span>
              </p>
              {reveal && (
                <p className=" grid justify-start text-left">
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected
                  to the intended destination.
                </p>
              )}
            </div>
            {/* Paragraphs 2*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="text-left flex gap-[150px] mt-12 font-[600] text-[17px] w-[100%] top-0 mb-5">
                Is it necessary to create an account to use the URL shortening
                service?{" "}
                <span>
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/* Paragraphs 3*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="text-left flex gap-[280px] mt-12 font-[600] text-[17px] w-[100%] top-0 mb-5">
                Are the shortened links permanent? Will they expire?
                <span>
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/* Paragraphs 4*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="text-left flex gap-[200px] mt-12 font-[600] text-[17px] w-[100%] top-0 mb-5">
                Are there any limitations on the number of URLs I can shorten?
                <span>
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/*Paragraph 5*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="text-left flex gap-[165px] mt-12 font-[600] text-[17px] w-[100%] top-0 mb-5">
                Can I customize the shortened URLs to reflect my brand or
                content?
                <span>
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/* Paragraphs 6*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="text-left flex gap-[290px] mt-12 font-[600] text-[17px] w-[100%] top-0 mb-5">
                Can I track the performance of my shortened URLs?
                <span>
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/* Paragraphs 7*/}
            <div className="border-gray-400 border-b-2 w-[800px] m-auto">
              <p className="flex gap-[60px]  text-left justify-center align-middle m-auto mt-12 font-[600] text-[17px] w-[90%] top-0 mb-5">
                How secure is the URL shortening service? Are the shortened
                links protected against spam or malicious activity?
                <span className="text-right ]">
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/* Paragraphs 8*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="flex gap-[380px]  text-left justify-center align-middle m-auto mt-12 font-[600] text-[17px] w-[100%] top-0 mb-5">
                What is a QR code and what can it do?
                <span>
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/* Paragraphs 9*/}
            <div className="grid gap-[10px] justify-center m-auto border-b-2 border-gray-400 w-[800px] ">
              <p className="flex gap-[60px]  text-left justify-center align-middle m-auto mt-12 font-[600] text-[17px] w-[90%] top-0 mb-5">
                Is there an API available for integrating the URL shortening
                service into my own applications or websites?
                <span>
                  <PlusIcon className="mr-5 h-5 w-5 sticky" />
                </span>
              </p>

              <p className=" grid justify-start text-left"></p>
            </div>
            {/* Paragraphs end here */}
          </div>
          {/* Faq write-up ends here */}
        </div>
      </div>
    </div>
  );
};

export default Price;
