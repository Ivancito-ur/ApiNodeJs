const { Database } = require("../database/index");
const { ObjectId } = require("mongodb");

const COLLECTION = "sales";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const create = async (user, body) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insert([
    { idFrom: user, message: "Muy bien, gracias" },
  ]);
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
  let aux = body.idFrom
  let result = await collection.updateOne(
    { _id: ObjectId(body._id) },
    {
      $set: {
        idFrom: {
          _id: ObjectId(body.idFrom._id),
          nombre: body.idFrom.nombre,
          ...aux
        },
        message: body.message,
      },
    }
  );
  return body.message;
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return await collection.findOne({ _id: ObjectId(id) });
};

//Buscamos el Id del usuario
const getByIdUser = async (id) => {
  const collection = await Database("user");
  return await collection.findOne({ _id: ObjectId(id) });
};

module.exports.SaleService = {
  getAll,
  create,
  getByIdUser,
  deleteById,
  update,
  getById
};
