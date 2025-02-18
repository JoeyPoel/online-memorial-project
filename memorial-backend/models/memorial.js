const mongoose = require('mongoose');

const memorialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  biography: String,
  photos: [String],  // Array of photo URLs
  messages: [
    {
      user: String,
      message: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

const Memorial = mongoose.model('Memorial', memorialSchema);

module.exports = Memorial;
