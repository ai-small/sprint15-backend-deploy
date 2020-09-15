const { celebrate, Joi } = require('celebrate');
const { urlValidator, passwordValidator } = require('./customValidators');

const signUpValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .trim(),
    about: Joi.string()
      .required()
      .min(2)
      .max(30)
      .trim(),
    avatar: Joi.string().required().custom(urlValidator),
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string().required().min(8).custom(passwordValidator),
  }),
});

module.exports = { signUpValidator };
