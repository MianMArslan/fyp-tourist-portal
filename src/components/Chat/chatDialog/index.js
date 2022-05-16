import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Snackbar from "../../snakebar/index";
import "./style.css";
import PeopleAround from "../chatDialog/peopleAround/index";
import ChatComponent from "../chatDialog/chatComponent/index";
import { GET, POST } from "../../../services/httpClient";
import _ from "lodash";

const ChatDialog = (props) => {
  const { closeChat, updateState } = props;
  const [row, setRow] = useState();
  const [room, setRoom] = useState();
  const [check, setCheck] = useState("");
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [snakbarMessage, setsnakbarMessage] = useState(false);
  if (closeChat) {
    closeChatRoom();
  }
  const closeChatRoom = async () => {
    let record = await POST("/tourist/chatRoomClose");
    if (record) updateState(false);
  };
  const peopleAround = async () => {
    let record = await GET("/tourist");
    if (!_.isEmpty(record)) setRow(record);
  };

  const roomId = async () => {
    let record = await POST("/tourist/generateRoom");
    if (record) setRoom(record);
  };

  const checkChatRequest = async () => {
    let record = await GET("/tourist/chatRequest");
    if (!record) roomId();
    else {
      setCheck(record);
    }
  };
  useEffect(() => {
    peopleAround();
    checkChatRequest();
  }, []);
  console.log(selected);
  console.log(room);
  console.log(row);
  return (
    <>
      <div className="chatDialog">
        {!selected && (
          <CardContent style={{ overflowY: "scroll", height: "250px" }}>
            {row ? (
              row.map((row) => (
                <PeopleAround
                  key={row.id}
                  data={row}
                  room={room}
                  selected={setSelected}
                  snackbarOpen={setOpen}
                  snackbarType={setType}
                  snackbarMessage={setsnakbarMessage}
                />
              ))
            ) : (
              <div>No Record Found...</div>
            )}
          </CardContent>
        )}
        {selected && (
          <ChatComponent room={room.data.roomId} username={row[0].firstName} />
        )}
        {check && !selected && (
          <ChatComponent room={check.roomId} username={row[0].firstName} />
        )}
        {open && (
          <Snackbar
            open={open}
            setOpen={setOpen}
            type={type}
            message={snakbarMessage}
          />
        )}
      </div>
    </>
  );
};

export default ChatDialog;
