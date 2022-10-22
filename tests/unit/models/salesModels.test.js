const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models')
const connection = require("../../../src/models/db/connection");

const { allSales, noSales } = require('../mock/sales.mock');

describe('Moldel de Sales', function() {
  describe("Listar todas vendas", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("Em caso de sucesso, retorna um array com todos os elementos", async function () {
      sinon.stub(connection, "execute").resolves([allSales]);

      const result = await salesModel.salesModelGetAll();

      expect(result).to.be.a("array");
      expect(result).to.be.deep.eq(allSales);
    });

    it("Caso nenhum a venda seja encontrada, retorna um array vazio", async function () {
      sinon.stub(connection, "execute").resolves([noSales]);

      const result = await salesModel.salesModelGetAll();

      expect(result).to.be.a("array");
      expect(result).to.be.deep.eq(noSales);
    });  
  });
});