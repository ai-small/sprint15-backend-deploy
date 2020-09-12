const check = require('validator');
const ValidationError = require('../errors/validationError');
const UnauthorizedError = require('../errors/unauthorizedError');

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

const authValidator = (authorization) => {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  return authorization;
};

module.exports = { passwordValidator, urlValidator, authValidator };
