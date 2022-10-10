const express = require('express');
const router = express.Router();
const ScoreController = require('../controllers/scores.controller');
const validator = require('../middlewares/validator');

const scoreController = new ScoreController();

// route definition by passing the method (either GET, POST, PUT, DELETE...)
// the path and the functions (or middlewares) that will handle the request
// until server responds
router.post('/', validator('score', 'addScore'), scoreController.addScore);
router.get('/', scoreController.getScores);

module.exports = router;
