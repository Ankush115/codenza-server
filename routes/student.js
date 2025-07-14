var express = require("express");
const mongo = require("mongodb");
var router = express.Router();

router.get("/test", (request, response) => {
  response.send("This is a test file");
});

router.get("/testq", function (request, response) {
  const name = request.query.name;
  const loc = request.query.loc;

  response.send(`I am ${name},I am from ${loc}`);
});

router.post("/reg", (request, response) => {
  const document = request.body.data;
  const url =
    "mongodb+srv://alwagh45:stepup@codenzaproject.6exl2o1.mongodb.net/";
  const mongoClient = mongo.MongoClient;
  mongoClient
    .connect(url)
    .then((server) => {
      const db = server.db("stepup");
      const collection = db.collection("users");

      collection
        .insertOne(document)
        .then((res) => {
          response.send(res);
        })
        .catch((res) => {
          response.send(res);
        });
    })
    .catch(() => {
      response.send("DB connection error");
    });
});

module.exports = router;
