const express = require('express');
const productRoutes = require('./products.route');
const salesRoutes = require('./sales.routes');

const routes = express.Router();

routes.use('/products', productRoutes);
routes.use('/sales', salesRoutes);

module.exports = routes;
