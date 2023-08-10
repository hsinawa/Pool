import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/homepage";
import Navbar from "./Headers/Navbar";
import AboutUs from "./screens/AboutUsPage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
