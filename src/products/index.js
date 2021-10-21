const express = require('express');
//Trae la ruta de config global del proyecto
const { ProductController } = require("./controller");
const router = express.Router();


module.exports.ProductsAPI = (app) => {
    router
    .get('/', ProductController.getProducts)
    .get('/report', ProductController.generarExcel)
    .get('/:id', ProductController.getProduct)
    .post('/', ProductController.createProduct)
    .post('/update', ProductController.updateProduct)
    .post('/:id', ProductController.deleteProduct);
    
    
    //Ejemplos http://localhost:3000/api/products/..(arriba)
    app.use('/api/products', router)
}