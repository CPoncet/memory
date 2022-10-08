const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/scores.controller');

router.post('/', scoreController.addScore);
router.get('/', scoreController.getScores);
