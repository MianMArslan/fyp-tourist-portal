import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function FormDialog(props) {
  const { dialogData, updateState } = props;

  const [open, setOpen] = React.useState(true);
  const [image, setImage] = React.useState(dialogData.imageUrl);
  const [description, setDescription] = React.useState(dialogData.description);
  const [destination, setDestination] = React.useState(dialogData.destination);
  const [phone, setPhone] = React.useState(dialogData.phone);
  const [discount, setDiscount] = React.useState(dialogData.discount);

  const handleClose = () => {
    updateState(false);
    setOpen(false);
  };

  // const handleSave = async () => {
  //   let res = await UPDATE("/agency", {
  //     amount,
  //     discount,
  //     phone,
  //     description,
  //     id: dialogData.id,
  //   });
  //   if (res?.code === 200) {
  //     setType("success");
  //     setOpenSnackbar(true);
  //     setSnackbarMessage(res?.message);
  //     setTimeout(() => {
  //       handleClose();
  //     }, 1000);
  //   } else {
  //     setType("error");
  //     setOpenSnackbar(true);
  //     setSnackbarMessage(res?.data.message);
  //   }
  // };

  return (
    <div className="dialog">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "#fb9e00" }}>Detail</DialogTitle>
        <Card sx={{ width: 550 }}>
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Description {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Destination {destination}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discount {discount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone {phone}
            </Typography>
          </CardContent>
        </Card>
        <DialogActions>
          <Button style={{ color: "#fb9e00" }} onClick={handleClose}>
            Back
          </Button>
          <Button style={{ color: "#fb9e00" }} onClick={() => {}}>
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
