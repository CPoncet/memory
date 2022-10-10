import api from '../utils/api';

export class ScoreService {
  async addScore({ username, score }) {
    try {
      return await api.post('/scores', { score: { username, score } });
    } catch (err) {
      throw err;
    }
  }

  async getScores() {
    try {
      return await api.get('/scores');
    } catch (err) {
      throw err;
    }
  }
}
