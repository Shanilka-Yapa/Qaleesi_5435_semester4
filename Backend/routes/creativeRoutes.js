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
    const{idea, username} = req.body;

    if(!username){
      return res.status(400).json({ error: "Username is required" });
    }
    const newIdea = new Creative({ idea: req.body.idea, username });
    await newIdea.save();
    res.json(newIdea);
  } catch (err) {
    res.status(500).json({ error: "Failed to save idea" });
  }
});

// Submit image
router.post("/image", upload.single("image"), async (req, res) => {
  try {
    const {username} = req.body;
    if(!username){
      return res.status(400).json({ error: "Username is required" });
    }

    const base64Image = req.file.buffer.toString("base64");
    const newImage = new Creative({ image: base64Image, username });
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
    const { username } = req.body; // who is trying to delete

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const item = await Creative.findById(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Ownership check
    if (item.username !== username) {
      return res.status(403).json({ error: "You can only delete your own items" });
    }

    await item.deleteOne();
    res.json({ message: "Item deleted successfully", deletedItem: item });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete item" });
  }
});

// Update a creative item
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { idea, username } = req.body; // who is trying to update

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    if (!idea || !idea.trim()) {
      return res.status(400).json({ error: "Idea text is required" });
    }

    const item = await Creative.findById(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Ownership check
    if (item.username !== username) {
      return res.status(403).json({ error: "You can only edit your own items" });
    }

    item.idea = idea.trim();
    const updatedItem = await item.save();

    res.json(updatedItem);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update item" });
  }
});


module.exports = router;
