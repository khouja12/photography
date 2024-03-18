import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 YourPhotographerName. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        {/* Add more links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
