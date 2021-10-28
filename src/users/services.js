const { ObjectId } = require("mongodb");

//Vamos a escribir un cliente que va a conectarse a mongo ATLAS
const { Database } = require("../database/index");

const COLLECTION = "user";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return collection.findOne({ _id: ObjectId(id) });
};

const create = async (user) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(user);
  return result.insertedId;
};

const deleteById = async (id) => {
  const collection = await Database(COLLECTION);
  let result = await collection.deleteOne({ _id: ObjectId(id) });
  return result.insertedId;
};

const update = async (req) => {
  let body = req.body;
  return body.nombre;
};


module.exports.UsersService = {
  getAll,
  getById,
  create,
  deleteById,
  update,
};
