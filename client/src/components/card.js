import Canvas from './canvas';

const Card = ({ coords, show, found }) => {
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
};

export default Card;
