const express = require('express');
const Contact = require('../models/contactModel'); // without .js if using CommonJS
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required" });
  }

  try {
    const newContact = new Contact({ email, message }); // Create a new contact instance
    await newContact.save();
    res.status(201).json({ message: "Message saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
