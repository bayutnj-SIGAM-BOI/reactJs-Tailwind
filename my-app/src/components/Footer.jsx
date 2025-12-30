import React from "react";
import decodeRmbg from "../assets/decodeRmbg.png";
import tnRmbg from "../assets/tnRmbg.png";
import IFR1 from "../assets/IFR1.png";

const Footer = () => {
  const logoImg = [decodeRmbg, tnRmbg, IFR1];

  return (
    <footer className="w-screen bg-blue-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-white text-sm md:text-left">
          &copy; GO2STEAM. All Right Reserved
        </p>

        <div className="flex justify-center gap-6 md:justify-start">
          {logoImg.map((logo, index) => (
            <img key={index} src={logo} className="object-contain w-[100px] h-16 md:w-auto"/>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-white text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
