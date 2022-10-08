const express = require('express');
const router = express.Router();
const ScoreController = require('../controllers/scores.controller');
const validator = require('../middlewares/validator');

const scoreController = new ScoreController();

router.post('/', validator('score', 'addScore'), scoreController.addScore);
router.get('/', scoreController.getScores);

module.exports = router;
