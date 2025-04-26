import React, { useState } from 'react';
import Chat from './components/Chat';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-8 transition-colors duration-500 ${
        darkMode ? 'bg-furiaBlack text-furiaWhite' : 'bg-furiaWhite text-furiaBlack'
      }`}
    >
      <h1 className="text-4xl font-bold text-amber-300 mb-8 drop-shadow-lg">
        FURIA E-Sports Chatbot
      </h1>

      <div className="relative w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-700 backdrop-blur-lg">
        <Chat />
      </div>

      <motion.div
        whileTap={{ rotate: 45, scale: 1.2 }}
        className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-amber-300 dark:bg-gray-700 cursor-pointer transition-all duration-500 shadow-lg"
        onClick={toggleTheme}
      >
        <div className="relative w-6 h-6 transition-all duration-500">
          {darkMode ? (
            <img
              src="/moon-icon.svg"
              alt="Modo Escuro"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <img
              src="/sun-icon.svg"
              alt="Modo Claro"
              className="w-6 h-6 rounded-full"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default App;
