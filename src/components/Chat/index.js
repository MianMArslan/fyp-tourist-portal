import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import ChatDialog from "../Chat/chatDialog/index";
const Chat = () => {
  const [icon, setIcon] = React.useState(false);

  return (
    <>
      <div className="chat">
        <IconButton
          onClick={() => {
            setIcon(!icon);
          }}
        >
          {icon ? (
            <CloseIcon style={{ color: "fb9e00" }} fontSize="large" />
          ) : (
            <ChatIcon style={{ color: "fb9e00" }} fontSize="large" />
          )}
        </IconButton>
      </div>
      {icon && <ChatDialog updateState={setIcon} />}
    </>
  );
};

export default Chat;
