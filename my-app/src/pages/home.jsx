import React from "react";

import Hero from "../components/hero";

import About from "../pages/about";
import Features from "../pages/Features";
import Contact from "../pages/contact";
import Story from "../pages/story";
import Footer from "../components/Footer";

import WinningAlianceCompetition from "../assets/WinningAlianceCompetition.jpg";

const Home = () => {
  return (
    <>
      <Hero
        backgroundImage={WinningAlianceCompetition}
        Title="Welcome to Go2Steam Robotics"
        SubTitle="Innovating the future, one robot at a time"
        className={"relative h-[70vh] w-screen overflow-hidden bg-black"}
      />

      <About />
      <Features />

      <Story />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
