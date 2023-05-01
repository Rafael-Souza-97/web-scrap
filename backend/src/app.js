const express = require('express');
const meliRoutes = require('./routes/meli.routes');
const buscapeRoutes = require('./routes/buscape.routes');
const allProductsRoutes = require('./routes/allProducts.routes');

const app = express();

app.use(express.json());

app.use('/', meliRoutes);
app.use('/', buscapeRoutes);
app.use('/', allProductsRoutes);

module.exports = app;
