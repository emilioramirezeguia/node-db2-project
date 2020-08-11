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

// Create (POST) new car
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

// GET car by id
router.get("/:id", (req, res) => {
  const carId = req.params.id;

  db("cars")
    .where({ id: carId })
    .then((car) => {
      if (car.length) {
        res.status(200).json({ car: car });
      } else {
        res.status(404).json({
          message: "The car you're looking for doesn't exist anymore.",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update (PUT) car by id
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

// DELETE car
router.delete("/:id", (req, res) => {
  const cardId = req.params.id;

  db("cars")
    .where({ id: cardId })
    .del()
    .then((count) => {
      res.status(200).json({ deletedRecords: count });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// GET sales for a car by id
router.get("/:id/sales", (req, res) => {
  const carId = req.params.id;

  db("sales")
    .where({ car_id: carId })
    .then((sales) => {
      if (sales.length) {
        res.status(200).json({ carSales: sales });
      } else {
          res.status(404).json({message: "This car hasn't been sold yet. :("})
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
