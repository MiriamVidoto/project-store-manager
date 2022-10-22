const express = require('express');
const { productsController } = require('../controllers');

const productsRoute = express.Router();

productsRoute.get('/:id', productsController.productsControllerGetById);

productsRoute.get('/', productsController.productsControllerGetAll);

productsRoute.post('/', productsController.productsControllerRegister);

module.exports = productsRoute;