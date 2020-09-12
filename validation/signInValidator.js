const { celebrate, Joi } = require('celebrate');
const { passwordValidator } = require('./customValidators');

const signInValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string().required().min(8).custom(passwordValidator),
  }),
});

module.exports = { signInValidator };
