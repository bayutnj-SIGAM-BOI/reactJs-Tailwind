import React from "react";
import { BentoTilt, BentoCard } from "./Features";
import WinningAlianceCompetition from "../assets/WinningAlianceCompetition.jpg";
import { FaBeer } from "react-icons/fa";

const TextLine = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`ml-8 ${className}`}>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="mt-2 text-sm text-gray-700 leading-relaxed text-justify">
        {subtitle}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-md uppercase md-text-[10px] font-sans">
          Welcome To GO2STEAM
        </h2>

        <div className="mt-5 text-center text-5xl uppercase leading-[0.8] md:text-[6rem]">
          D<b>e</b>ep E<b>x</b>pl<b>o</b>reat<b>i</b>on <b>R</b>ob<b>o</b>tic T
          <b>e</b>ams
        </div>
      </div>

      <div className="grid px-6 mt-16 grid-cols-3 grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-3">
        <BentoTilt className="border border-white/20 row-span-3 md:col-span-1 overflow-hidden rounded-[1rem] md: row-span-4">
          <BentoCard title={""} src={WinningAlianceCompetition} />
        </BentoTilt>

        <TextLine
          title="About"
          subtitle="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <TextLine
          title="Vision"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <TextLine
          className="mt-8"
          title="Mission"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <TextLine
          className="mt-8"
          title="complated"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className="mt-6 mx-16 bg-black-5 rounded-full p-6 backdrop-blur-sm md:mt-12">
        <h1 className="text-white text-lg">{FaBeer}</h1>
      </div>
    </div>
  );
};

export default About;
