const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogsRoute = require('./routes/blogs');
const contactRoute = require('./routes/contact');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/blogs', blogsRoute);
app.use('/api/contact', contactRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
