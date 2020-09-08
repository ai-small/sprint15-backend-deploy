const signinRouter = require('express').Router();
const { login } = require('../controllers/login');

signinRouter.post('/', login);

module.exports = signinRouter;
