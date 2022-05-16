import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";
import "./chat.css";
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";
import IconButton from "@mui/material/IconButton";
import { POST } from "../../../../services/httpClient";
const socket = io.connect("http://localhost:4001");

function Chat({ username, room, close, selected }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  const closeConnection = async () => {
    await socket.emit("disconnect");
  };
  const closeChatRoom = async () => {
    let record = await POST("/tourist/chatRoomClose");
    if (record) {
      await closeConnection();
      close(true);
      selected(false);
    }
  };
  useEffect(() => {
    socket.emit("join_room", room);
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
        <IconButton
          color="secondary"
          aria-label="close"
          onClick={closeChatRoom}
        >
          <CancelPresentationRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
