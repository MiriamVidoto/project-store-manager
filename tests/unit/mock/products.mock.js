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

const insertId = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  },
  undefined
]

const sucessRegister = { message: { id: 4, name: "ProdutoX" }, status: 201 };

module.exports = {
  allProducts,
  noProducts,
  sucessResponseAll,
  sucessResponseId,
  BadRequest,
  insertId,
  sucessRegister,
};
