import React, { useEffect, useState } from "react";
import "./service.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Cards = (props) => {
  const { slide } = props;
  const [slides, setSlides] = React.useState([
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
  return (
    <>
      <Card
        className="cardHover"
        sx={{ width: 300, height: 280, mr: 2, mt: 2, mb: 2 }}
      >
        <CardMedia
          component="img"
          height="194"
          image={slide.imageUrl}
          alt="Paella dish"
        />
        <CardContent className="cardContent">
          <Button color="warning" variant="contained">
            Book Now
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
export default Cards;
