const express = require('express');
const { productsController } = require('../controllers');
const { validateName, validateNameLength } = require('../middlewares/productsValidations');

const productsRoute = express.Router();

productsRoute.get('/:id', productsController.productsControllerGetById);

productsRoute.get('/', productsController.productsControllerGetAll);

productsRoute.post('/', productsController.productsControllerRegister);

productsRoute.put('/:id',
  validateName,
  validateNameLength,
  productsController.productsControllerUpdate);

module.exports = productsRoute;