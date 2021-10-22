const { ObjectId } = require("mongodb");
const { excelUtils } = require("./utils");

//Vamos a escribir un cliente que va a conectarse a mongo ATLAS
const { Database } = require("../database/index");

const COLLECTION = "products";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return await collection.findOne({ _id: ObjectId(id) });
};

const create = async (producto) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(producto);
  return result.insertedId;
};

const deleteById = async (id) => {
  const collection = await Database(COLLECTION);
  let result = await collection.deleteOne({ _id: ObjectId(id) });
  return result.insertedId;
};

const update = async (req, res) => {
  const collection = await Database(COLLECTION);
  let body = req.body;
  let result = await collection.updateOne(
    { "_id": ObjectId(body._id) },
    {
      $set: {
        "nombre": body.nombre,
        "precio": body.precio,
        "cantidad": body.cantidad,
      },
    }
  );
  return result;
};

const generateReports = async (name, res) => {
  const products = await getAll();
  excelUtils.excelGenerate(products, name, res);
};

module.exports.ProductsService = {
  getAll,
  getById,
  create,
  deleteById,
  generateReports,
  update,
};
