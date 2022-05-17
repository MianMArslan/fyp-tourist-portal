import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import OpenAdDetails from "../openAdDetails/index";

const Cards = (props) => {
  const { slide } = props;
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <Card
        className="cardHover"
        sx={{ width: 300, height: 280, mr: 2, mt: 2, mb: 2 }}
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={slide.imageUrl}
          alt="NFT Get Fail"
        />
        <CardContent className="cardContent">
          <Typography>Destination {slide.destination}</Typography>
          <Typography style={{ color: "#fb9e00" }}>
            Click to view Detail
          </Typography>
        </CardContent>
      </Card>
      {openDialog && (
        <OpenAdDetails dialogData={slide} updateState={setOpenDialog} />
      )}
    </>
  );
};
export default Cards;
