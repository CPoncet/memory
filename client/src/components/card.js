import Canvas from './canvas';

const Card = ({ coords }) => {
  const draw = (ctx) => {
    const image = new Image();
    image.src = 'cards.png';

    image.onload = () => {
      ctx.drawImage(image, coords.x, coords.y, 100, 100, 0, 0, 100, 100);
    };
  };

  return (
    <div className="card">
      <div className="recto">Recto</div>
      <Canvas draw={draw} />
    </div>
  );
};

export default Card;
