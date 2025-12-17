// src/MessageCard.jsx
import React from 'react';

// This component accepts 'title' and 'message' as props
const MessageCard = ({ title, message }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-message">{message}</p>
    </div>
  );
};

export default MessageCard;