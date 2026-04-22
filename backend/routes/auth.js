const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you created this from Phase 2

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1. Check if user exists
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });

    // 2. Compare password (in production, use bcrypt.compare)
    // For testing, assuming plain text if bcrypt fails, but ALWAYS hash in prod!
    const isMatch = password === user.password; // Replace with: await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    // 3. Generate JWT
    const payload = { user: { id: user.id, role: user.role } };
    jwt.sign(
      payload, 
      process.env.JWT_SECRET || 'fallback_secret_key', 
      { expiresIn: '5h' }, 
      (err, token) => {
        if (err) throw err;
        res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
      }
    );
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;