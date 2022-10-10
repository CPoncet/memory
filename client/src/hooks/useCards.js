import { useState } from 'react';

const useCards = () => {
  const getCards = () => {
    let cards = [
      {
        fruit: 'redapple',
        occurence: 1,
      },
      {
        fruit: 'banana',
        occurence: 1,
      },
      {
        fruit: 'peach',
        occurence: 1,
      },
      {
        fruit: 'greenlemon',
        occurence: 1,
      },
      {
        fruit: 'redapple',
        occurence: 1,
      },
      {
        fruit: 'apricot',
        occurence: 1,
      },
      {
        fruit: 'lemon',
        occurence: 1,
      },
      {
        fruit: 'strawberry',
        occurence: 1,
      },
      {
        fruit: 'greenapple',
        occurence: 1,
      },
      {
        fruit: 'orangeapricot',
        occurence: 1,
      },
      {
        fruit: 'grapes',
        occurence: 1,
      },
      {
        fruit: 'watermelon',
        occurence: 1,
      },
      {
        fruit: 'plum',
        occurence: 1,
      },
      {
        fruit: 'pear',
        occurence: 1,
      },
      {
        fruit: 'cherrie',
        occurence: 1,
      },
      {
        fruit: 'raspberry',
        occurence: 1,
      },
      {
        fruit: 'mango',
        occurence: 1,
      },
      {
        fruit: 'threecherries',
        occurence: 1,
      },
      {
        fruit: 'redapple',
        occurence: 2,
      },
      {
        fruit: 'banana',
        occurence: 2,
      },
      {
        fruit: 'peach',
        occurence: 2,
      },
      {
        fruit: 'greenlemon',
        occurence: 2,
      },
      {
        fruit: 'redapple',
        occurence: 2,
      },
      {
        fruit: 'apricot',
        occurence: 2,
      },
      {
        fruit: 'lemon',
        occurence: 2,
      },
      {
        fruit: 'strawberry',
        occurence: 2,
      },
      {
        fruit: 'greenapple',
        occurence: 2,
      },
      {
        fruit: 'orangeapricot',
        occurence: 2,
      },
      {
        fruit: 'grapes',
        occurence: 2,
      },
      {
        fruit: 'watermelon',
        occurence: 2,
      },
      {
        fruit: 'plum',
        occurence: 2,
      },
      {
        fruit: 'pear',
        occurence: 2,
      },
      {
        fruit: 'cherrie',
        occurence: 2,
      },
      {
        fruit: 'raspberry',
        occurence: 2,
      },
      {
        fruit: 'mango',
        occurence: 2,
      },
      {
        fruit: 'threecherries',
        occurence: 2,
      },
    ];

    return cards;
  };

  const shuffleCards = (cardsArray) => {
    return cardsArray
      .map((card) => ({ card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ card }) => card);
  };

  const generateListOfCards = () => {
    const cardsName = getCards();
    let cards = [];

    for (let i = 0; i < cardsName.length; i++) {
      if (i >= cardsName.length / 2) {
        const x = 0;
        // Si on arrive à la moitié du tableau de fruits,
        // on repart au début des coordonnées de l'image
        const y = i * 100 - 1800;
        cards.push({ coords: { x, y }, detail: cardsName[i] });
      } else {
        const x = 0;
        const y = i * 100;
        cards.push({ coords: { x, y }, detail: cardsName[i] });
      }
    }

    return shuffleCards(cards);
    //return cards;
  };

  const [cards] = useState(generateListOfCards());

  return cards;
};

export default useCards;
