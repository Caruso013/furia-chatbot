import React, { useState, useEffect, useRef } from 'react';
import { getRandomResponse } from '../data/responses';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = { text: input, sender: 'user' }; 
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      let topic = 'default'; 
  
      if (input.toLowerCase().includes('cs2')) {
        topic = 'cs2';
      } else if (input.toLowerCase().includes('lol')) {
        topic = 'lol';
      } else if (input.toLowerCase().includes('valorant')) {
        topic = 'valorant';
      } else if (input.toLowerCase().includes('kings league')) {
        topic = 'kingsleague';
      }
  
      const botReply = getRandomResponse(topic);
      const botMessage: Message = { text: botReply, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-full max-w-xl p-4 rounded-xl shadow-2xl bg-white dark:bg-furiaBlack text-furiaBlack dark:text-furiaWhite relative">
      <div className="text-xl font-bold mb-2">FURIA Bot</div>
      <div ref={chatRef} className="h-96 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-[80%] animate-fadeIn ${
              msg.sender === 'user'
                ? 'self-end bg-amber-300 text-black ml-auto'
                : 'self-start bg-gray-200 dark:bg-gray-700'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {typing && (
          <div className="italic text-gray-500 animate-pulse">FURIA Bot está digitando...</div>
        )}
      </div>
      <div className="flex items-center border-t pt-2 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          className="flex-1 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-amber-300 rounded-xl text-black hover:bg-amber-400 transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
