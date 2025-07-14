const mongoose = require("mongoose");

const businessSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true }
});

const Business = mongoose.model("business", businessSchema);

module.exports = { Business };
