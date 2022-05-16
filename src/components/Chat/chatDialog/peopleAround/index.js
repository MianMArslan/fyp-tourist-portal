import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import * as React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { POST } from "../../../../services/httpClient";

export default function PeopleAround(props) {
  const { data, room, selected, snackbarOpen, snackbarType, snackbarMessage } =
    props;
  const [request, setRequest] = React.useState(false);
  const [requestDate, setRequestData] = React.useState();

  const sendNotification = async () => {
    let value = await POST("/tourist/chatNotification", { id: data.id });
    if (value) {
      snackbarOpen(true);
      snackbarType("success");
      snackbarMessage(value.message);
    }
  };
  const sendChatRoomRequest = async () => {
    let value = await POST("/tourist/chatRoom", {
      roomId: room.data.roomId,
      receiverId: data.id,
    });
    if (value) {
      selected(true);
      setRequest(true);
      setRequestData(value);
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
        sendNotification();
        sendChatRoomRequest();
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
