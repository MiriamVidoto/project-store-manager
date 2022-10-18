const { productsModel } = require('../models');
const { validateId } = require('./validations/validateInputBySchema');

const { notFoundData, productNotFound } = require('../helpers/errorMessages');
const { OK, BadRequest, Registed } = require('../helpers/statusCodes');

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

const productsServiceRegister = async (name) => {
  // const validationResult = validateId(name);
  // if (validationResult.type) return validationResult;

  const result = await productsModel.productsModelRegister(name);
  // if (result === undefined) {
  //   return {
  //     message: { message: productNotFound },
  //     status: BadRequest,
  //   };
  // }
  return { message: { id: result, name }, status: Registed };
};

module.exports = {
  productsServiceGetAll,
  productsServiceGetById,
  productsServiceRegister,
};
