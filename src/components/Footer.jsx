import React from "react";
import LogoPng1 from "../assets/Footer Icon/Vector.png";
import LogoPng2 from "../assets/Footer Icon/Vector 2.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-screen absolute text-center m-auto bg-white grid justify--center  p-0 z-40">
      <div className="mt-20 m-auto w-[1000px] gap- flex justify-center align-top  p-0 text-center">
        <div className="  relative top-10 left-[-50px] grid justify-center gap-4 mt-[-1px] pt-5 text-center m-auto">
          {/* Logo h1 */}
          <div className=" m-0 gap-1 flex h-5 text-center justify-center">
            <img className="h-4" src={LogoPng1} alt="" />
            <img className="h-4 w-[2px]" src={LogoPng2} alt="" />
            <h1 className="flex align-items-center text-center">SCISSOR</h1>
          </div>
          {/* Logo ends here */}
          {/* Social Icons */}
          <div className="flex gap-4">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaFacebook />
          </div>
          {/* Social Icons ends here*/}
        </div>
        {/* footer write-ups */}
        <div className="flex  relative top-10 left-[-50px] text-left pt-5 gap-10">
          <div className="">
            <h1 className="font-bold mb-2">Why Scissor ?</h1>
            <p className="w-40 flex text-left">
              Scissor 101 Integrations & API Pricing
            </p>
          </div>
          {""}
          <div className="">
            <h1 className="font-bold mb-2">Solutions</h1>
            <p className="w-[130px] flex text-left">
              Social Media <br />
              Digital Marketing
              <br />
              Customer Service For Developers <br />
            </p>
          </div>
          {""}
          <div className="">
            <h1 className="font-bold mb-2">Productions</h1>
            <p className="w-40 flex text-left">
              Link Management QR Codes Link-in-bio
            </p>
          </div>
          {""}
          <div className="">
            <h1 className="font-bold mb-2">Company</h1>
            <p className="w-40 flex text-left">
              About Scissor <br />
              Careers
              <br />
              Partners
              <br />
              Press <br />
              Contact <br />
              Reviews
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 mr-[px] m-auto w-[1000px] gap- flex justify-center align-top  p-0 text-center">
        <div className="  relative top-10 left-[-50px] grid justify-center gap-4 mt-[-1px] pt-5 text-center m-auto"></div>
        {/* footer write-ups */}
        <div className="flex  relative top-10 left-[-50px] text-left pt-5 gap-10">
          <div className="mr-[-80px]">
            <h1 className="font-bold mb-2">Resources</h1>
            <p className="w-60 leading-2 text-left">
              Blog <br />
              Resource Library <br />
              Developers <br />
              App Connectors <br />
              Support <br />
              Trust Center <br />
              Browser Extension <br />
              Mobile App <br />
            </p>
          </div>
          {""}
          <div className=" mr-[-40px]">
            <h1 className="font-bold mb-2">Features</h1>
            <p className="w-[170px] flex text-left">
              Branded Links <br />
              Mobile Links
              <br />
              Campaign
              <br />
              Management & Analytics
              <br />
              QR Code generation
            </p>
          </div>
          {""}
          <div className="">
            <h1 className="font-bold mb-2">Legal</h1>
            <p className="w-40 flex text-left">
              Privacy Policy <br />
              Cookie Policy <br />
              Terms of Service <br />
              Acceptable Use Policy <br />
              Code of Conduct <br />
            </p>
          </div>
          {""}
          <div className="">
            <p className="w-40 flex text-left"></p>
          </div>
        </div>
        {/* footer write-ups end here */}
       
      </div>
      <div className="flex my-40 justify-end gap-5 p-10">
            <p>Terms of Service |</p>
            <p>Security |</p>
            <p>Scissor 2023</p>
        </div>
    </div>
  );
}

export default Footer;
