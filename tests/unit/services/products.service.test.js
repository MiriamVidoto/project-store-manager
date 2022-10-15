const { expect } = require('chai');
const sinon = require("sinon");

const { productsModel } = require('../../../src/models');
const productsService = require('../../../src/services/products.service');
const { allProducts } = require("../mock/products.mock");

describe("Service de products", function () {
  describe("Listando todos os produtos", function () {
    it("Caso de sucesso, model retorna um array com elementos", async function () {
      sinon.stub(productsModel, "productsModelGetAll").resolves(allProducts);

      const result = await productsService.productsServiceGetAll();

      expect(result.message).to.be.a("array");
      expect(result.message).to.be.eq(allProducts);
    });
    // it("Caso de falha,retorna uma mensagem de erro", async function () {
    //   sinon.stub(productsModel, "productsModelGetAll").resolves(allProducts);

    // });
  });
  describe("Listando produtos por id", function () {
    it("Caso de sucesso, model retorna um objeto do produto referente ao id", async function () {
      sinon.stub(productsModel, "productsModelGetById").resolves(allProducts[0]);

      const result = await productsService.productsServiceGetById(1);

      expect(result.message).to.be.eq(allProducts[0]);
    });
    // it("Caso de falha,retorna uma mensagem de erro", async function () {
    //   sinon.stub(productsModel, "productsModelGetAll").resolves(allProducts);

    // });
  });
});
