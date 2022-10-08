const express = require('express');
const router = express.Router();
const ScoreController = require('../controllers/scores.controller');

const scoreController = new ScoreController();

router.post('/', scoreController.addScore);
router.get('/', scoreController.getScores);

module.exports = router;
