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
          Title={"Let's Get Inovated Together"}
          SubTitle={""}
          backgroundImage={""}
          className={"relative h-[100vh] w-full overflow-hidden"}
        />

        <MemberIntroducde/>

  

        <OutreachAct/>
    </>
  );
};

export default Home2;
