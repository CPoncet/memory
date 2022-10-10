import { useState } from 'react';
import { ScoreService } from '../services/scoreService';

const useScores = () => {
  const [scoreService] = useState(new ScoreService());

  return scoreService;
};

export default useScores;
