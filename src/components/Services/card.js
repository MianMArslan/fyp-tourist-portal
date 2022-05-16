import React, { useEffect, useState } from "react";
import { GET } from "../../services/httpClient";
import "./service.css";

const Cards = () => {
  const [slides, setSlides] = useState([
    {
      imageUrl:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20788/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20789/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20780/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20781/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20782/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20783/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20784/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20785/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20780/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20797/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20791/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20792/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20793/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20794/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20795/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20796/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20799/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20767/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20768/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20769/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20770/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20771/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20772/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20773/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20774/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days",
      button: "Book Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20774/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      destination: "Hunza",
      description: "Explore the Hunza in two days ",
      button: "Book Now",
    },
  ]);

  const getAds = async () => {
    let record = await GET("/tourist/ads");
    if (record) setSlides(record);
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <>
      <div id="service-slider">
        {slides.map((slide, index) => {
          return (
            <div className="service-slider-card" key={index}>
              <div
                className="service-slider-card-image"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="service-slider-card-title">{slide.destination}</p>
              <p className="service-slider-card-description">
                {slide.description}
              </p>
              <button className="Button">Book Now</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
