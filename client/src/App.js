import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/homepage";
import Navbar from "./Headers/Navbar";
import AboutUs from "./screens/AboutUsPage";
import SuccessPage from "./screens/successPage";
import ContactPage from "./screens/contactPage";
import LastSectionScreen from "./screens/BottomBar";
import AboutDeveloper from "./Components/aboutDeveloper";



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/success" element={<SuccessPage />} ></Route>
        <Route path="/contact" element={<ContactPage />} ></Route>
        <Route path="/aboutdeveloper" element={<AboutDeveloper />} ></Route>
      </Routes>
      </BrowserRouter>
    <LastSectionScreen />
    </div>
  );
}

export default App;
