import { useEffect, useState } from 'react';
import Card from '../components/card';
import Modal from '../components/game/modal';
import Timer from '../components/game/timer';
import useCards, { cardsName } from '../hooks/useCards';
import useScores from '../hooks/useScores';

const Game = () => {
  const cards = useCards();
  const scores = useScores();
  // Init timer in seconds
  const initialTimer = 5;
  const [timeLeft, setTimeLeft] = useState(initialTimer);
  const [totalTime, setTotalTime] = useState(0);

  const [won, setWon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [clickCount, setClickCount] = useState(0);
  const [cardsList, setCardsList] = useState(cardsName);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [disableClick, setDisableClick] = useState(false);

  const handleCardClick = (detail) => {
    if (clickCount > 2) {
      resetMatch();
      return;
    }
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
            setTotalTime(initialTimer - timeLeft);
            setWon(true);
            setShowModal(true);
          }

          setClickCount(0);
          setSelectedFruits([]);
        } else {
          // Si la paire n'est pas bonne on met un timeout de 0.5s pour permettre
          // de figer les deux cartes temporairement et donc mémoriser leur emplacement
          resetMatch();
        }

        break;
      default:
        resetMatch();
        break;
    }
  };

  const resetMatch = () => {
    setDisableClick(true);
    setTimeout(() => {
      setClickCount(0);
      setSelectedFruits([]);
      setDisableClick(false);
    }, 1000);
  };

  useEffect(() => {
    if (won) {
      scores.addScore({ username: localStorage.username, score: totalTime });
    }
    if (timeLeft <= 0) {
      setShowModal(true);
    }
  }, [timeLeft, won, scores, totalTime]);

  return (
    <>
      <Modal won={won} show={showModal} totalTime={totalTime} />

      {!won ? (
        timeLeft > 0 ? (
          <div>
            <h1>Il reste {cardsList.length / 2} paires à trouver</h1>
            <div className="cards-grid">
              {cards.map((card, index) => (
                <div
                  key={`card-${index}`}
                  onClick={() => !disableClick && handleCardClick(card.detail)}
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
              ))}
            </div>
            <Timer
              initialTimer={initialTimer}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              won={won}
            />
          </div>
        ) : null
      ) : null}
    </>
  );
};

export default Game;
