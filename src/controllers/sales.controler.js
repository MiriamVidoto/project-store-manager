const { salesService } = require('../services');

const salesControllerInsert = async (_req, res) => {
  // const products = req.body;
  // const result = await salesService.salesServiceInsert(products);
  res.status(200).json('result.message');
};

const salesControllerGetById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.salesServiceGetById(id);
  res.status(result.status).json(result.message);
};

const salesControllerGetAll = async (_req, res) => {
  const result = await salesService.salesServiceGetAll();
  res.status(result.status).json(result.message);
};

module.exports = {
  salesControllerInsert,
  salesControllerGetById,
  salesControllerGetAll,
};