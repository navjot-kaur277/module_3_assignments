import React, { useState, useEffect } from 'react';
import './App.css';

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <div className="container">
        <div className="loader"></div>
        <p className="loading-text">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="profile-card">
        <div className="avatar">
          {user.name.charAt(0)}
        </div>
        <h2>{user.name}</h2>
        <div className="info-section">
          <div className="info-item">
            <span>Email</span>
            <p>{user.email}</p>
          </div>
          <div className="info-item">
            <span>Phone</span>
            <p>{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;