export const botResponses = {
  cs2: [
    'A FURIA está dominando no CS2, fique de olho nas partidas!',
    'Sabia que a FURIA tem um dos melhores elencos no CS2? Confira mais!',
  ],
  lol: [
    'A FURIA está arrasando no League of Legends!',
    'O time da FURIA no LOL está em alta, eles têm grandes chances neste campeonato!',
  ],
  valorant: [
    'A FURIA no Valorant está surpreendendo a todos!',
    'Não perca os próximos jogos da FURIA no Valorant, são imperdíveis!',
  ],
  kingsleague: [
    'A FURIA tem mostrado um desempenho incrível na Kings League!',
    'Você já viu a performance da FURIA na Kings League? Impressionante!',
  ],
  default: [
    'Oi! Como posso te ajudar? Fale sobre a FURIA ou qualquer outro jogo!',
  ],
};

export const getRandomLocalResponse = (topic: keyof typeof botResponses) => {
  const responses = botResponses[topic];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};
