import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Cards = (props) => {
  const { slide, handleClose } = props;
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
          alt="Paella dish"
        />
        <CardContent className="cardContent">
          <Typography variant="body2" color="text.secondary">
            Destination {slide.destination}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discount {slide.discount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone {slide.phone}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default Cards;
