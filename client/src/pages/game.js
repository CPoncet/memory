import { useState } from 'react';
import Card from '../components/card';
import useCards, { cardsName } from '../hooks/useCards';

const Game = () => {
  const cards = useCards();
  const [clickCount, setClickCount] = useState(0);
  const [firstFruit, setFirstFruit] = useState('');
  const [secondFruit, setSecondFruit] = useState('');

  const cardsList = cardsName;

  const handleCardClick = (fruit) => {
    switch (clickCount) {
      case 0:
        setClickCount(1);
        setFirstFruit(fruit);
        break;
      case 1:
        setClickCount(0);
        setSecondFruit(fruit);
        if (firstFruit === secondFruit) {
          const index = cardsList.findIndex((el) => el === fruit);
          cardsList.splice(index, 1);
        }
        break;
      default:
        alert('unknown error');
    }
  };

  console.log(cardsList);

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <Card
          onClick={() => handleCardClick(card.fruit)}
          key={`card-${index}`}
          coords={card.coords}
        />
      ))}
    </div>
  );
};

export default Game;
