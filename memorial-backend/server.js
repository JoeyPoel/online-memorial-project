require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const memorialRoutes = require('./routes/memorials'); // Define routes separately

const app = express();
console.log('MongoDB URI:', process.env.MONGO_URI);

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Use routes for memorial data
app.use('/api', memorialRoutes);

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});