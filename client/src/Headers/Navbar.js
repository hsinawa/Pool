import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useEffect } from "react";
import "./navStyle.css";

import logo from "../Static/wadbros.jpg";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProductAction,
  GetAllProductsAction,
} from "../Actions/productAction";
import { GetAllproductsReducer } from "../Reducers/productReducer";
import MuiAutocomplete from "./AutoComplete";

function Navbar() {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const { products, loading, error } = useSelector(
    (state) => state.GetAllproductsReducer
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetAllProductsAction());
  }, [dispatch]);

  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (event, value) => {
    setSelectedOption(value);
  };

  const handleOptionSelected = (event, value) => {
    if (value) {
      
      window.location.href = `/productitem/${value._id}`;
    }
  };

  return (
    <header>
      {admin ? (
        <p>
          <a href="/admin">
            {" "}
            <img
              src={logo}
              alt="logo-image"
              style={{
                width: "70px",
              }}
            />{" "}
          </a>
        </p>
      ) : (
        <h3>
          <a href="/">
            {" "}
            <img
              src={logo}
              alt="logo-image"
              style={{
                width: "70px",
              }}
            />{" "}
          </a>
        </h3>
      )}
      <nav ref={navRef} id="nav-styles">
        <a href="/about">About Us</a>
        <a href="/products">Our Products</a>
        <a href="/contact">Contact Us</a>

 
        {/* <Autocomplete
          id="free-solo-demo"
          freeSolo
          placeholder='Search...'
          options={products}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params}  />}
          onChange={handleOptionSelected}
          renderOption={(props, option) => (
            <li {...props}>
              <a href={`/productitem/${option._id}`} style={{textDecoration:'none'}} >{option.name}</a>
            </li>
          )}
        /> */}

<Autocomplete
      id="free-solo-demo"
      freeSolo
      options={products}
      getOptionLabel={(option) => option.name}
      onChange={handleOptionSelected}
      renderOption={(props, option) => (
        <li {...props}>
          <a href={`/productitem/${option._id}`}>{option.name}</a>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          style={{ width: '200px' }} // Increase width of TextField
          placeholder="Search for products" // Add a placeholder
        />
      )}
    />


        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
