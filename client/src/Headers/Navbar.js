import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import './navStyle.css'
import poolItemsData from './fake.json'
function Navbar() {
	const navRef = useRef();
  
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = () => {
    const filteredSuggestions = poolItemsData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleInputChange = event => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    fetchSuggestions(); // Call the fetchSuggestions function on input change
  };
    
  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})


	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef} style={{
        marginLeft:isMobile?'0px':'30%'
      }} >
				<a href="/about">About Us</a>
				<a href="/products">Our Products</a>
				<a href="/contact">Contact Us</a>
                <div className="autocomplete-search">	
                <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion.name}</li>
        ))}
      </ul>
      </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;