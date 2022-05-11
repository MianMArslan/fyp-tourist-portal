import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
// import ForgetPassword from "./component/forget/Forgetpassword";
// import LoginForm from "./component/loginform/Loginform";
// import { TermsCondition } from "./component/Terms and Conditions";
// import EmailMessage from "./component/EmailVerification/Emailmessage";
// import Signup from "./component/Signup/SignupForm";
// import ResendVerificationEmail from "./component/resendVerificaionEmail/index";
// import ResetPassword from "./component/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/Login" element={<LoginForm />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        <Route path="/TermsAndConditions" element={<TermsCondition />}></Route>
        <Route path="/emailMessage" element={<EmailMessage />}></Route>
        <Route
          path="/resendVerificationEmail"
          element={<ResendVerificationEmail />}
        ></Route> */}
      </Routes>
    </Router>
  );
}
export default App;
