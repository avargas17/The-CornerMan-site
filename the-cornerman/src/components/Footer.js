import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Let us in your corner</h4>
          <p> The cornerman is dedicated to providing MMA fans with the most up to date combat sports information</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: avargas3@example.com</p>
          <p>Phone: +1 555 262 773</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 The Cornerman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
