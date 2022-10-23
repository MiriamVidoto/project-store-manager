const express = require('express');
const { productsController } = require('../controllers');

const productsRoute = express.Router();

productsRoute.get('/:id', productsController.productsControllerGetById);

productsRoute.get('/', productsController.productsControllerGetAll);

productsRoute.post('/', productsController.productsControllerRegister);

productsRoute.put('/:id', productsController.productsControllerUpdate);

module.exports = productsRoute;