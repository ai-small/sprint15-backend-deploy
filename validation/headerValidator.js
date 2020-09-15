const { celebrate, Joi } = require('celebrate');
const { authValidator } = require('./customValidators');

module.exports.headerValidator = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required().custom(authValidator),
  }).unknown(true),
});
