import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useEffect } from "react";
import "./navStyle.css";
import poolItemsData from "./fake.json";
import logo from "../Static/wadbros.jpg";

import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProductAction,
  GetAllProductsAction,
} from "../Actions/productAction";
import { GetAllproductsReducer } from "../Reducers/productReducer";

function Navbar() {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [query, setQuery] = useState("");
  const [testing,settesting] = useState({
    name:'3',
    id:'234'
  })
  const [suggestions, setSuggestions] = useState([]);
  const { products, loading, error } = useSelector(
    (state) => state.GetAllproductsReducer
  );



  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetAllProductsAction());
  }, [dispatch]);

  const fetchSuggestions = () => {
    if (products) {
      const filteredSuggestions = products?.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    fetchSuggestions(); // Call the fetchSuggestions function on input change
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
        <div className="autocomplete-search" >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}

          />
        <ul className="suggestions-list">
  {suggestions.map((suggestion, index) => (
    <li key={index} >
      <a href={`/productitem/${suggestion._id}`}  >{suggestion.name}</a>
    </li>
  ))}
</ul>

        </div>
 

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
