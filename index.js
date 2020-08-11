const express = require("express");
const carsRouter = require("./cars/carsRouter");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working... it's working!" });
});

server.use("/cars", carsRouter);

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
