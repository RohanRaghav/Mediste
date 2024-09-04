import React, { useState, useEffect } from 'react';
const Chat = ({ isVisible, onClose }) => {
  const [userId, setUserId] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);

  // Fetch messages from the server
  useEffect(() => {
    if (isVisible) {
      fetch('http://localhost:3001/api/messages')
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error('Error fetching messages:', error));
    }
  }, [isVisible]);

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a message object
    const newMessage = {
      userId,
      hospitalName,
      query,
      timestamp: new Date().toISOString()
    };

    // Send message to the server
    fetch('http://localhost:3001/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessage)
    })
    .then(response => response.json())
    .then(data => {
      setMessages(prevMessages => [...prevMessages, data]);
      setQuery('');
    })
    .catch(error => console.error('Error submitting message:', error));
  };

  if (!isVisible) return null;

  return (
    <div className="chat-overlay">
      <div className="chat-container">
        <button className="chat-close" onClick={onClose}>X</button>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p><strong>User ID:</strong> {message.userId}</p>
              <p><strong>Hospital:</strong> {message.hospitalName}</p>
              <p><strong>Query:</strong> {message.query}</p>
              <p><strong>Time:</strong> {new Date(message.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Hospital Name"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            required
          />
          <textarea
            placeholder="Enter your query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
