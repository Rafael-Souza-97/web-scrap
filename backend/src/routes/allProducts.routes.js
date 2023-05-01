const express = require('express');
const { getAllProductsBySearch } = require('../controllers/allProducts.controller');

const productsRouter = express.Router();

productsRouter.get('/allproducts', getAllProductsBySearch);

module.exports = productsRouter;
