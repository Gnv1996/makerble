import React, { useState } from 'react';
import { FaPaperPlane, FaArrowLeft } from 'react-icons/fa';

function MessagesPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', content: 'Hello! How are you?', isSent: false },
    { id: 2, sender: 'You', content: 'Hi! I am good, thanks. You?', isSent: true },
    { id: 3, sender: 'John Doe', content: 'Doing well, thank you!', isSent: false },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), sender: 'You', content: newMessage, isSent: true }]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center bg-white px-4 py-3 shadow">
        <button className="text-gray-700 hover:text-gray-900">
          <FaArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800 ml-4">Messages</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-md">
          <div className="px-4 py-3 border-b">
            <h2 className="text-sm font-medium text-gray-600">Conversations</h2>
          </div>
          <ul className="p-2 space-y-2">
            <li className="p-2 bg-gray-100 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-gray-200">
              John Doe
            </li>
            <li className="p-2 rounded-md text-gray-800 cursor-pointer hover:bg-gray-200">
              Jane Smith
            </li>
          </ul>
        </aside>

        {/* Messages Section */}
        <main className="flex-1 flex flex-col bg-gray-100">
          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${
                  message.isSent ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.isSent
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <span className="text-sm">{message.content}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white p-4 border-t flex items-center">
            <input
              type="text"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center space-x-1"
              onClick={handleSendMessage}
            >
              <FaPaperPlane className="h-4 w-4" />
              <span>Send</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MessagesPage;
