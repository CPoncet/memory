const Joi = require('joi');

// Joi allows us to validate against a certain schema
const addScore = Joi.object({
  score: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    score: Joi.number().required(),
  }),
});

module.exports = { addScore };
