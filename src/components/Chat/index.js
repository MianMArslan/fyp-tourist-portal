import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import ChatDialog from "../Chat/chatDialog/index";
import Snackbar from "../snakebar/index";
const Chat = () => {
  const [icon, setIcon] = React.useState(false);
  const [closeChat, setCloseChat] = React.useState(false);
  const [openChat, setOpenChat] = React.useState(false);
  const updateIcon = async () => {};
  return (
    <>
      <div className="chat">
        <IconButton
          onClick={() => {
            setIcon(!icon);
            if (!icon && closeChat) {
              setCloseChat(false);
            }
          }}
        >
          {icon ? (
            <CloseIcon style={{ color: "fb9e00" }} fontSize="large" />
          ) : (
            <ChatIcon style={{ color: "fb9e00" }} fontSize="large" />
          )}
        </IconButton>
      </div>
      {icon && <ChatDialog closeChat={closeChat} updateState={setCloseChat} />}
    </>
  );
};

export default Chat;
