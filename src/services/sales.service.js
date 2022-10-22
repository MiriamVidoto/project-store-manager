const { salesModel } = require('../models');

const { OK, Registed, NotFound } = require('../helpers/statusCodes');
const { notFoundData, saleNotFound } = require('../helpers/errorMessages');

const salesServiceInsert = async (products) => {
  const result = await salesModel.salesModelInsert(products);
  return {
    status: Registed,
    message: result,
  };
};

const salesServiceGetById = async (id) => {
  const result = await salesModel.salesModelGetById(id);
  if (result) {
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