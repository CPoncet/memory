import { memo } from 'react';
import Canvas from './canvas';

// On demande à React de mémoriser la carte pour éviter
// un re-rendu systématique des cartes (provoqué par le timer)
const Card = memo(({ coords, show, found }) => {
  const drawFruit = (ctx) => {
    const image = new Image();
    image.src = 'cards.png';

    image.onload = () => {
      ctx.drawImage(image, coords.x, coords.y, 100, 100, 0, 0, 100, 100);
    };
  };

  const drawCard = (ctx) => {
    ctx.rect(0, 0, 100, 100);
    ctx.fillStyle = '#000000';
    ctx.fill();
  };

  return (
    <div className="card">
      <Canvas
        className={`recto ${show || found ? 'hidden' : ''}`}
        draw={drawCard}
      />
      <Canvas className="verso" draw={drawFruit} />
    </div>
  );
});

export default Card;
