import React, { useEffect, useState } from "react";
import "./service.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import BookingDialog from "../BookingDialog/index";
const Cards = (props) => {
  const { slide } = props;
  const [openDialog, setOpenDialog] = useState(false);
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
          <Button
            color="warning"
            variant="contained"
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            Book Now
          </Button>
        </CardContent>
      </Card>
      {openDialog && (
        <BookingDialog dialogData={slide} updateState={setOpenDialog} />
      )}
    </>
  );
};
export default Cards;
