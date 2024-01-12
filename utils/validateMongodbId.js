const mongoose = require("mongoose");
const validateMongodbId = (id) => {
  console.log("Validating ID:", id); // Add this line
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("Invalid ID");
};

module.exports = validateMongodbId;
