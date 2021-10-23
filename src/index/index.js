const express = require('express')
const createError = require("http-errors");

const { Response } = require('../common/response');


module.exports.IndexAPI = (app) => {

    const router = express.Router();
    
    router.get("/", (req,res) => {
        
        const menu = {
            products : `http://${req.headers.host}/api/products`,
            user : `http://${req.headers.host}/api/user`,
            sales : `http://${req.headers.host}/api/sales`
        }

        Response.success(res,200, "API INVENTARIO", menu);
    })

    app.use("/", router);

}

module.exports.NotFoundAPI = (app) => {

    const router = express.Router();
    
    router.all("*", (req,res) => {
        Response.error(res, new createError.NotFound);
    })

    app.use("/", router);
    
}
