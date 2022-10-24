const validateProductId = (req, res, next) => {
  const products = req.body;
  const result = products.every((product) => product.productId);
  if (!result) {
    return res.status(400).send({ message: '"productId" is required' });
  }
  next();
};

const validatQuantity = (req, res, next) => {
  const products = req.body;
  const result = products.every((product) => product.quantity === undefined);
  if (result) {
    return res.status(400).send({ message: '"quantity" is required' });
  }
  next();
};

const validatQuantityValue = (req, res, next) => {
  const products = req.body;
  const result = products
    .every((product) => product.quantity > 0 && product.quantity !== 0);
  if (!result) {
    return res
      .status(422)
      .send({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validateProductId,
  validatQuantity,
  validatQuantityValue,
};