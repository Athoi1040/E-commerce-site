import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">ShopEase</h3>
          <p className="footer-description">
            Elevating your shopping experience with curated collections and premium quality products.
            Style meets comfort in every purchase.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop Collection</Link></li>
            <li><Link to="/cart">My Cart</Link></li>
            <li><Link to="/profile">My Account</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul className="footer-links">
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">Shipping Policy</Link></li>
            <li><Link to="#">Returns & Exchanges</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Stay Connected</h4>
          <div className="social-icons">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
          <div className="newsletter-mini">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;