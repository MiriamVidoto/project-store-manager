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

module.exports = {
  productsControllerGetAll,
  productsControllerGetById,
};
