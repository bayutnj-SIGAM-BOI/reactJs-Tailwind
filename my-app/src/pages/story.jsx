import React from "react";
import AnimatedTitle from "../components/animatedTitle";
import WinningAlianceCompetition from'../assets/WinningAlianceCompetition.jpg'


const Story = () => {
  return (
    <section id="Story" className="min-h-dvh w-screen bg-black-10 text-blue-50">
      <div className="flex size-full flex-col items-center py-10 px-24">
        <p className="font-general text-sm uppercase md:text-[17px]">
          Where Ideas Evolve — Go2Steam Robotics Team
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> our J<b>o</b>urney"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
            

            {/* Content Here */}
            <div className="mt-10 flex">
                <img src={WinningAlianceCompetition} alt="" />
            </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
