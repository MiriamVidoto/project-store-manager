const { expect } = require("chai");
const sinon = require("sinon");
const { productsModel } = require("../../../src/models");
const connection = require("../../../src/models/db/connection");

const mockProducts = require("../mock/products.mock");

describe("Model de products", function () {
  describe("Listar todos os produtos", function () {
    beforeEach(() => {
      sinon.stub(connection, "execute").resolves([mockProducts.allProducts]);
    });

    it("Deve retornar um array com todos os elementos", async function () {
      const result = await productsModel.productsModelGetAll();

      expect(result).to.be.a("array");
      expect(result).to.be.deep.eq(mockProducts.allProducts);
    });

    afterEach(() => {
      sinon.restore();
    });
  });
  describe("Listar produto por id", function () {
    beforeEach(() => {
      sinon.stub(connection, "execute").resolves([mockProducts.allProducts[0]]);
    });

    it("Deve retornar um objeto do produto referente ao id", async function () {
      const result = await productsModel.productsModelGetById(1);

      expect(result).to.be.deep.eq(mockProducts.allProducts[0]);
    });

    afterEach(() => {
      sinon.restore();
    });
  });
});
