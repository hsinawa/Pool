import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/homepage";
import Navbar from "./Headers/Navbar";
import AboutUs from "./screens/AboutUsPage";
import SuccessPage from "./screens/successPage";
import ContactPage from "./screens/contactPage";
import LastSectionScreen from "./screens/BottomBar";
import AboutDeveloper from "./Components/aboutDeveloper";
import AdminPage from "./Admin/adminPage";
import Admin from "./Admin/admin";
import EnquiriesAdmin from "./Admin/Enquries";
import ErrorPage from "./screens/errorPage";
import AddProductsAdmin from "./Admin/addProducts";
import ProductListAdmin from "./Admin/productListAdmin";
import AllProducts from "./screens/productsAll";
import ProductDescription from "./screens/productDescription";
import ProductsByType from "./screens/ProductsBYType";



function App() {
  const admin = JSON.parse(localStorage.getItem('admin'))
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
        <Route path="/adminlogin" element={<AdminPage />} ></Route>
        <Route path="/products" element={<AllProducts />} ></Route>
        <Route path="/product/:type" element={<ProductsByType />} ></Route>
        <Route path="//productitem/:id" element={<ProductDescription />} ></Route>
        <Route path="/error" element={<ErrorPage />} ></Route>
        <Route path="/*" element={<ErrorPage />} ></Route>
        {admin?<Route path="/admin" element={<Admin />} ></Route>:null}
        {admin?<Route path="/admin/enquirylist" element={<EnquiriesAdmin />} ></Route>:null}
        {admin?<Route path="/admin/addproduct" element={<AddProductsAdmin />} ></Route>:null}
        {admin?<Route path="/admin/productlist" element={<ProductListAdmin />} ></Route>:null}
        
      </Routes>
      </BrowserRouter>
    <LastSectionScreen />
    </div>
  );
}

export default App;
