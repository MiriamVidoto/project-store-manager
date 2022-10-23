const { salesModel } = require('../models');

const { OK, Registed, NotFound } = require('../helpers/statusCodes');
const { notFoundData, saleNotFound } = require('../helpers/errorMessages');

const salesServiceInsert = async (products) => {
  const saleId = await salesModel.salesModelInsert();
  const promiseSales = products.map((product) => salesModel.salesProductsModelInsert(
    saleId,
    product.productId,
    product.quantity,
  ));
  await Promise.all(promiseSales);
  return {
    status: Registed,
    message: { id: saleId, itemsSold: products },
  };
};

const salesServiceGetById = async (id) => {
  const result = await salesModel.salesModelGetById(id);
  if (result.length > 0) {
    return {
      status: OK,
      message: result,
    };
  }
  return {
    status: NotFound,
    message: { message: saleNotFound },
  };
};

const salesServiceGetAll = async () => {
  const result = await salesModel.salesModelGetAll();
  if (result.length > 0) {
    return {
      status: OK,
      message: result,
    };
  }
  return {
    status: NotFound,
    message: notFoundData,
  };
};

module.exports = {
  salesServiceInsert,
  salesServiceGetById,
  salesServiceGetAll,
};