import React, { useState } from 'react';
import Chat from './components/chat';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-8 transition-colors duration-500 ${
        darkMode ? 'bg-furiaBlack text-furiaWhite' : 'bg-furiaWhite text-furiaBlack'
      }`}
    >
      <h1 className="text-4xl font-bold text-amber-300 mb-8">FURIA E-Sports Chatbot</h1>
      <Chat />
      
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={toggleTheme}
      >
        <img
          src={darkMode ? '/moon-icon.svg' : '/sun-icon.svg'}
          alt="Theme Toggle"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}

export default App;
