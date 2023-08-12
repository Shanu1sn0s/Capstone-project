import React from "react";
import Line from "../assets/bottom stripe.png";
import Back from "../assets/Bg back.png";
import Base from "../assets/Bg bottom.png";
import Arrow from "../assets/Line 7.png";
import LinkImage from "../assets/link-2.png";
import CircleBG from "../assets/circle bg.png";

const Hero = () => {
  return (
    <div className="w-full h-screen relative top-32 text-center ">
      {/* optimize */}
      <div className="mt-5 max-w-4xl  flex flex-cols-2 font-[600] items-center mx-auto">
        <h1 className="text-4xl font-700 leading-relaxed">
          Optimize Your Online Experience with Our Advanced
          <span className="text-blue-600 text-center w-2 ml-2">
            URL Shortening{" "}
            <img
              className="w-[120px] ml-[450px] mt-[-10px] "
              src={Line}
              alt=""
            />
          </span>
          Solution
        </h1>
      </div>
      {/* personalize paragraph  with button div inside*/}
      <div className="mt-5 max-w-xl  flex flex-col gap-3 items-center mx-auto">
        <p className="text-xl w-[670px]">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        {/* button div */}
        <div className="flex gap-7">
          <button className="px-7">Sign Up</button>
          <button className="bg-transparent text-blue-600 border-none">
            Learn more
          </button>
        </div>
      </div>
      {/* background image design div */}
      <div className="w-full h-screen grid justify-center text-center">
        {/* card and bg image */}
        <div className="flex justify-center text-center m-auto mt-40">
          {/* card */}
          <div className="border-blue-600 border w-[580px] h-[300px] ml-[390px] bg-zinc-50 grid justify-center m-auto text-center py-20 px-10 rounded-[20px]">
            {/* illustrations */}
            <div className="flex justify-center mt-[-20px] gap-5 ">
              <img src={LinkImage} alt="" />
              <img src={LinkImage} alt="" />
              <img src={LinkImage} alt="" />
              <img className="h-5 mt-7" src={Arrow} alt="" />
              <img src={LinkImage} alt="" />
            </div>
            {/* illustrations ends */}

            {/* Card Paragraph */}
            <div className="mt-5">
              <p className="text-xl">
                Seamlessly transform your long URLs into 
                <span className="font-[700] ml-2">concise</span> and  
                <span className="font-[700] ml-2">shareable links</span> with just a
                few clicks.
              </p>
            </div>
          </div>
          {/* bg image */}
          <div className="">
            <img
              className="z-[-1] w-[410px] h-[400px] mt-40 relative left-[-750px] top-[-70px]"
              src={Back}
              alt=""
            />
          </div>
        </div>
        {/* card and bg image end */}
        {/* buttom image */}
        <div className="w-[900px] flex justify-center text-center m-auto">
          <img className="relative" src={Base} alt="" />
          <img className="absolute -z-20" src={CircleBG} alt="" />
        </div>
        {/* buttom image end */}
      </div>
      {/* one stop section */}
      <div className='w-full h-[200px] absolute top-[186%] grid grid-cols-5 justify-center items-center  text-center border border-blue-600 py-12 px-17'>
      <div className="bg-red-500 h-full">1</div>
      <div className="bg-blue-300">2</div>
      <div className="bg-blue-500">3</div>
      <div className="bg-red-300">4</div>
      <div className="bg-zinc-700">5</div>
      </div>
    </div>
  );
};

export default Hero;
