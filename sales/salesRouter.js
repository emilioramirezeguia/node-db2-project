const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

// Get all sales
router.get("/", (req, res) => {
  db.select("*")
    .from("sales")
    .then((sales) => {
      res.status(200).json({ sales: sales });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Create (POST) sale
router.post("/:id", (req, res) => {
  const carId = req.params.id;
  const sale = {
    ...req.body,
    car_id: carId,
  };

  db("sales")
    .insert(sale)
    .then((ids) => {
      res.status(201).json({ inserted: ids });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
