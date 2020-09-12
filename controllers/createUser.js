const bcrypt = require('bcryptjs');
const check = require('validator');
const User = require('../models/user');
const ValidationError = require('../errors/validationError');

const createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  if (!check.isEmail(email)) {
    throw new ValidationError('E-mail is not a valid!');
  }

  return bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user) => res.status(200).send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      email: user.email,
    }))
    .catch(next);
};

module.exports = { createUser };
