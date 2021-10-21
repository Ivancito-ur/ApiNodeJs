const { ObjectId } = require("mongodb");

//Vamos a escribir un cliente que va a conectarse a mongo ATLAS
const { Database } = require("../database/index");

const COLLECTION = "user";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return await collection.findOne({ _id: ObjectId(id) });
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

const update = async (req, res) => {
  const collection = await Database(COLLECTION);
  let body = req.body;
  let result = await collection.updateOne(
    { _id: ObjectId(body._id) },
    {
      $set: {
        nombre: body.nombre,
        apellido: body.apellido,
        direccion: body.direccion,
        edad: body.edad
      },
    }
  );
  return body.nombre;
};


module.exports.UsersService = {
  getAll,
  getById,
  create,
  deleteById,
  update,
};
