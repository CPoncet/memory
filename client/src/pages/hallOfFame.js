import { useEffect, useState } from 'react';
import useScores from '../hooks/useScores';

const HallOfFame = () => {
  const [scores, setScores] = useState([]);

  const scoreService = useScores();

  useEffect(() => {
    // get the scores from the database
    scoreService.getScores().then(({ data }) => {
      setScores(data.scores.sort((a, b) => a.score - b.score));
    });
  }, [scoreService]);

  return (
    <div className="hof container mx-auto">
      <h1>Hall of Fame</h1>
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

export default HallOfFame;
