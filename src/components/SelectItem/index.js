import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Card from "./card";
import { GET } from "../../services/httpClient";
import { Box } from "@mui/material";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
import _ from "lodash";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const OpenDialogue = (props) => {
  const { dialogData, setOpenDialog, getRecord } = props;

  const [open, setOpen] = useState(true);
  const [slides, setSlides] = useState([]);
  const [progress, setProgress] = useState(false);
  const [notFound, setNotFound] = useState(false);
  let [color] = useState("#fb9e00");

  const getAds = async () => {
    setProgress(false);
    let record = await GET("/tourist/search", {
      params: { destination: dialogData.cityName },
    });
    if (!_.isEmpty(record)) {
      setProgress(false);
      setSlides(record);
    } else {
      setProgress(false);
      setNotFound(true);
    }
  };
  useEffect(() => {
    getAds();
  }, []);
  const handleClose = () => {
    setOpenDialog(false);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Your Selected Item IS...</DialogTitle>
        <DialogContent>
          {slides.map((e) => (
            <Card key={e.id} slide={e} handleClose={handleClose} />
          ))}
        </DialogContent>
        {notFound && <h1>Result not available</h1>}
        {progress && (
          <Box
            style={{
              height: "100%",
              width: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RingLoader color={color} css={override} loading={!progress} />
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default OpenDialogue;
