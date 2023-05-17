import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Let us in your corner</h4>
          <p> The cornerman is dedicated to providing MMA fans with the most up to date information</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 The Cornerman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
