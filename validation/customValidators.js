const check = require('validator');
const ValidationError = require('../errors/validationError');

const passwordValidator = (password) => {
  if (!password) {
    throw new ValidationError('Empty password!');
  }

  if (check.isEmpty(password, { ignore_whitespace: true })) {
    throw new ValidationError('password contains only spaces!');
  }

  return password;
};

const urlValidator = (link) => {
  if (!link) {
    throw new ValidationError('Empty avatar!');
  }

  if (!check.isURL(link, { protocols: ['http', 'https'], require_protocol: true })) {
    throw new ValidationError('link is not a valid!');
  }

  return link;
};

module.exports = { passwordValidator, urlValidator };
