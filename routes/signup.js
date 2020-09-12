const signUpRouter = require('express').Router();
const { createUser } = require('../controllers/createUser');
const { signUpValidator } = require('../validation/signUpValidator');

signUpRouter.post('/', signUpValidator, createUser);

module.exports = signUpRouter;
