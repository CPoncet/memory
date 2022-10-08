import { Link } from 'react-router-dom';

const Modal = ({ won, show, totalTime }) => {
  return (
    <div class={`modal ${won ? 'win' : 'lost'} ${!show ? 'hidden' : ''}`}>
      {won ? (
        <>
          <p>Vous avez gagné ! Voici votre score: {totalTime}s</p>
          <Link to="/hof">Voir le Hall of Fame</Link>
        </>
      ) : (
        <>
          <p>
            Vous avez perdu ! Essayez d'être plus rapide la prochaine fois !
          </p>
          <Link to="/">Réessayer</Link>
        </>
      )}
    </div>
  );
};

export default Modal;
