import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Snackbar from "../../snakebar/index";
import "./style.css";
import PeopleAround from "../chatDialog/peopleAround/index";
import { GET, POST } from "../../../services/httpClient";
import _ from "lodash";

const ChatDialog = () => {
  const [row, setRow] = useState();
  const [room, setRoom] = useState();
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const peopleAround = async () => {
    let record = await GET("/tourist");
    if (!_.isEmpty(record)) setRow(record);
  };

  const roomId = async () => {
    let record = await POST("/tourist/generateRoom");
    if (record) setRoom(record);
  };
  useEffect(() => {
    peopleAround();
    roomId();
  }, []);
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
