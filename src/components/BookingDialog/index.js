import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

import "./style.css";
import { POST } from "../../services/httpClient";
import Snackbar from "../snakebar/index";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function FormDialog(props) {
  const { dialogData, setOpenDialog } = props;

  const [open, setOpen] = React.useState(true);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(false);
  const [name, setName] = React.useState("");
  const [adId] = React.useState(dialogData.id);
  const [phone, setPhone] = React.useState("");
  const [image] = React.useState(dialogData.imageUrl);
  const [description] = React.useState(dialogData.description);
  const [destination] = React.useState(dialogData.destination);
  const [phoneAgency] = React.useState(dialogData.phone);
  const [discount] = React.useState(dialogData.discount);
  const [adOwnerId] = React.useState(dialogData.userId);
  const [bookingDescription, setBookingDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  let [color] = React.useState("#fb9e00");

  const handleClose = () => {
    setOpen(false);
    setOpenDialog(false);
  };

  const handleSave = async () => {
    setLoading(true);
    let res = await POST("/tourist/createBooking", {
      adId: adId,
      name: name,
      description: bookingDescription,
      phone: phone,
      adOwnerId: adOwnerId,
    });
    console.log(res);
    if (res?.code === 200) {
      setLoading(false);
      setType("success");
      setOpenSnackbar(true);
      setSnackbarMessage(res?.data.message);
      setTimeout(() => {
        handleClose();
      }, 1500);
    } else {
      setLoading(false);
      setType("error");
      setOpenSnackbar(true);
      setSnackbarMessage(res?.data.message);
      setTimeout(() => {
        handleClose();
      }, 1500);
    }
  };

  return (
    <div className="dialog">
      <Dialog open={open} onClose={handleClose} maxWidth={"md"}>
        <DialogTitle style={{ color: "#fb9e00" }}>
          Confirm Your Booking
        </DialogTitle>
        <div className="bookingData">
          <DialogContent sx={{ width: 500 }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              fullWidth
              variant="standard"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="standard-textarea"
              label="Any Description"
              placeholder="Any Description"
              multiline
              fullWidth
              rows={10}
              variant="standard"
              value={bookingDescription}
              onChange={(e) => {
                setBookingDescription(e.target.value);
              }}
            />
          </DialogContent>
          <div className="card">
            <Typography variant="h3" color={color}>
              Ad Detail
            </Typography>
            <Card sx={{ width: 550 }}>
              <CardMedia
                component="img"
                height="194"
                image={image}
                alt="NFT GET Issue"
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
                  Phone {phoneAgency}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <DialogActions>
          {!loading ? (
            <>
              <Button style={{ color: "#fb9e00" }} onClick={handleClose}>
                Cancel
              </Button>
              <Button style={{ color: "#fb9e00" }} onClick={handleSave}>
                Book Now
              </Button>
            </>
          ) : (
            <ScaleLoader color={color} css={override} loading={loading} />
          )}
        </DialogActions>
      </Dialog>
      {openSnackbar && (
        <Snackbar
          open={open}
          setOpen={setOpen}
          type={type}
          message={snackbarMessage}
        />
      )}
    </div>
  );
}
