import React, { useState, useEffect } from 'react';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish WebSocket connection
    const newSocket = new WebSocket('ws://localhost:8080'); // Replace with your WebSocket server URL

    newSocket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    newSocket.onmessage = (event) => {
      // Update messages state with incoming data
      setMessages(prevMessages => [...prevMessages, event.data]);
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    newSocket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    // Clean up WebSocket connection when component unmounts
    return () => {
      newSocket.close();
    };

  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>Real-Time Data Updates</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default WebSocketComponent;




