import React, { useEffect, useState } from "react";
import { POST } from "../../services/httpClient";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Column2,
  ImgWrap,
  InfoRow,
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Img,
  Column1,
  TopLine,
  Heading,
  Button,
} from "./ContactElements";

import img1 from "../images/off the beaten track.png";
import { TextField, Box } from "@mui/material";

export const homeObjOne = {
  id: "contact",
  lightBg: false,
  lightText: true,
  topLine: "OFF THE BEATEN TRACK",
  headline: "Contact US",
  imgStart: false,
};

const ContactUs = ({ lightBg, lightText, id, imgStart, headline, topLine }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const initialValues = {
    suggestion: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const [isloading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const resetForm = () => {
    setFormValues(initialValues);
  };

  const create = async (formValues) => {
    setLoading(true);
    let res = await POST("/contactUs/tourist", formValues);
    if (res?.code === 200) {
      setType("success");
      setOpen(true);
      setLoading(false);
      setsnakbarMessage(res?.message);
      resetForm();
    } else {
      setType("error");
      setOpen(true);
      setLoading(false);
      setsnakbarMessage(res?.data.message);
      resetForm();
    }
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper data-aos="zoom-in">
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ width: 650, maxWidth: "100%" }}>
                    <TextField
                      label="Suggestion"
                      type="suggestion"
                      name="suggestion"
                      multiline
                      fullWidth
                      rows={10}
                      variant="standard"
                      placeholder="Enter your suggestion"
                      value={formValues.suggestion}
                      onChange={handleChange}
                    />
                  </Box>
                  <Button
                    type="submit"
                    onClick={async () => {
                      await create(formValues);
                    }}
                  >
                    {isloading && <CircularProgress />}
                    {!isloading && <span>Submit</span>}
                  </Button>
                </form>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap data-aos="zoom-in">
                <Img src={img1} alt="" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      {open && (
        <Snackbar
          open={open}
          setOpen={setOpen}
          type={type}
          message={snakbarMessage}
        />
      )}
    </>
  );
};

export default ContactUs;
