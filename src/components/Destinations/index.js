import React, { useEffect, useState } from "react";
import "./destination.css";
import Cards from "./card";
import { GET } from "../../services/httpClient";
export const homeObjthree = {
  id: "destination",
};
const Destination = () => {
  const [slides, setSlides] = React.useState([]);
  const getAds = async () => {
    let record = await GET("/tourist/ads");
    if (record) setSlides(record);
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <>
      <div className="mainContainer">
        <div className="containerHeading">
          <h1>Destination</h1>
        </div>
        <div className="containerBody">
          <div className="cardContainer">
            {slides.map((e) => (
              <Cards key={e.id} slide={e} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
