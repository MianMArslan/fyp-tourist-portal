import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import BookNow from "./components/BookNow/index"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/BookNow" element={<BookNow />}></Route>

      </Routes>
    </Router>
  );
}
export default App;
