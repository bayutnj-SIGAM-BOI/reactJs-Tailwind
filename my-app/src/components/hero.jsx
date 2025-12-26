import React from "react";


const Hero = ({ backgroundImage, Title, SubTitle, className }) => {
  return (
    <div className={className}>
      <div className="w-full h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="absolute inset-0 bg-blue-900/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl uppercase">
            {Title}
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mt-2 drop-shadow">
            {SubTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
