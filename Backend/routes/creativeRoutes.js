const express = require("express");
const multer = require("multer");
const Creative = require("../models/Creative");
const mongoose = require("mongoose");
const router = express.Router();

// Multer setup for image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get all creatives
router.get("/", async (req, res) => {
  try {
    const items = await Creative.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch creatives" });
  }
});

// Submit text idea
router.post("/idea", async (req, res) => {
  try {
    const newIdea = new Creative({ idea: req.body.idea });
    await newIdea.save();
    res.json(newIdea);
  } catch (err) {
    res.status(500).json({ error: "Failed to save idea" });
  }
});

// Submit image
router.post("/image", upload.single("image"), async (req, res) => {
  try {
    const base64Image = req.file.buffer.toString("base64");
    const newImage = new Creative({ image: base64Image });
    await newImage.save();
    res.json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Failed to save image" });
  }
});

// Delete a creative item
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const deletedItem = await Creative.findByIdAndDelete(id);
    
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete item" });
  }
});

// Update a creative item
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { idea } = req.body;
    
    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Check if idea text is provided
    if (!idea || !idea.trim()) {
      return res.status(400).json({ error: "Idea text is required" });
    }

    const updatedItem = await Creative.findByIdAndUpdate(
      id,
      { idea: idea.trim() },
      { new: true } // Returns the updated document
    );
    
    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update item" });
  }
});


module.exports = router;
