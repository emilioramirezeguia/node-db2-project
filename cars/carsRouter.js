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

// GET a car by id
router.get("/:id", (req, res) => {
  const carId = req.params.id;

  db("cars")
    .where({ id: carId })
    .then((car) => {
      res.status(200).json({ car: car });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update (PUT) a car by id
router.put("/:id", (req, res) => {
  const carChanges = req.body;
  const carId = req.params.id;

  db("cars")
    .where({ id: carId })
    .update(carChanges, ["id", "vin", "make", "model"])
    .then((count) => {
      res.status(200).json({ updatedRecords: count });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
