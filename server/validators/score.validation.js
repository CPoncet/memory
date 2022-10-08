const Joi = require('joi');

const addScore = Joi.object({
  score: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    score: Joi.number().required(),
  }),
});

module.exports = { addScore };
