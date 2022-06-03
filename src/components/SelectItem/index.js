import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
const OpenDialogue = (props) => {

const { dialogData, setOpenDialog, getRecord } = props;
const [open, setOpen] = React.useState(true);
const slide = [
    {
        imageUrl: 'https://images.pexels.com/photos/20788/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
    }
]
  return (

    <Dialog open = {open} maxWidth = "md">
        <DialogTitle>Your Selected Item IS...</DialogTitle>
        <DialogContent>
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
          >
            Book Now
          </Button>
        </CardContent>
      </Card>

        </DialogContent>
    </Dialog>

  )
}

export default OpenDialogue