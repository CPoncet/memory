import { Link } from 'react-router-dom';

const Modal = ({ won, show, totalTime }) => {
  return (
    <div className={`modal ${won ? 'win' : 'lost'} ${!show ? 'hidden' : ''}`}>
      {won ? (
        <>
          <h1>Vous avez gagné ! Voici votre score: {totalTime}s</h1>
          <Link className="btn-nav" to="/hof">
            Voir le Hall of Fame
          </Link>
        </>
      ) : (
        <>
          <h1>
            Vous avez perdu ! Essayez d'être plus rapide la prochaine fois !
          </h1>
          <Link className="btn-nav" to="/">
            Réessayer
          </Link>
        </>
      )}
    </div>
  );
};

export default Modal;
