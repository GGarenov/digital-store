const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const authRoute = require("./routes/authRoute");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Uspeshno se vurzahme za bazata");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
