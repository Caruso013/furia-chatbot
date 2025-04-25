import React, { useState } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputMessage.trim() !== '') {
      setMessages([
        ...messages,
        { text: inputMessage, sender: 'user' },
      ]);
      setInputMessage('');

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Resposta automática do bot', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-furiaBlack p-4 rounded-lg shadow-lg">
      <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 border-b border-furiaGold">
 
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-furiaGold text-furiaBlack'
                  : 'bg-furiaBlack text-furiaWhite'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>


      <div className="flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleSendMessage}
          className="w-full p-3 rounded-lg border border-furiaGold dark:bg-furiaBlack dark:text-furiaWhite dark:border-furiaGold outline-none focus:ring-2 focus:ring-furiaGold transition duration-300"
          placeholder="Digite sua mensagem..."
        />
      </div>
    </div>
  );
};

export default Chat;
