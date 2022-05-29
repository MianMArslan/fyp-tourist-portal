import React, { useEffect} from "react";
import "./style.css";
import Cards from "./card";
import { GET } from "../../services/httpClient";
export const homeObjTwo = {
  id: "recommended",
};
const Recommended = ({id}) => {
  const [slides, setSlides] = React.useState([]);
  const getAds = async () => {
    let record = await GET("/tourist/recommendedAds");
    if (record) setSlides(record);
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <>
      <div className="mainContainer" id = {id}>
        <div className="containerHeading">
          <h1>Recommended For You</h1>
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

export default Recommended;
