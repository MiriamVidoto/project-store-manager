const productsService = require('../services/products.service');

const productsControllerGetAll = async (_req, res) => {
  const result = await productsService.productsServiceGetAll();
  res.status(result.status).json(result.message);
};

const productsControllerGetById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.productsServiceGetById(id);
  res.status(result.status).json(result.message);
};

const productsControllerRegister = async (req, res) => {
  const { name } = req.body;
  const result = await productsService.productsServiceRegister(name);
  res.status(result.status).json(result.message);
};

const productsControllerUpdate = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await productsService.productsServiceUpdate(id, name);
  res.status(result.status).json(result.message);
};

module.exports = {
  productsControllerGetAll,
  productsControllerGetById,
  productsControllerRegister,
  productsControllerUpdate,
};
