const express = require('express');
const Memorial = require('../models/memorial');
const router = express.Router();

// Route to create a memorial
router.post('/memorial', async (req, res) => {
  try {
    const memorial = new Memorial(req.body);
    await memorial.save();
    res.status(201).json(memorial);
  } catch (err) {
    res.status(400).json({ error: 'Error creating memorial' });
  }
});

// Route to get all memorials
router.get('/memorials', async (req, res) => {
  try {
    const memorials = await Memorial.find();
    res.status(200).json(memorials);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching memorials' });
  }
});

module.exports = router;
