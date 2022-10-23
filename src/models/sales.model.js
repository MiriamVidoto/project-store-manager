const connection = require('./db/connection');

const salesModelInsert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO  StoreManager.sales (date) VALUES (NOW())',
  );
  return insertId;
};

const salesProductsModelInsert = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO  StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
    [saleId, productId, quantity],
  );
};

const salesModelGetById = async (id) => {
  const [result] = await connection.execute(
    `SELECT
    s.date,
    sp.product_id AS productId,
    sp.quantity    
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE sp.sale_id = ?`,
    [id],
  );
  return result;
};

const salesModelGetAll = async () => {
  const [result] = await connection.execute(
    `SELECT
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s 
      ON sp.sale_id = s.id`,
  );
  return result;
};

module.exports = {
  salesModelInsert,
  salesModelGetById,
  salesModelGetAll,
  salesProductsModelInsert,
};