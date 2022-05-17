import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function FormDialog(props) {
  const { dialogData } = props;

  const [open, setOpen] = React.useState(true);
  const [image] = React.useState(dialogData.imageUrl);
  const [description] = React.useState(dialogData.description);
  const [destination] = React.useState(dialogData.destination);
  const [phone] = React.useState(dialogData.phone);
  const [discount] = React.useState(dialogData.discount);

  const handleClose = () => {
    setOpen(false);
  };
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
        </DialogActions>
      </Dialog>
    </div>
  );
}
