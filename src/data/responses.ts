export const botResponses = {
  cs2: [
    "A FURIA brilhou no último campeonato de CS2!",
    "Você viu a última jogada da FURIA no CS2? Sensacional!",
    "A equipe de CS2 da FURIA está em ótima fase!",
  ],
  lol: [
    "FURIA no LoL vem forte para o próximo CBLOL!",
    "O mid laner da FURIA está fazendo história no LoL!",
    "Ansioso para ver a FURIA no próximo confronto de LoL?",
  ],
  valorant: [
    "A line de Valorant da FURIA está treinando pesado!",
    "Você viu aquele clutch absurdo da FURIA no Valorant?",
    "FURIA x LOUD vai ser insano no Valorant!",
  ],
  kingsleague: [
    "A FURIA está dominando a Kings League!",
    "O estilo agressivo da FURIA na Kings League é único!",
    "Hoje tem FURIA na Kings League, vamos torcer!",
  ],
  default: [
    "Que bacana! A FURIA está sempre evoluindo!",
    "Me fala mais! Adoro conversar sobre a FURIA!",
    "A FURIA representa a garra do Brasil!",
  ],
};

export const getRandomLocalResponse = (topic: keyof typeof botResponses) => {
  const responses = botResponses[topic] || botResponses.default;
  return responses[Math.floor(Math.random() * responses.length)];
};

export const getAIResponseFromAPI = async (message: string): Promise<string> => {
  try {
    return `Simulando IA real: você falou sobre "${message}"!`;
  } catch (error) {
    return "Desculpe, houve um problema ao tentar buscar a resposta.";
  }
};
