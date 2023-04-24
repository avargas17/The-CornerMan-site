import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about-us">
              <h3 className="about-us-title">About Us</h3>
              <p className="about-us-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-us">
              <h3 className="contact-us-title">Contact Us</h3>
              <p className="contact-us-text">123 Main St<br/>New York, NY 10001<br/>Phone: (123) 456-7890<br/>Email: info@example.com</p>
              <a href="#" className="contact-us-link">Get in touch</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="follow-us">
              <h3 className="follow-us-title">Follow Us</h3>
              <ul className="social-media-list">
                <li className="social-media-item"><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li className="social-media-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="social-media-item"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;