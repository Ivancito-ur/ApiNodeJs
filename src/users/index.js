const express = require('express');
//Trae la ruta de config global del proyecto
const { UsersController } = require("./controller");
const router = express.Router();


module.exports.usersAPI = (app) => {
    router
    .get('/', UsersController.getUsers)
    //.get('/report', UsersController.generarExcel)
    .get('/:id', UsersController.getUser)
    .post('/', UsersController.createUser)
    .post('/update', UsersController.updateUser)
    .post('/:id', UsersController.deleteUser);
    
    
    //Ejemplos http://localhost:3000/api/user/..(arriba)
    app.use('/api/user', router)
}