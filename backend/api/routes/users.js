const express = require('express');
const router = express.Router();

// User login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  res.json({
    success: true,
    token: 'jwt_token_here',
    user: {
      id: 1,
      email,
      name: 'User Name',
      role: 'admin'
    }
  });
});

// User registration
router.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  
  res.json({
    success: true,
    data: {
      id: 1,
      email,
      name,
      role: 'user'
    }
  });
});

// Get user profile
router.get('/profile', (req, res) => {
  res.json({
    success: true,
    data: {
      id: 1,
      email: 'user@example.com',
      name: 'User Name',
      role: 'admin',
      created_at: new Date()
    }
  });
});

module.exports = router;
