const signinRouter = require('express').Router();
const { login } = require('../controllers/login');
const { signInValidator } = require('../validation/signInValidator');

signinRouter.post('/', signInValidator, login);

module.exports = signinRouter;
