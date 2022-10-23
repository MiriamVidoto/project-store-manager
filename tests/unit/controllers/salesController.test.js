const { expect } = require("chai");
const sinon = require("sinon");

const { salesService } = require("../../../src/services");
const { salesController } = require('../../../src/controllers');

const { sucessResponseAll, BadRequest } = require("../mock/sales.mock");

describe("Controller de Sales", function () {
  describe("Listar todas vendas", function () {
    afterEach(() => {
      sinon.restore();
    });

    it("Em caso de sucesso, retorna o status Ok", async function () {
      sinon
        .stub(salesService, "salesServiceGetAll")
        .resolves(sucessResponseAll);

      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.salesControllerGetAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

    });

    it("Caso nenhum a venda seja encontrada, retorna o status 404", async function () {
      sinon.stub(salesService, "salesServiceGetAll").resolves(BadRequest);

      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.salesControllerGetAll(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
    });
  });
});