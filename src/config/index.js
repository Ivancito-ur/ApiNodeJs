require('dotenv').config();

//Retorna un objeto, en nuestro caso la variable global PORT
module.exports.Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDbname: process.env.MONGO_DBNAME
}