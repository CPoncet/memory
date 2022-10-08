import { useEffect, useState } from 'react';
import useScores from '../hooks/useScores';

const HallOfFame = () => {
  const [scores, setScores] = useState([]);

  const scoreService = useScores();

  useEffect(() => {
    scoreService.getScores().then(({ data }) => {
      setScores(data.scores.sort((a, b) => a.score - b.score));
    });
  }, []);

  return (
    <>
      <h1>Hall of Fame</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={`score-${index}`}>
            {index === 0 && <strong>1er</strong>}
            {index === 1 && <strong>2eme</strong>}
            {index === 2 && <strong>3eme</strong>}: {score.username} -{' '}
            {score.score}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HallOfFame;
