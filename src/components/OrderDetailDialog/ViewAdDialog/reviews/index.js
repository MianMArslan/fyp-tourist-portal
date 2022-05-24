import * as React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { POST } from "../../../../services/httpClient";
import Button from "@mui/material/Button";
import Snackbar from "../../../snakebar/index";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating(props) {
  const { dialogData, handleClose } = props;
  console.log(
    "🚀 ~ file: index.js ~ line 47 ~ RadioGroupRating ~ dialogData",
    dialogData
  );

  const [value, setValue] = React.useState();
  const [open, setOpen] = React.useState(true);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState(false);
  const [defaultValue, setDefaultValue] = React.useState(
    dialogData?.ad?.adsReview?.rating
  );

  const submitReview = async () => {
    let res = await POST("/tourist/review", {
      adId: dialogData.ad.id,
      adOwnerId: dialogData.ad.userId,
      review: value,
    });
    if (res?.code === 200) {
      setType("success");
      setOpenSnackbar(true);
      setSnackbarMessage(res?.message);
      setTimeout(() => {
        handleClose();
      }, 1500);
    } else {
      setType("error");
      setOpenSnackbar(true);
      setSnackbarMessage(res?.data.message);
      setTimeout(() => {
        handleClose();
      }, 1500);
    }
  };
  return (
    <>
      <Rating
        name="highlight-selected-only"
        IconContainerComponent={IconContainer}
        defaultValue={defaultValue}
        highlightSelectedOnly
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Button style={{ color: "#fb9e00" }} onClick={submitReview}>
        Submit
      </Button>
      {openSnackbar && (
        <Snackbar
          open={open}
          setOpen={setOpen}
          type={type}
          message={snackbarMessage}
        />
      )}
    </>
  );
}
