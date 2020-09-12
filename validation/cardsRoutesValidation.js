const { celebrate, Joi } = require('celebrate');
const { urlValidator } = require('./customValidators');

const createCardValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .trim(),
    link: Joi.string().required().custom(urlValidator),
  }),
});

const cardIdValidator = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
});

module.exports = { createCardValidator, cardIdValidator };
