const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO);
    console.log("Uspeshno se vurzahme za bazata s danni");
  } catch (error) {
    console.log("Greshka pri svurzvane");
  }
};
module.exports = dbConnect;
