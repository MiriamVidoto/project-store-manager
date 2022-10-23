const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');

const { allSales, noSales } = require("../mock/sales.mock");

describe("Service de Sales", function () {
  describe("Listar todas vendas", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("Em caso de sucesso, retorna um objeto com status Ok", async function () {
      sinon.stub(salesModel, "salesModelGetAll").resolves(allSales);

      const result = await salesService.salesServiceGetAll();

      expect(result).to.be.a("object");
      expect(result.status).to.be.deep.eq(200);
      expect(result.message).to.be.deep.eq(allSales);
    });

    it("Caso nenhum a venda seja encontrada, retorna um objeto com status 404", async function () {
      sinon.stub(salesModel, "salesModelGetAll").resolves(noSales);

      const result = await salesService.salesServiceGetAll();

      expect(result).to.be.a("object");
      expect(result.status).to.be.deep.eq(404);
      expect(result.message).to.be.deep.eq("Não foram localizados dados!");
    });
  });
});
