const mongoose = require('mongoose'); //importing the mongoose library

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true,match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address']}, // required true is a validation rule--> both info must be provided
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
