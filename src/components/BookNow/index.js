import React from 'react'
import { useState} from "react";
import "./Book.css";
import {POST} from "../../services/httpClient";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar";
import { TextField, Box } from "@mui/material";
// import img1 from "../images/off the beaten track.png"
import MuiPhoneNumber from 'material-ui-phone-number'
import { DatePicker } from '@material-ui/pickers';


const BookNow = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    members:"",
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
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const [phonenumber, setphonenumber] = useState("")
  const [myDate, setmyDate] = useState(new Date());
  const [isloading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const resetForm = () => {
    setFormValues(initialValues);
    setphonenumber("");
  };
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname.trim()) {
      setType("error");
      setsnakbarMessage("First Name required");
      setOpen(true);
    } else if (!/^[A-Za-z]+/.test(values.firstname.trim())) {
      setType("error");
      setsnakbarMessage("Enter a valid first name");
      setOpen(true);
    } else if (!values.lastname) {
      setType("error");
      setsnakbarMessage("Last Name is required!");
      setOpen(true);
    }
    if (!values.lastname.trim()) {
      setType("error");
      setsnakbarMessage("Enter a valid last name");
      setOpen(true);
    }
    if (!values.email) {
      setType("error");
      setsnakbarMessage("Email is Required");
      setOpen(true);
    } else if (!regex.test(values.email)) {
      setType("error");
      setsnakbarMessage("This is not a valid email format!");
      setOpen(true);
    }if (!values.members) {
      setType("error");
      setsnakbarMessage("Members is Required");
      setOpen(true);
    } 
     else return true;
  };
  const create = async (formValues) => {
    if (!phonenumber) {
      setType("error");
      setsnakbarMessage("Enter the phonenumber");
      setOpen(true);
    }else {
      formValues.Phonenumber = phonenumber;
      setLoading(true);
      let res = await POST ("/auth/registration", formValues);
      console.log(formValues)
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
        setsnakbarMessage(res?.message);
        resetForm();
      }
    }
  };
  return (
    <div className="form-container">
      {/* <div className="form-content-right"> */}
        {/* <img className="form-img" src={img1} alt="logo of the website" /> */}
      {/* </div> */}
      <div className="form-content-left">
        <form onSubmit={handleSubmit} className="form">
          <h1>Book Now</h1>
          <Box sx={{ width: 650, maxWidth: "100%" }}>
            <div className="form-inputs">
              <TextField
                label="First Name"
                type="name"
                fullWidth
                name="firstname"
                placeholder="Enter your first name"
                variant="standard"
                value={formValues.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <TextField
                label="Last Name"
                type="lastname"
                fullWidth
                name="lastname"
                placeholder="Enter your last name"
                variant="standard"
                value={formValues.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <TextField
                label="Email"
                type="email"
                fullWidth
                name="email"
                placeholder="Enter your email"
                variant="standard"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
                      
             <div className="form-inputs">
              <TextField
                label="No of Members"
                type="members"
                fullWidth
                name="members"
                placeholder="Enter your Number of Members"
                variant="standard"
                value={formValues.members}
                onChange={handleChange}
              />
            </div>
          <div className="form-inputs">
          <MuiPhoneNumber
                    name="phone"
                    fullWidth
                    label="Phone Number"
                    defaultCountry={"us"}
                    value={phonenumber}
                    onChange={setphonenumber}
                  />
            </div> 
            <div className="form-inputs">
            {/* <DatePicker
             disableFuture
             label="Responsive"
             openTo="year"
             views={['year', 'month', 'day']}
             value={myDate}
             onChange={(newValue) => {
               setmyDate(newValue);
             }}
           /> */}
           {/* <DatePicker
           value={myDate}
           onChange = {setmyDate}
           label = "Date"
           inputVariant='standard'
           format='MM/dd/yyyy'
           autoOk
           /> */}

            </div>

          </Box>
          <button
            className="form-input-btn"
            type="submit"
            onClick={async () => {
              let validation = validate(formValues);
              if (validation) await create(formValues);
            }}
          >
            {isloading && <CircularProgress />}
            {!isloading && <span>Book Now</span>}
          </button>
          {open && (
            <Snackbar
              open={open}
              setOpen={setOpen}
              type={type}
              message={snakbarMessage}
            />
          )}
        </form>
      </div>
    </div>
  );
          };

export default BookNow;