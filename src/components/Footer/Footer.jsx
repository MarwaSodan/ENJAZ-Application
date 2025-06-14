import './Footer.css';

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import logo from "../../Assets/LogoFooter.png"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-info">
          <div className="logo"> <img src={logo} width={200} alt="" /> </div>

          <p>Kuwait - Capital - Sharq - 15300</p>
          <p>Enjazapp@gmail.com</p> <br />
          <p>Enjaz© 2025. All Rights Reserved.</p>
        </div>

        <div className="footer-section pages">
          <h4>Pages</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <div className="newsletter-input">
            <input type="email" placeholder="Email address..." />
            <FaArrowUpRightFromSquare className="icon" />
          </div>
          <div className="send-btn-wrapper">
            <button className="send-btn">Send</button>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
