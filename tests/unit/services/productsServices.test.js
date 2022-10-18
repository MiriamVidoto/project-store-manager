const { expect } = require('chai');
const sinon = require("sinon");

const { productsModel } = require('../../../src/models');
const productsService = require('../../../src/services/products.service');
const { allProducts, noProducts } = require("../mock/products.mock");

describe("Service de products", function () {
  describe("Listar todos os produtos", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("Caso de sucesso, retorna um objeto com elementos", async function () {
      sinon.stub(productsModel, "productsModelGetAll").resolves(noProducts);

      const result = await productsService.productsServiceGetAll();
      
      expect(result.message).to.be.a("array");
      expect(result.message).to.be.eq(allProducts);
      expect(result.status).to.be.eq(200)
    });
    it("Caso de falha,retorna uma mensagem de erro", async function () {
      sinon.stub(productsModel, "productsModelGetAll").resolves(noProducts);

      const result = await productsService.productsServiceGetAll();
  
      expect(result.message).to.be.eq("Não foram localizados dados!");
      expect(result.status).to.be.eq(404);

    });
  });
  describe("Listar produtos por id", function () {
    afterEach(() => {
      sinon.restore();
    });
    
    it("Caso de sucesso, model retorna um objeto do produto referente ao id", async function () {
      sinon.stub(productsModel, "productsModelGetById").resolves(allProducts[0]);

      const result = await productsService.productsServiceGetById(allProducts[0].id);

      expect(result.message).to.be.eq(allProducts[0]);
    });
    
    it("Caso de falha,retorna uma mensagem de erro", async function () {
      sinon.stub(productsModel, "productsModelGetAll").resolves(undefined);

      const result = await productsService.productsServiceGetById(100);


      expect(result.status).to.be.eq(404);

    });
  });
});
