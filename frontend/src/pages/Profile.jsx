import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      alert("Please login to access profile");
      navigate("/login");
    }
  }, [navigate, isLoggedIn]);

  if (!isLoggedIn) return null;

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "January 15, 2023",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  };

  const orders = [
    { id: 101, date: "Oct 24, 2023", total: "$129.99", status: "Delivered" },
    { id: 102, date: "Nov 05, 2023", total: "$79.99", status: "Processing" },
    { id: 103, date: "Nov 12, 2023", total: "$199.99", status: "Shipped" },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-card user-info">
          <div className="profile-avatar">
            <img src={user.avatar} alt="Profile" />
          </div>
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <p className="join-date">Member since {user.joinDate}</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        <div className="profile-card order-history">
          <h3>Order History</h3>
          {orders.length > 0 ? (
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                    <td>
                      <span className={`status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;