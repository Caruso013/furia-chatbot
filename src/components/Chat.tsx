import { useEffect, useRef, useState } from "react";
import { botResponses } from "../data/responses";

const furiaLogo = "/logo-furia.svg"; 

interface Message {
  text: string;
  sender: "user" | "bot";
}

interface ChatProps {
  darkMode: boolean;
}

export function Chat({ darkMode }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedConversation, setHasStartedConversation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initialMessage = "Olá, tudo bem?";

  function getBestResponse(userInput: string): string {
    const normalizedInput = userInput.toLowerCase();
    let bestMatch = "";
    let highestScore = 0;

    for (const { question, answer } of botResponses) {
      const keywords = question.toLowerCase().split(" ");
      let score = 0;

      keywords.forEach((word) => {
        if (normalizedInput.includes(word)) {
          score += 1;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = answer;
      }
    }

    if (highestScore > 0) {
      return bestMatch;
    }

    return "Desculpe, não encontrei uma resposta exata para sua pergunta.";
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input.trim(), sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBestResponse(userMessage.text);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleInitialMessage = () => {
    const userMessage: Message = { text: initialMessage, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const botResponse = "Olá esse é um canal de comunicação da FURIA, bem-vindo Furioso, como podemos te ajudar com informações do nosso time de CS?";
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      setIsTyping(false);
      setHasStartedConversation(true);
    }, 1200);
  };

  return (
    <div
      className={`flex justify-center p-4 transition-colors duration-500 ${
        darkMode ? "bg-[#1C1C1C] text-furiaWhite" : "bg-furiaWhite text-furiaBlack"
      }`}
    >
      <div className="w-full max-w-md bg-transparent rounded-2xl shadow-2xl p-4 relative">
        <div className="flex justify-center mb-4">
          <h1 className="text-4xl font-bold mb-8 drop-shadow-lg flex items-center gap-4">
            <img
              src={furiaLogo}
              alt="FURIA Logo"
              className={`w-16 h-16 ${darkMode ? "invert" : ""}`}
            />
            Chatbot
          </h1>
        </div>

        <div
          className={`overflow-y-auto max-h-[500px] space-y-4 p-2 rounded-xl ${darkMode ? "bg-[#1C1C1C] text-furiaWhite" : "bg-white text-furiaBlack"}`}
        >
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className="flex items-center gap-2 max-w-[75%]">
                {msg.sender === "bot" && (
                  <img
                    src={furiaLogo}
                    alt="Bot Avatar"
                    className={`w-8 h-8 ${darkMode ? "invert" : ""}`} 
                  />
                )}
                <div
                  className={`p-3 rounded-xl text-sm ${
                    msg.sender === "user"
                      ? "bg-yellow-400 text-black"
                      : darkMode
                      ? "bg-[#DAA520] text-black" 
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start items-center gap-2">
              <img
                src={furiaLogo}
                alt="Bot Typing"
                className={`w-8 h-8 animate-pulse ${darkMode ? "invert" : ""}`} 
              />
              <div className="p-3 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-xl text-sm">
                Digitando...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {!hasStartedConversation && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={handleInitialMessage}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl transition"
            >
              Iniciar Conversa
            </button>
          </div>
        )}

        {hasStartedConversation && (
          <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl transition"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Chat;
