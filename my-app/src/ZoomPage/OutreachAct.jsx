import React from "react";
import { Timeline } from "../components/ui/timeline";

import { timeLine } from "../constant";

const OutreachAct = () => {
  
  return (
    <div id="OutreachAct" className="min-h-screen w-full bg-background">

      <div className="relative mb-8 mt-36 flex flex-col items-center">
          <div className="mt-5 text-center text-5xl uppercase leading-[0.8] md:text-[6rem]">
            <b>O</b>utreac<b>h</b>
          </div>
        </div>

      <div>
        <Timeline data={timeLine}/>
      </div>
    </div>
  );
};

export default OutreachAct;
