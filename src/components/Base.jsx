import React from "react";
import Footer  from"./Footer"
import Bg from "../assets/bottom.png";
import Bg2 from "../assets/bottom2.png";
import BgLayer1 from "../assets/top.png";
import BgLayer2 from "../assets/top2.png";
import BgLayer3 from "../assets/mid.png";
import BgLayer4 from "../assets/mid2.png";


const Base = () => {
  return (
    <div className="w-full h-screen absolute z-0 top-[700%] text-center">
      {/* Revolution section */}
      <div className="h-[300px] z-10 bg-[#1e3448]">
        {/* top bg images */}
        <div className="relative left-[-10%]">
          <img className="absolute" src={Bg} alt="" />
          <img className="absolute" src={BgLayer1} alt="" />
          <img className="absolute" src={BgLayer3} alt="" />
        </div>
        {/* top bg images ends here*/}

        {/* Write up */}
        <div className="grid justify-center m-auto absolute top-[90px] left-[430px] ">
          <h1 className=" font-bold text-3xl mb-20 text-white text-center">
            Revolutionizing Link Optimization
          </h1>
          <button className="w-[200px] m-auto text-center hover:border-white hover:text-white ease-in-out duration-300">
            Get Started
          </button>
        </div>
        {/* Write up ends here */}

        {/* Bottom bg Images */}
        <div className="relative top-[60%]  flex justify-end">
          <img className="absolute top-12 z-1" src={Bg2} alt="" />
          <img className="absolute top-[-30px] z-1" src={BgLayer2} alt="" />
          <img className="absolute top-[-2px] z-1" src={BgLayer4} alt="" />
        </div>

        {/* Bottom bg Images end here */}
      </div>
      {/* Revolution section ends here*/}

      {/* Footer */}
 <div>
  <Footer />
 </div>
     {/*Footer ends here */} 
    </div>
  );
};

export default Base;
