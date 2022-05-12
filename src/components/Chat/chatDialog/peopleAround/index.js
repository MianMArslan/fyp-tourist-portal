import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import * as React from "react";
// import "./notificationCard.css";
import tz from "moment-timezone";
import { POST } from "../../../../services/httpClient";

export default function PeopleAround(props) {
  const { data, room, selected, snackbarOpen, snackbarType, snackbarMessage } =
    props;
  const sendNotification = async () => {
    let value = await POST("/tourist/chatNotification", { id: data.id });
    if (value) {
      snackbarOpen(true);
      snackbarType("success");
      snackbarMessage(value.message);
    }
  };
  return (
    <Card
      style={{
        width: "100%",
        marginBottom: "5px",
        cursor: "pointer",
      }}
      elevation={2}
      onClick={() => {
        selected(true);
        sendNotification();
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            U
          </Avatar>
        }
        title={`${data.firstName} ${data.lastName}`}
        subheader={`Distance ${data.distance}KM Aprox`}
      />
    </Card>
  );
}
