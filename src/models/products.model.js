const connection = require('./db/connection');

const productsModelGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const productsModelGetById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const productsModelRegister = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUES(?)',
    [name],
  );

  return insertId;
};

const productsModelUpdate = async (id, name) => {
  const [{ changedRows }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return changedRows;
};

module.exports = {
  productsModelGetAll,
  productsModelGetById,
  productsModelRegister,
  productsModelUpdate,
};
