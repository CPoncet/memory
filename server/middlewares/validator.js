const validators = require('../validators');

module.exports = (model, validator) => {
  if (!validators.hasOwnProperty(model)) {
    throw new Error(`'${model}' does not exist!`);
  }

  if (!validators[model].hasOwnProperty(validator)) {
    throw new Error(`'${validator}' does not exist!`);
  }

  return (req, res, next) => {
    const { error } = validators[model][validator].validate(req.body);

    if (error) {
      return res.status(400).json({ error: 'invalid data passed in body!' });
    }

    next();
  };
};
