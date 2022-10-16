const { productsModel } = require('../models');
const { validateId } = require('./validations/validateInputBySchema');

const { notFoundData, productNotFound } = require('../helpers/errorMessages');
const { OK, BadRequest } = require('../helpers/statusCodes');

const productsServiceGetAll = async () => {
  const result = await productsModel.productsModelGetAll();
  if (result.length > 0) {
    return { message: result, status: OK };
  }

  return {
    message: notFoundData,
    status: BadRequest,
  };
};

const productsServiceGetById = async (id) => {
  const validationResult = validateId(id);
  if (validationResult.type) return validationResult;
  
  const result = await productsModel.productsModelGetById(id);
  if (result === undefined) {
    return {
      message: { message: productNotFound },
      status: BadRequest,
    };
  }
  return { message: result, status: OK };
};

module.exports = {
  productsServiceGetAll,
  productsServiceGetById,
};
