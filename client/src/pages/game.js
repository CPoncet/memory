import { useState } from 'react';
import Card from '../components/card';
import useCards, { cardsName } from '../hooks/useCards';

const Game = () => {
  const cards = useCards();
  const [clickCount, setClickCount] = useState(0);
  const [cardsList, setCardsList] = useState(cardsName);
  const [firstFruit, setFirstFruit] = useState('');

  const handleCardClick = (fruit) => {
    // Si la paire de fruits a déjà été trouvée, on stoppe l'event onClick
    if (!cardsList.includes(fruit)) {
      return;
    }

    // Switch pour savoir si l'on est au premier ou deuxième clic
    switch (clickCount) {
      case 0:
        setClickCount(1);
        setFirstFruit(fruit);
        break;
      case 1:
        setClickCount(0);
        if (firstFruit === fruit) {
          const index = cardsList.findIndex((el) => el === fruit);
          cardsList.splice(index, 1);
          setCardsList(cardsList);
        }
        break;
      default:
        alert('unknown error');
    }
  };
  console.log(cardsList);

  return (
    <>
      <h1>Il reste x paires à trouver</h1>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div
            key={`card-${index}`}
            onClick={() => handleCardClick(card.fruit)}
          >
            <Card
              coords={card.coords}
              found={cardsList.includes(card.fruit) ? true : false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Game;
