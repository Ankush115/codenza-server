var express = require("express");
var router = express.Router();
const mongodb = require("mongodb");

/* GET users listing. */

router.post("/reg", async function (req, res, next) {
  try {
    const name = req.body.name;
    const location = req.body.location;
    const phone = req.body.phone;
    const email = req.body.email;

    const url =
      "mongodb+srv://alwagh45:stepup@codenzaproject.6exl2o1.mongodb.net/";
    const mongoClient = mongodb.MongoClient;

    const server = await mongoClient.connect(url);

    const db = server.db("stepup");

    const collection = db.collection("users");

    const result = await collection.insertOne({ name, location, phone, email });

    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error.message);
  }
});
router.get("/get-users",async function (req, res, next) {
  const url =
    "mongodb+srv://alwagh45:stepup@codenzaproject.6exl2o1.mongodb.net/";

  const mongoclient = mongodb.MongoClient;

  const server =await mongoclient.connect(url);

  const db = server.db("stepup");

  const collection = db.collection("users");

  const result = await collection.find({}).toArray();
  res.send(result);
});
module.exports = router;
