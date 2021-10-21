const debug = require("debug")("app:module-user-controller");
const { UsersService } = require("./services");
const { Response } = require("../common/response");
const createError = require("http-errors");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, "Lista de usuarios ", users);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let user = await UsersService.getById(id);
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Usuario ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let inserId = await UsersService.create(body);
        Response.success(res, 201, `Usuario agregado ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let inserId = await UsersService.deleteById(id);
      if (inserId) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Usuario ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },

  updateUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let inserId = await UsersService.update(req);
        Response.success(res, 201, `Usuario actualizado ${inserId}`, inserId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
   
  },
};
