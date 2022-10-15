const { idSchema } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) { return { type: error.details[0].type, message: 'please enter a valid id' }; }
  return { type: null, message: '' };
};

module.exports = {
  validateId,
};
