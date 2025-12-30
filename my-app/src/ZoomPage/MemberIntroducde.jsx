import React from "react";
import { member_card } from "../constant";


const MemberIntroducde = () => {
  return (
    <>
      <div id="MemberIntro" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center">
          <div className="mt-5 text-center text-5xl uppercase leading-[0.8] md:text-[6rem]">
            Me<b>e</b>t wi<b>t</b>h <b>u</b>s
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-4 px-6">
          {member_card.map((i, index) => 
            <div key={index} className="flex flex-col items-center">
              <h1>{i.name}</h1>
            </div>
            )}

        </div>
      </div>
    </>
  );
};

export default MemberIntroducde;
