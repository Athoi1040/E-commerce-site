import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./Products";
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="product-details-container">
        <h2>Product not found</h2>
        <button className="back-btn" onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={() => navigate("/products")}>
        &larr; Back to Products
      </button>
      <div className="product-details-wrapper">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">
            {product.description ||
              "This is a premium quality product designed to meet your needs. It offers exceptional performance, durability, and style. Perfect for everyday use."}
          </p>
          <div className="product-actions">
            <button
              className={`add-to-cart-btn-details ${isAdded ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {isAdded ? "Added!" : "Add to Cart"}
            </button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;