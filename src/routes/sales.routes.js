const express = require('express');
const {
  validateProductId,
  validatQuantity,
  validatQuantityValue,
} = require('../middlewares/salesValidations');

const { salesController } = require('../controllers');

const salesRoute = express.Router();

salesRoute.get('/:id', salesController.salesControllerGetById);

salesRoute.get('/', salesController.salesControllerGetAll);

salesRoute.post('/',
  validateProductId,
  validatQuantity,
  validatQuantityValue,
  salesController.salesControllerInsert);

module.exports = salesRoute;
