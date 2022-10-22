const connection = require('./db/connection');

const salesModelInsert = async () => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const salesModelGetById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales  WHERE id = ?',
    [id],
  );
  return result;
};

const salesModelGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return result;
};

module.exports = {
  salesModelInsert,
  salesModelGetById,
  salesModelGetAll,
};