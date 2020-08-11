const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

// GET all cars
router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then((cars) => {
      res.status(200).json({ cars: cars });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// POST a new car
router.post("/", (req, res) => {
  const car = req.body;

  db("cars")
    .insert(car)
    .returning("id")
    .then((ids) => {
      res.status(201).json({ inserted: ids });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
