const express = require('express');
const { getMeliProductsBySearch } = require('../controllers/meli.controller');

const productsRouter = express.Router();

productsRouter.get('/meli', getMeliProductsBySearch);

module.exports = productsRouter;
