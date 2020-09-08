const signUpRouter = require('express').Router();
const { createUser } = require('../controllers/createUser');

signUpRouter.post('/', createUser);

module.exports = signUpRouter;
