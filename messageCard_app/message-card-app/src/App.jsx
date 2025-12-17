// src/App.jsx
import React from 'react';
import MessageCard from './MessageCard';
import './App.css'; // Importing CSS for styling

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">My Message Board</h1>
      
      <div className="card-grid">
        {/* Render the component multiple times with different props */}
        
        <MessageCard 
          title="Welcome!" 
          message="Thank you for visiting our new React application." 
        />

        <MessageCard 
          title="Important Update" 
          message="We have updated our terms of service effectively immediately." 
        />

        <MessageCard 
          title="Reminder" 
          message="Don't forget to submit your assignment by 11:59 PM tonight!" 
        />
        
        <MessageCard 
          title="Daily Quote" 
          message="Consistency is the key to mastering React." 
        />
      </div>
    </div>
  );
}

export default App;