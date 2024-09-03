import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomepageComponent/Homepage";
import AboutUs from "./OtherComponent/AboutUs";
import Gallery from "./OtherComponent/Gallery";
import GalleryTwo from "./OtherComponent/GalleryTwo";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/GalleryTwo" element={<GalleryTwo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
