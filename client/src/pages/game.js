import { useState } from 'react';
import Card from '../components/card';
import useCards, { cardsName } from '../hooks/useCards';

const Game = () => {
  const cards = useCards();
  const [clickCount, setClickCount] = useState(0);
  const [cardsList, setCardsList] = useState(cardsName);
  //const [firstFruit, setFirstFruit] = useState({});
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleCardClick = (detail) => {
    // Si la paire de fruits a déjà été trouvée, on stoppe l'event onClick
    if (!cardsList.find((el) => el.fruit === detail.fruit)) {
      return;
    }

    // Switch pour savoir si l'on est au premier ou deuxième clic
    switch (clickCount) {
      case 0:
        setClickCount(1);
        //setFirstFruit(detail);
        const joinedFirstFruit = [...selectedFruits, detail];
        setSelectedFruits(joinedFirstFruit);
        console.log(selectedFruits);
        break;
      case 1:
        setClickCount(2);
        const joinedFruits = [...selectedFruits, detail];
        setSelectedFruits(joinedFruits);

        if (
          joinedFruits[0].fruit === joinedFruits[1].fruit &&
          joinedFruits[0].occurence !== joinedFruits[1].occurence
        ) {
          const newCardsList = cardsList.filter(
            (card) => card !== joinedFruits[0] && card !== joinedFruits[1]
          );
          setCardsList(newCardsList);
        }
        setTimeout(() => {
          setClickCount(0);
          // setFirstFruit('');
          setSelectedFruits([]);
        }, 1000);
        break;
      default:
        break;
    }
  };
  console.log('outside', selectedFruits);
  console.log(cardsList.length);

  return (
    <>
      <h1>Il reste x paires à trouver</h1>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div
            key={`card-${index}`}
            onClick={() => handleCardClick(card.detail)}
          >
            <Card
              coords={card.coords}
              show={
                selectedFruits.find((el) => el === card.detail) ? true : false
              }
              found={cardsList.find((el) => el === card.detail) ? false : true}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Game;
