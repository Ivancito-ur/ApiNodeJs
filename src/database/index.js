//Vamos a escribir un cliente que va a conectarse a mongo ATLAS
const { MongoClient } = require("mongodb");

const debug = require("debug")("app:module-database");

const { Config } = require("../config/index");

var connection = null;
module.exports.Database = (collection) =>
  new Promise(async (res, rej) => {
    //Utilizamos un patron singleton para conectarnos a la bd

    try {
      if (!connection) {
        const cliente = new MongoClient(Config.mongoUri);
        connection = await cliente.connect();
        debug("Nueva conexion realizada con Mongo Atlas");
      }
      debug("Reutilizando conexion");
      const db = connection.db(Config.mongoDbname);
      res(db.collection(collection));
    } catch (error) {
      rej(error);
    }
  });
