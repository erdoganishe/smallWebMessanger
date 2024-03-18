import React, { useState, useEffect } from 'react';
import './Chat.css'
const ChatPage = ({ username, lastActivity }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // fetch messages from API or use some other data loading logic here
    const newMessages = [
      {
        id: 1,
        text: 'Hello, how are you?',
        sender: 'User1'
      },
      {
        id: 2,
        text: 'I’m doing well, thanks!',
        sender: 'User2'
      },
      // add more messages here
    ];
    setMessages(newMessages);
  }, []);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <div className="username">{'Oleg'}</div>
        <div className="last-activity">{'lastActivity'}</div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === 'User1' ? 'user1' : 'user2'}`}>
            <div className="sender">{message.sender}</div>
            <div className="text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button onClick={() => addMessage({ id: Date.now(), text: 'Your message here', sender: 'User1' })}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;