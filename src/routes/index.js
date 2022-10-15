const express = require('express');
const productRoutes = require('./products.route');

const routes = express.Router();

routes.use('/products', productRoutes);

module.exports = routes;
