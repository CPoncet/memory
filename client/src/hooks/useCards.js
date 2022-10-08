import { useEffect, useState } from 'react';

export const cardsName = [
  'redapple',
  'banana',
  'peach',
  'greenlemon',
  'grenada',
  'apricot',
  'lemon',
  'strawberry',
  'greenapple',
  'orangeapricot',
  'grapes',
  'watermelon',
  'plum',
  'pear',
  'cherries',
  'raspberry',
  'mango',
  'threecherries',
];

const useCards = () => {
  const generateListOfCards = () => {
    let cards = [];

    for (let i = 0; i < cardsName.length; i++) {
      const x = 0;
      const y = i * 100;

      cards.push({ coords: { x, y }, fruit: cardsName[i] });
      cards.push({ coords: { x, y }, fruit: cardsName[i] });
    }

    return shuffleCards(cards);
  };

  const shuffleCards = (cardsArray) => {
    return cardsArray
      .map((card) => ({ card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ card }) => card);
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(generateListOfCards());
  }, []);

  return cards;
};

export default useCards;
