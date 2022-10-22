const express = require('express');

const { salesController } = require('../controllers');

const salesRoute = express.Router();

salesRoute.get('/:id', salesController.salesControllerGetById);

salesRoute.get('/', salesController.salesControllerGetAll);

salesRoute.post('/', salesController.salesControllerInsert);

module.exports = salesRoute;
