import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destinations";
import Recommended, { homeObjTwo } from "../components/Recommended/index";
import ContactUs from "../components/ContactUs/index";
import { homeObjOne } from "../components/ContactUs/index";
import Footer from "../components/footer/footer";
import { homeObjDeals } from "../components/HotDeals";
import { homeObjthree } from "../components/Destinations/index";
import { homeObjSix } from "../components/Hero";
import Chat from "../components/Chat";
import HotDeals from "../components/HotDeals";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Hero {...homeObjSix} />
      <Destination {...homeObjthree} />
      <HotDeals {...homeObjDeals} />
      <Recommended {...homeObjTwo} />
      <ContactUs {...homeObjOne} />
      <Footer />
      <Chat />
    </>
  );
};
export default Home;
