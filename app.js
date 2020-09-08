require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const singUpRouter = require('./routes/singup');
const singInRouter = require('./routes/singin');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const notFound = require('./routes/notFound');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const { PORT = 3000 } = process.env;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/signin', singInRouter);
app.use('/signup', singUpRouter);

app.use(auth);

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {

});
