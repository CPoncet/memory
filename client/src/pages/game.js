import { useEffect, useState } from 'react';
import Card from '../components/game/card';
import Modal from '../components/game/modal';
import Timer from '../components/game/timer';
import useCards from '../hooks/useCards';
import useScores from '../hooks/useScores';

const Game = () => {
  const cards = useCards();
  const scores = useScores();

  // Initial timer in seconds
  const initialTimer = 360;

  const [timeLeft, setTimeLeft] = useState(initialTimer);
  const [totalTime, setTotalTime] = useState(0);

  const [won, setWon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [clickCount, setClickCount] = useState(0);
  const [disableClick, setDisableClick] = useState(false);

  const [cardsList, setCardsList] = useState(cards);
  const [selectedFruits, setSelectedFruits] = useState([]);

  /**
   * Resets click counter and clears
   * temporary array of selected fruits
   */
  const resetMatch = () => {
    setDisableClick(true);

    // timeout is necessary to let the user see both cards
    // and memorize them before they are hidden again
    setTimeout(() => {
      setClickCount(0);
      setSelectedFruits([]);
      setDisableClick(false);
    }, 1000);
  };

  /**
   * Triggers actions on card click
   *
   * @param { fruit: string, occurence: number } detail
   * @returns void
   */
  const handleCardClick = (detail) => {
    if (clickCount > 2 || selectedFruits.length > 2 || disableClick) {
      resetMatch();
      return;
    }

    // If fruit pair has been found, stop onClick event
    if (!cardsList.find((el) => el.detail.fruit === detail.fruit)) {
      return;
    }

    // Switch to find out if we are on first or second click
    switch (clickCount) {
      case 0:
        // On first click
        setClickCount(1);

        // store the clicked fruit in a temporary array
        const joinedFirstFruit = [...selectedFruits, detail];
        setSelectedFruits(joinedFirstFruit);
        break;
      case 1:
        // On second click
        setClickCount(2);

        // store the clicked fruit in the temporary array
        const joinedFruits = [...selectedFruits, detail];
        setSelectedFruits(joinedFruits);

        // when clicked fruits have the same name but a different occurence
        if (
          joinedFruits[0].fruit === joinedFruits[1].fruit &&
          joinedFruits[0].occurence !== joinedFruits[1].occurence
        ) {
          // remove the fruits from the list of cards
          const newCardsList = cardsList.filter(
            (card) =>
              card.detail !== joinedFruits[0] && card.detail !== joinedFruits[1]
          );
          setCardsList(newCardsList);

          // when there are no cards left, game is won
          if (!newCardsList.length) {
            setTotalTime(initialTimer - timeLeft);
            setWon(true);
            setShowModal(true);
          }

          setClickCount(0);
          setSelectedFruits([]);
        } else {
          resetMatch();
        }

        break;
      default:
        resetMatch();
        break;
    }
  };

  useEffect(() => {
    if (won) {
      // persist the score in the database
      scores.addScore({ username: localStorage.username, score: totalTime });
    }
    if (timeLeft <= 0) {
      // game is lost
      setShowModal(true);
    }
  }, [timeLeft, won, scores, totalTime]);

  return (
    <div className="game container mx-auto">
      <Modal won={won} show={showModal} totalTime={totalTime} />

      {!won ? (
        timeLeft > 0 ? (
          <div className="game-holder">
            <div className="cards-grid">
              {cards.map((card, index) => (
                <div key={`card-${index}`}>
                  <div
                    className="card-holder"
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
                        cardsList.find((el) => el.detail === card.detail)
                          ? false
                          : true
                      }
                    />
                  </div>
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
    </div>
  );
};

export default Game;
