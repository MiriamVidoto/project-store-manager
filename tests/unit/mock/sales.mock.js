const allSales = [
  {
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },
];

const noSales = [];

const sucessResponseAll = {
  message:  allSales ,
  status: 200,
};

const BadRequest = {
  message: { message: "Product not found" },
  status: 404,
};

module.exports = {
  allSales,
  noSales,
  sucessResponseAll,
  BadRequest,
};