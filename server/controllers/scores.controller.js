const knex = require('../database/schema');

class ScoreController {
  async addScore(req, res) {
    const { score } = req.body;

    const addedScore = await knex('scores').insert(score);

    res.status(200).json({ addedScore });
  }

  async getScores(req, res) {
    const scores = await knex.from('scores').select('*');

    res.status(200).json({ scores });
  }
}

module.exports = ScoreController;
