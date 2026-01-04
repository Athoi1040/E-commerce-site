import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    if (error) setError("");
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // TODO: Add authentication logic here (e.g., API call)
    console.log("Login submitted:", formData);
    
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);

    // Example redirect on success
    navigate("/products");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <h2>Sign In</h2>
          <p>Welcome back! Please enter your details.</p>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>
          <div className="login-footer">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
        <div className="login-right">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;