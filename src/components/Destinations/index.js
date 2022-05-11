import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./destination.css";
import img1 from "../images/img1.jpg";

import { GET } from "../../services/httpClient";
export const homeObjthree = {
  id: "destination",
};
const Destination = ({ id }) => {
  const [slides, setSlides] = useState([
    {
      imageUrl: img1,
      destination: "Hunza",
      description: "Explore the Hunza in two days",
    },
  ]);

  const getAds = async () => {
    let record = await GET("/tourist/ads");
    if (record) setSlides(record);
  };

  const slideleft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 750;
  };

  const slideright = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 650;
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <>
      <div className="main-container">
        <div id="main-slider-container">
          <h1 className="DealsH1">Destinations</h1>
          <KeyboardArrowLeftIcon
            size={40}
            className="slider-icon left"
            onClick={slideleft}
          />
          <div id="slider">
            {slides.map((slide, index) => {
              return (
                <div className="slider-card" key={index}>
                  <div
                    className="slider-card-image"
                    style={{
                      backgroundImage: `url(${slide.imageUrl})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="slider-card-title">{slide.destination}</p>
                  <p className="slider-card-description">{slide.description}</p>
                </div>
              );
            })}
          </div>
          <ChevronRightIcon
            size={40}
            className="slider-icon right"
            onClick={slideright}
          />
        </div>
      </div>
    </>
  );
};

export default Destination;
