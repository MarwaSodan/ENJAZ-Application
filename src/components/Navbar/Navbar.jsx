import './Navbar.css';
import logo from "../../Assets/Logo.png";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" className={activeLink === "home" ? "active" : ""} onClick={() => handleClick("home")}>Home</a></li>
        <li><a href="#about" className={activeLink === "about" ? "active" : ""} onClick={() => handleClick("about")}>About us</a></li>
        <li><a href="#download" className={activeLink === "download" ? "active" : ""} onClick={() => handleClick("download")}>Download Application</a></li>
        <li><a href="#contact-us" className={activeLink === "contact-us" ? "active" : ""} onClick={() => handleClick("contact-us")}>Contact Us</a></li>
        <li><a href="#faq" className={activeLink === "faq" ? "active" : ""} onClick={() => handleClick("faq")}>FAQ</a></li>
      </ul>

      <button className="download-btn">Get Started</button>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
