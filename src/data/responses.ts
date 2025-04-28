import cs2Responses from "./cs2Responses.json";

interface BotResponses {
  question: string;
  answer: string;
}

export const botResponses: BotResponses[] = cs2Responses;

export const getBestResponse = (userInput: string): string => {
  const normalizedInput = userInput.toLowerCase().trim();
  
  const matchedResponse = botResponses.find((response) => {
    const keywords = response.question.toLowerCase().split(" ");
    return keywords.some((word) => normalizedInput.includes(word));
  });

  if (matchedResponse) {
    return matchedResponse.answer;
  }

  return "Desculpe, não encontrei uma resposta exata para sua pergunta.";
};

