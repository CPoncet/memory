import { useEffect, useState } from 'react';
import Card from '../components/card';
import Timer from '../components/timer';
import useCards, { cardsName } from '../hooks/useCards';

const Game = () => {
  const cards = useCards();

  const initialTimer = 60;

  // Init timer in seconds
  const [timeLeft, setTimeLeft] = useState(initialTimer);
  const [won, setWon] = useState(false);

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
        const joinedFirstFruit = [...selectedFruits, detail];
        setSelectedFruits(joinedFirstFruit);
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

          if (!newCardsList.length) {
            setWon(true);
          }

          setClickCount(0);
          setSelectedFruits([]);
        } else {
          // Si la paire n'est pas bonne on met un timeout de 0.5s pour permettre
          // de figer les deux cartes temporairement et donc mémoriser leur emplacement
          setTimeout(() => {
            setClickCount(0);
            setSelectedFruits([]);
          }, 500);
        }

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (won) {
      alert('gagné en ' + (initialTimer - timeLeft) + 's');
    }
  }, [timeLeft, won]);
  console.log(timeLeft);

  return (
    <>
      <h1>Il reste {cardsList.length / 2} paires à trouver</h1>
      <div className="cards-grid">
        {!won
          ? timeLeft > 0
            ? cards.map((card, index) => (
                <div
                  key={`card-${index}`}
                  onClick={() => handleCardClick(card.detail)}
                >
                  <Card
                    coords={card.coords}
                    show={
                      selectedFruits.find((el) => el === card.detail)
                        ? true
                        : false
                    }
                    found={
                      cardsList.find((el) => el === card.detail) ? false : true
                    }
                  />
                </div>
              ))
            : 'Perdu'
          : 'Gagné'}
      </div>
      <Timer
        initialTimer={initialTimer}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        won={won}
      />
    </>
  );
};

export default Game;
