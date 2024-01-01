const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Uspeshno se vurzahme za bazata");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", (req, res) => {
  res.send("Hello bro");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
