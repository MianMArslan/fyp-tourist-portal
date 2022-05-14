import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./service.css";
import Cards from './card';

export const homeObjthree = {
  id: "destination",
};
const Services = () => {


  const slideleft = () => {
    var slider = document.getElementById("service-slider");
    slider.scrollLeft = slider.scrollLeft - 750;
  };

  const slideright = () => {
    var slider = document.getElementById("service-slider");
    slider.scrollLeft = slider.scrollLeft + 650;
  };
  return (
    <>
      <div className="main-container">
        <div className ="main-service-slider-container">
      <h1 className="DealsH1">Services</h1>
          <KeyboardArrowLeftIcon
            size={40}
            className="service-slider-icon left"
            onClick={slideleft}
          />
          <Cards />
          <ChevronRightIcon
            size={40}
            className="service-slider-icon right"
            onClick={slideright}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
