const NotFoundError = require('../errors/notFoundError');

function notFound() {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
}

module.exports = notFound;
