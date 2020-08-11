const express = require("express");
const carsRouter = require("./cars/carsRouter");
const salesRouter = require("./sales/salesRouter");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working... it's working!" });
});

// Send every request starting with "/cars" to carsRouter
server.use("/cars", carsRouter);

// Send every request starting with "/sales" to salesRouter
server.use("/sales", salesRouter);

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
