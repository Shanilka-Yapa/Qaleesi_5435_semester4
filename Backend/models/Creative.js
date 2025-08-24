const mongoose = require("mongoose");

const creativeSchema = new mongoose.Schema({
  idea: { type: String },
  image: { type: String }, // store image as base64 string or URL
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Creative", creativeSchema);
