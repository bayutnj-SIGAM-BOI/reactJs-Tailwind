import React from "react";
import Hero from "../components/hero";
import Button from "../components/button";

import Ulydala from "../assets/Ulydala.jpg";

import MemberIntroducde from './MemberIntroducde'
import OutreachAct from "./OutreachAct";

const Home2 = () => {
  return (
    <>
        <Hero
          // Title={"Let's Get Inovated Together"}
          Title={"World wide exchange"}
          SubTitle={"Let's get a meeting with GO2STEAM"}
          backgroundImage={Ulydala}
          className={"relative h-[100vh] w-full overflow-hidden"}
        />

        <MemberIntroducde/>

        <OutreachAct/>
    </>
  );
};

export default Home2;
