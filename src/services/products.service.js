const { productsModel } = require('../models');
const { validateId } = require('./validations/validateInputBySchema');

const { notFoundData, productNotFound } = require('../helpers/errorMessages');
const { OK, NotFound, Registed, BadRequest } = require('../helpers/statusCodes');

const productsServiceGetAll = async () => {
  const result = await productsModel.productsModelGetAll();
  if (result.length > 0) {
    return { message: result, status: OK };
  }

  return {
    message: notFoundData,
    status: NotFound,
  };
};

const productsServiceGetById = async (id) => {
  const validationResult = validateId(id);
  if (validationResult.type) return validationResult;
  
  const result = await productsModel.productsModelGetById(id);
  if (result === undefined) {
    return {
      message: { message: productNotFound },
      status: NotFound,
    };
  }
  return { message: result, status: OK };
};

const productsServiceRegister = async (name) => {
  // const validationResult = validateName(name);
  // if (validationResult.type) return validationResult;

  if (name === undefined) {
    return { message: { message: '"name" is required' }, status: BadRequest };
  }

  if (name.length < 5) {
    return {
      message: { message: '"name" length must be at least 5 characters long' },
      status: 422,
    };
  }

  const result = await productsModel.productsModelRegister(name);

  return { message: { id: result, name }, status: Registed };
};

module.exports = {
  productsServiceGetAll,
  productsServiceGetById,
  productsServiceRegister,
};
