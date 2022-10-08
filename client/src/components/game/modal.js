import { Link } from 'react-router-dom';

const Modal = ({ won, show, totalTime }) => {
  return (
    <div class={`modal ${won ? 'win' : 'lost'} ${!show ? 'hidden' : ''}`}>
      {won ? (
        <p>Vous avez gagné ! Voici votre score: {totalTime}s</p>
      ) : (
        <p>
          Vous avez perdu ! Essayez d'être plus rapide la prochaine fois !
          <Link to="/">Réessayer</Link>
        </p>
      )}
    </div>
  );
};

export default Modal;
