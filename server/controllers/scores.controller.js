const knex = require('../database/schema');

class ScoreController {
  /**
   * Handles insertion of scores in the database
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns Express.Response
   */
  async addScore(req, res) {
    const { score } = req.body;

    try {
      await knex('scores').insert(score);
      return res.status(201).json({ message: 'Score successfully added' });
    } catch (err) {
      return res.status(400).json({ err });
    }
  }

  /**
   * Returns all scores from the database
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   *
   * @returns Express.Response
   */
  async getScores(req, res) {
    const scores = await knex.from('scores').select('*');

    return res.status(200).json({ scores });
  }
}

module.exports = ScoreController;
