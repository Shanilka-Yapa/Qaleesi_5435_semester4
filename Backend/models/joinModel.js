const mongoose = require('mongoose');

const joinSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phoneno: { type: String, required: true },
    reason: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Join', joinSchema);
