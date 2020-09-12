const cardsRouter = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { createCardValidator, cardIdValidator } = require('../validation/cardsRoutesValidation');

cardsRouter.get('/', getCards);
cardsRouter.post('/', createCardValidator, createCard);
cardsRouter.delete('/:cardId', cardIdValidator, deleteCard);
cardsRouter.put('/:cardId/likes', cardIdValidator, likeCard);
cardsRouter.delete('/:cardId/likes', cardIdValidator, dislikeCard);

module.exports = cardsRouter;
