const allProducts = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const noProducts = [];

const sucessResponseAll = {
  message:  allProducts ,
  status: 200,
};

const sucessResponseId = {
  message: allProducts[1] ,
  status: 200,
};

const BadRequest = {
  message: { message: "Product not found" },
  status: 404,
};

module.exports = {
  allProducts,
  noProducts,
  sucessResponseAll,
  sucessResponseId,
  BadRequest,
};
