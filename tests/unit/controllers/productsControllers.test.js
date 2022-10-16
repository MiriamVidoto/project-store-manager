const { expect } = require("chai");
const sinon = require("sinon");

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const {
  sucessResponseAll,
  sucessResponseId,
  BadRequest,
} = require("../mock/products.mock");


describe("Controller de produtos", function () {
  describe("Listar todos os produtos", function () {
    afterEach(() => {
      sinon.restore();
    });
    it("Em caso de sucesso responder com status OK", async function () {
      sinon
        .stub(productsService, "productsServiceGetAll")
        .resolves(sucessResponseAll);

      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.productsControllerGetAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it("Em caso de falha responder com status 404", async function () {
      sinon.stub(productsService, "productsServiceGetAll").resolves(BadRequest);

      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.productsControllerGetAll(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
    });
  });
  describe("Listar produtos por ids", function () {
    afterEach(() => {
      sinon.restore();
    });
    it("Em caso de sucesso responder com status OK", async function () {
      sinon
        .stub(productsService, "productsServiceGetById")
        .resolves(sucessResponseId);

      const req = {params: 1};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.productsControllerGetById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
        it("Em caso de falha responder com status 404", async function () {
          sinon
            .stub(productsService, "productsServiceGetById")
            .resolves(BadRequest);

          const req = { params: 1 };
          const res = {};
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();

          await productsController.productsControllerGetById(req, res);
          expect(res.status.calledWith(404)).to.be.equal(true);
        });
  });
});
