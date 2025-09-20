// Backend/routes/joinRoutes.js
const express = require("express");
const Join = require("../models/joinModel");

const router = express.Router();

// Add a join request
router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, phoneno, reason } = req.body;

    const newJoin = new Join({
      firstname,
      lastname,
      email,
      phoneno,
      reason
    });

    await newJoin.save();
    res.status(201).json({ message: "Join form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting join form", error });
  }
});

// Retrieve all join requests
router.get("/", async (req, res) => {
  try {
    const joins = await Join.find();
    res.json(joins);
  } catch (error) {
    res.status(500).json({ message: "Error fetching join forms", error });
  }
});

module.exports = router;
