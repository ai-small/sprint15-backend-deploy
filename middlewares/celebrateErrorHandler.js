const { isCelebrateError } = require('celebrate');
const ValidationError = require('../errors/validationError');

function celebrateErrorHandler(err, req, res, next) {
  if (isCelebrateError(err)) {
    const obj = Object.fromEntries(err.details.entries());
    const whatWeValidate = Object.keys(obj);
    const [celebrateError] = obj[whatWeValidate].details;
    return next(new ValidationError(`${celebrateError.message}`));
  }
  return next(err);
}

module.exports = celebrateErrorHandler;
