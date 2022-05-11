import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@mui/material";
import "./style.css";
const Chat = () => {
  return (
    <>
      <div className="chat">
        <IconButton>
          <ChatIcon style={{ color: "fb9e00" }} fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};

export default Chat;
