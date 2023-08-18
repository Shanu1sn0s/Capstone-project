import React from "react";
import Line from "../assets/bottom stripe.png";
import Back from "../assets/Bg back.png";
import Base from "../assets/Bg bottom.png";
import Arrow from "../assets/Line 7.png";
import LinkImage from "../assets/link-2.png";
import CircleBG from "../assets/circle bg.png";
import StarterImg from "../assets/Line 70.png";
import Analytics from "../assets/icons/activity.png";
import LinkShowcase from "../assets/icons/link-2.png";
import Grid from "../assets/icons/grid.png";
import Edit from "../assets/icons/edit.png";

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
                <span className="font-[700] ml-2">shareable links</span> with
                just a few clicks.
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
      <div className="w-full h-[200px] absolute top-[186%] grid grid-cols-5 justify-center items-center bg-[#F9FBFD] px-20 m-auto text-center border py-12 px-17">
        <div className=" h-full w-[300px] mr-[120px]">
          <h1 className="text-left text-3xl font-bold">
            One Stop.
            <br />
            Four <span className="text-blue-600"> Possibilities</span>.
          </h1>
        </div>
        <div className="items-center ml-[80px] h-[150px] top-0 w-[200px] text-left">
          <h1 className="text-2xl font-[700]">3M</h1>
          <p className="">Active users</p>
        </div>
        <div className="items-center ml-[80px] h-[150px] top-0 w-[120px] text-left">
          <h1 className="text-2xl font-[700]">60M</h1>
          <p className="">Links & QR codes created</p>
        </div>
        <div className="items-center ml-[80px] h-[150px] top-0 w-[200px] text-left">
          <h1 className="text-2xl font-[700]">1B</h1>
          <p className=" text-left m-auto">Clicked & Scanned connections</p>
        </div>
        <div className="items-center ml-[80px] h-[150px] top-0 w-[200px] text-left">
          <h1 className="text-2xl font-[700]">300k</h1>
          <p className="">App Integrations</p>
        </div>
      </div>
      {/* Why choose Scissors section */}
      <div className="w-full h-screen absolute top-[200%] grid grid-cols-5 justify-center items-center px-20 m-auto text-center py-12 px-17">
        {/* stand alone */}
        <div>
          <div className="w-[300px]">
            <h1 className="font-bold text-3xl  flex gap-3 w-[400px] mb-5">
              <img className="h-10" src={StarterImg} alt="" />
              Why choose <span className="text-blue-600">Scissors</span>
            </h1>
            <p className="text-left ml-5">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </p>
          </div>
        </div>
        {/* grid display */}
        <div className="grid grid-cols-2 relative gap-10 left-40 h-[235px]">
          <div>
            <img
              className="rounded-[50%] bg-[#e4efff] p-1"
              src={LinkShowcase}
              alt=""
            />
            <h1 className="font-bold text-xl w-[200px] text-left my-5">
              URL Shortening
            </h1>
            <p className="font-italic w-[320px] text-left">
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
          <div className=" ml-[50px] relative left-60">
            <img
              className="rounded-[50%] bg-[#e4efff] p-1 "
              src={Edit}
              alt=""
            />

            <h1 className="font-bold text-xl w-[200px] text-left my-5">
              Custom URLs
            </h1>
            <p className="font-italic w-[320px] text-left">
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
          <div>
            <img className="rounded-[50%] bg-[#e4efff] p-1" src={Grid} alt="" />
            <h1 className="font-bold text-xl w-[200px] text-left my-5">
              QR Codes
            </h1>
            <p className="font-italic w-[320px] text-left">
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>
          <div className=" ml-[50px] relative left-60">
            <img
              className="rounded-[50%] bg-[#e4efff] p-1 "
              src={Analytics}
              alt=""
            />

            <h1 className="font-bold text-xl w-[200px] text-left my-5">
              Data Analytics
            </h1>
            <p className="font-italic w-[320px] text-left">
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
        {/* grid display ends here*/}
      </div>
      {/* Why choose Scissors section ends here*/}
    </div>
  );
};

export default Hero;
