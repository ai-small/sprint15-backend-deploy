const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorizedError');

module.exports = (req, res, next) => {
  const { JWT_SECRET = 'dev-secret' } = process.env;
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация'));
  }
  req.user = payload;
  return next();
};
