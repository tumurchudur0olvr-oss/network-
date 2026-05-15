const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.json({
    success: true,
    token: 'jwt_token',
    user: { id: 1, email }
  });
});

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  res.json({
    success: true,
    user: { id: 1, email }
  });
});

router.get('/profile', (req, res) => {
  res.json({
    success: true,
    user: { id: 1, email: 'user@example.com' }
  });
});

module.exports = router;
