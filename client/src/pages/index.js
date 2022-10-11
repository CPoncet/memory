import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useScores from '../hooks/useScores';

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const scoreService = useScores();

  const [scores, setScores] = useState([]);

  const onSubmit = (data) => {
    localStorage.username = data.username;
    navigate('/game');
  };

  useEffect(() => {
    // get the scores from the database
    scoreService.getScores().then(({ data }) => {
      setScores(data.scores.sort((a, b) => a.score - b.score));
    });
  }, [scoreService]);

  return (
    <div className="home">
      <img src="logo-no-background.svg" alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nom</label>
          <input
            type="text"
            id="username"
            defaultValue={localStorage.username}
            {...register('username', {
              required: {
                message: 'Ce champ est requis',
                value: true,
              },
              pattern: {
                message:
                  'Veuillez insérer uniquement des lettres et des chiffres',
                value: /^[A-zÀ-ú]+$/i,
              },
            })}
          />
        </div>
        {errors.username && <span role="alert">{errors.username.message}</span>}
        <div className="btn-submit">
          <button>Jouer</button>
        </div>
      </form>
      <h2>Meilleurs scores</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={`score-${index}`}>
            {index === 0 && <strong>1er :</strong>}
            {index === 1 && <strong>2ème :</strong>}
            {index === 2 && <strong>3ème :</strong>} {score.username} -{' '}
            {score.score}s
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
