const { expect } = require("chai");
const sinon = require("sinon");
const { productsModel } = require("../../../src/models");
const connection = require("../../../src/models/db/connection");


const { allProducts, noProducts } = require("../mock/products.mock");

describe("Model de products", function () {
  describe("Listar todos os produtos", function () {

    afterEach(() => {
      sinon.restore();
    });
        
    it("Em caso de sucesso, retorna um array com todos os elementos", async function () {
      sinon.stub(connection, "execute").resolves([allProducts]);

      const result = await productsModel.productsModelGetAll();

      expect(result).to.be.a("array");
      expect(result).to.be.deep.eq(allProducts);
    });

    it("Caso nenhum produto seja encontrado, retorna um array vazio", async function () {
      sinon.stub(connection, "execute").resolves([noProducts]);

      const result = await productsModel.productsModelGetAll();

      expect(result).to.be.a("array");
      expect(result).to.be.deep.eq(noProducts);
    });  
  });

  describe("Listar produto por id", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("Deve retornar um objeto do produto referente ao id", async function () {
      sinon.stub(connection, "execute").resolves([[allProducts[0]]]);

      const result = await productsModel.productsModelGetById(allProducts[0].id);

      expect(result).to.be.deep.eq(allProducts[0]);
    });

    it("Caso nenhum produto seja encontrado, retorna undefined", async function () {
      sinon.stub(connection, "execute").resolves([undefined]);
      
      const result = await productsModel.productsModelGetAll(7);

      expect(result).to.be.undefined;
    });  
  });
});
