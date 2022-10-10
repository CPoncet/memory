import { memo } from 'react';
import Canvas from './canvas';

// We ask React to memorize the card to avoid
// a re-render of the cards
const Card = memo(({ coords, show, found }) => {
  const drawFruit = (ctx) => {
    const image = new Image();
    image.src = 'cards.png';

    image.onload = () => {
      ctx.drawImage(image, coords.x, coords.y, 100, 100, 0, 0, 100, 100);
    };
  };

  const drawCard = (ctx) => {
    const image = new Image();
    image.src = 'logo-no-background.svg';

    ctx.rect(0, 0, 100, 100);
    ctx.fillStyle = '#8d021f';
    ctx.fill();
    image.onload = () => {
      ctx.drawImage(image, 10, 10, 80, 80);
    };
  };

  return (
    <div className={`card ${show || found ? 'turn-card' : ''}`}>
      <div className="flip-card-inner">
        <Canvas className={`recto flip-card-front`} draw={drawCard} />
        <Canvas className="verso flip-card-back" draw={drawFruit} />
      </div>
    </div>
  );
});

export default Card;
