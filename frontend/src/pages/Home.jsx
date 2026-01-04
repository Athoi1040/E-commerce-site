// src/pages/Home.jsx
import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Discover amazing products and deals everyday!</p>
         <h1> Shop Now</h1>
       
      </section>

      <section className="featured-collection">
        <div className="collection-text">
          <h2> Latest Trends</h2>
          <p>
            Explore our new collection. From casual wear to party outfits,
            find everything you need to style up your little ones. High quality,
            comfortable, and stylish.
          </p>
          {/* <button className="secondary-btn">Explore Boys' Wear</button> */}
        </div>
        <div className="collection-image">
          <img src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Boys Shopping" />
        </div>
      </section>

      <section className="trending-section">
        <h2>Trending Now</h2>
        <div className="trending-grid">
          <div className="trending-card">
            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Men's Jacket" />
            <h3>Men's Jacket</h3>
            <p>$49.99</p>
          </div>
          <div className="trending-card">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sneakers" />
            <h3>Urban Sneakers</h3>
            <p>$79.99</p>
          </div>
          <div className="trending-card">
            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Backpack" />
            <h3>Travel Backpack</h3>
            <p>$39.99</p>
          </div>
        </div>
      </section>

      <section className="sale-banner">
        <div className="sale-content">
          <h2>Summer Sale</h2>
          <p>Up to 50% off on selected Men's Accessories</p>
          <button className="sale-btn">View Offers</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered at lightning speed.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💎</div>
          <h3>Best Quality</h3>
          <p>We provide only the highest quality products.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎧</div>
          <h3>24/7 Support</h3>
          <p>Always here to help you with your queries.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
