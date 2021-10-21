//Importacion de paquetes
const express = require("express");
const debug = require("debug")("app:server");

//Trae la ruta de config global del proyecto
const { Config } = require("./src/config/index");
const { ProductsAPI } = require("./src/products/index");
const { usersAPI } = require("./src/users/index");
const { salesAPI } = require("./src/sales/index");
const { IndexAPI, NotFoundAPI } = require("./src/index/index");

const app = express();

/*De esta forma le damos la capacidad a nuestro aplicativo de recibir datos JSON
Cuerpo de la peticion*/
app.use(express.json());

//Modulos
IndexAPI(app);
ProductsAPI(app);
usersAPI(app);
salesAPI(app);
NotFoundAPI(app);



app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`);
});

//    "dev": "set DEBUG=app:* & nodemon index.js",
