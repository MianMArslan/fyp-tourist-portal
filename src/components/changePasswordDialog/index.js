import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.css";
import Snackbar from "../snakebar/index";
import { UPDATE } from "../../services/httpClient";

export default function FormDialog(props) {
  const { setOpenDialog } = props;
  const [open, setOpen] = React.useState(true);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(false);
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const handleClose = () => {
    setOpen(false);
    setOpenDialog(false);
  };

  const handleSave = async () => {
    let res = await UPDATE("/tourist/changePassword", {
      oldpassword: oldPassword,
      newpassword: newPassword,
    });
    if (res?.data?.code === 200) {
      setType("success");
      setOpenSnackbar(true);
      setSnackbarMessage(res?.data.message);
      setTimeout(() => {
        handleClose();
      }, 1000);
    } else {
      setType("error");
      setOpenSnackbar(true);
      setSnackbarMessage(res?.data.message);
      setTimeout(() => {
        handleClose();
      }, 1000);
    }
  };

  return (
    <div className="dialog">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "#fb9e00" }}>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="oldPassword"
            label="Old Password"
            fullWidth
            variant="standard"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="newPassword"
            label="New Password"
            fullWidth
            variant="standard"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#fb9e00" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{ color: "#fb9e00" }} onClick={handleSave}>
            Save
          </Button>
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
