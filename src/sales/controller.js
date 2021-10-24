const debug = require("debug")("app:module-products-controller");
const { SaleService } = require("./services");
const { Response } = require("../common/response");
const createError = require("http-errors");

module.exports.SalesController = {
  getSales: async (req, res) => {
    try {
      let ventas = await SaleService.getAll();
      Response.success(res, 200, "Lista de venta", ventas);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createSale: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let user = await SaleService.getByIdUser(body.idFrom);
        let product = await SaleService.getByIdProduct(body.idProducto);
        let inserId = await SaleService.create(user, product, body);
        Response.success(res, 201, `venta agregada`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  deleteSale: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let inserId = await SaleService.deleteById(id);
      if (inserId) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Venta ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  updateSale: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let inserId = await SaleService.update(req);
        Response.success(res, 201, `Venta actualizado ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
   
  },
  getSale: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await SaleService.getById(id);
      if (!product) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Producto ${id}`, product);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
}