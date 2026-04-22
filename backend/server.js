const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your MongoDB URI in .env file
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/afsar_lms')
  .then(() => console.log('MongoDB Connected for AfsarAcademy LMS'))
  .catch(err => console.log(err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`LMS Server running on port ${PORT}`));