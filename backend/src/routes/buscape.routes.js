const express = require('express');
const { getBuscapeProductsBySearch } = require('../controllers/buscape.controller');

const productsRouter = express.Router();

productsRouter.get('/buscape', getBuscapeProductsBySearch);

module.exports = productsRouter;
