import React from 'react';
import './ChatListItem.css';

const testUsers = [
  { id: 1, name: 'Alice', lastMessage: 'Message', unreadMessages: 3 },
  { id: 2, name: 'Bob', lastMessage: 'Message', unreadMessages: 0 },
  { id: 3, name: 'Charlie', lastMessage: 'Message', unreadMessages: 5 },
  { id: 4, name: 'David', lastMessage: 'Message', unreadMessages: 0 },
  { id: 5, name: 'Eve', lastMessage: 'Message', unreadMessages: 2 },
];

const ChatListItem = ({ chat, isSelected, onClick }) => (
  <div
    className={`chat-list-item ${isSelected ? 'selected' : ''}`}
    onClick={onClick}
  >
    <div className="chat-list-item-name">{chat.name}<br />{chat.lastMessage}</div>
    {chat.unreadMessages > 0 && (
      <div className="chat-list-item-unread">{chat.unreadMessages}</div>
    )}
  </div>
);

const ChatList = () => {
  const [selectedChatId, setSelectedChatId] = React.useState(null);

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div className="chat-list-container">
      <div className="chat-list-header">Chats</div>
      <div className="chat-list-scrollable-container">
        <div className="chat-list-scrollable">
          {testUsers.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              isSelected={chat.id === selectedChatId}
              onClick={() => handleChatSelect(chat.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;