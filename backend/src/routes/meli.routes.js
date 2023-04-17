const express = require('express');
const { getMeliProductsBySearch } = require('../controllers/meli.controller');

const productsRouter = express.Router();

productsRouter.get('/api/meli', getMeliProductsBySearch);

module.exports = productsRouter;
