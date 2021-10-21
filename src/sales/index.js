const express = require('express');
//Trae la ruta de config global del proyecto
const { SalesController } = require("./controller");
const router = express.Router();


module.exports.salesAPI = (app) => {
    router
    .get('/', SalesController.getSales)
    .get('/:id', SalesController.getSale)
    .post('/', SalesController.createSale)
    .post('/', SalesController.createSale)
    .post('/update', SalesController.updateSale)
    .post('/:id', SalesController.deleteSale);
    
    //Ejemplos http://localhost:3000/api/user/..(arriba)
    app.use('/api/sales', router)


}