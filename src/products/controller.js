const debug = require("debug")("app:module-products-controller");
const { ProductsService } = require("./services");
const { Response } = require("../common/response");
const createError = require("http-errors");

module.exports.ProductController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsService.getAll();
      Response.success(res, 200, "Lista de productos", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsService.getById(id);
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
  createProduct: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let inserId = await ProductsService.create(body);
        Response.success(res, 201, `Producto agregado ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let inserId = await ProductsService.deleteById(id);
      if (inserId) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Producto ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },

  generarExcel: (req, res) => {
    try {
      ProductsService.generateReports("Inventario", res);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let inserId = await ProductsService.update(req);
        Response.success(res, 201, `Producto actualizado ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
   
  },
};
