const { celebrate, Joi } = require('celebrate');
const { urlValidator } = require('./customValidators');

const getUserByIdValidator = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }),
});

const updateUserValidator = celebrate({
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
  }),
});

const updateAvatarValidator = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(urlValidator),
  }),
});

module.exports = { getUserByIdValidator, updateUserValidator, updateAvatarValidator };
