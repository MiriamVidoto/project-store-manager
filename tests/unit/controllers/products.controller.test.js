// const { expect } = require("chai");
// const chai = require("chai");
// const sinon = require("sinon");
// // const sinonChai = require("sinon-chai");

// const { returnService } = require("../mock/products.mock");
// const productsService = require("../../../src/services/products.service");
// const productsController = require("../../../src/controller/products.controller");

// // chai.use(sinonChai);

// describe("Controller de produtos", function () {
//   describe("listagem de todos os produtos", function () {
//     it("Se lista todos os produtos", async function () {
//       const res = {};
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon
//         .stub(productsService, "productsServiceGetAll")
//         .resolves(returnService);

//       await productsController.productsControllerGetAll({}, res);

//       expect(res.status).to.have.been.calledOnceWith(200);
//       expect(res.json).to.have.been.calledOnceWith(returnService.message);
//     });
//   });
// });
