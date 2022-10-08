import { useEffect, useState } from 'react';
import useScores from '../hooks/useScores';

const HallOfFame = () => {
  const [scores, setScores] = useState([]);

  const scoreService = useScores();

  useEffect(() => {
    scoreService.getScores().then(({ data }) => {
      setScores(data.scores);
    });
  }, []);

  return (
    <ul>
      {scores.map((score, index) => (
        <li key={`score-${index}`}>
          {score.username} - {score.score}
        </li>
      ))}
    </ul>
  );
};

export default HallOfFame;
