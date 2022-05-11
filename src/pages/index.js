import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Services from "../components/Services";
import Destination from "../components/Destinations";
import Deals from "../components/Deals";
import Aboutpage from "../components/AboutPage";
import { homeObjOne } from "../components/AboutPage";
import Footer from "../components/footer/footer";
import { homeObjtwo } from "../components/Deals";
import { homeObjthree } from "../components/Destinations";
import { homeObjfour } from "../components/footer/footer";
import { homeObjSix } from "../components/Hero";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero {...homeObjSix} />
      {/* <Services {...homeObjfive}/> */}
      <Destination {...homeObjthree} />
      <Deals {...homeObjtwo} />
      <Aboutpage {...homeObjOne} />
      <Footer {...homeObjfour} />
    </>
  );
};
export default Home;
