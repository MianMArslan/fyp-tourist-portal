import React, { useEffect, useState } from "react";
import "./service.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Cards = (props) => {
  const { slide } = props;
  const [slides, setSlides] = React.useState([]);
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
