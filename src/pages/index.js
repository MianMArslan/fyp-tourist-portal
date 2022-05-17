import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destinations";
import Recommended from "../components/Recommended";
import Aboutpage from "../components/AboutPage";
import { homeObjOne } from "../components/AboutPage";
import Footer from "../components/footer/footer";
import { homeObjDeals } from "../components/HotDeals";
import { homeObjthree } from "../components/Destinations";
import { homeObjfour } from "../components/footer/footer";
import { homeObjSix } from "../components/Hero";
import Chat from "../components/Chat";
import HotDeals from "../components/HotDeals";
// import Services from "../components/Services/index"
import BookNow from "../components/BookNow/index"

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
      <Destination {...homeObjthree} />
      <HotDeals {...homeObjDeals} />
      <Recommended />
      {/* <Services /> */}
      {/* <Deals {...homeObjtwo} /> */}
      <Aboutpage {...homeObjOne} />
      <Footer {...homeObjfour} />
      {/* <BookNow /> */}
      <Chat />
    </>
  );
};
export default Home;
