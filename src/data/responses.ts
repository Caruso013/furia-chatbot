export const botResponses = {
  cs2: [
    "A FURIA CS2 venceu a última partida contra a MIBR!",
    "Fique ligado! A FURIA joga CS2 hoje às 18h!",
    "Sabia que a FURIA já representou o Brasil no Major de CS2?",
  ],
  lol: [
    "No LoL, a FURIA está se preparando para o próximo split do CBLOL.",
    "FURIA LoL teve uma grande vitória contra a paiN na última semana!",
    "Você acompanha o desempenho do Tutsz no Mid? Ele está em ótima fase!",
  ],
  valorant: [
    "FURIA Valorant jogará contra a LOUD na próxima rodada!",
    "Saiba tudo sobre os treinos intensos da line de Valorant!",
    "Você viu o clutch do Quick no último jogo da FURIA?",
  ],
  kingsleague: [
    "FURIA está dominando a Kings League com seu time ousado!",
    "O time da Kings League da FURIA tem um estilo agressivo e rápido.",
    "Hoje tem jogo da Kings League! Não perca a transmissão!",
  ],
};
export const getRandomResponse = (topic: string) => {
  const responses = botResponses[topic];
  if (responses && responses.length > 0) {
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return "Desculpe, não tenho informações sobre isso no momento.";
};