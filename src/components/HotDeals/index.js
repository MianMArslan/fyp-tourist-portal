import React, { useEffect } from "react";
import "./service.css";
import Cards from "./card";
import { GET } from "../../services/httpClient";
export const homeObjDeals = {
  id: "deals",
};
const Services = ({ id }) => {
  const [slides, setSlides] = React.useState([]);
  const getAds = async () => {
    let record = await GET("/tourist/discountedAds");
    if (record) setSlides(record);
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <>
      <div className="mainContainer" id={id}>
        <div className="containerHeading">
          <h1>Hot Deals</h1>
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

export default Services;
