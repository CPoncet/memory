const knex = require('../database/schema');

class ScoreController {
  async addScore(req, res) {
    const { score } = req.body;

    try {
      const addedScore = await knex('scores').insert(score);
      return res.status(201).json({ message: 'Score successfully added' });
    } catch (err) {
      return res.status(400).json({ err });
    }
  }

  async getScores(req, res) {
    const scores = await knex.from('scores').select('*');

    res.status(200).json({ scores });
  }
}

module.exports = ScoreController;
