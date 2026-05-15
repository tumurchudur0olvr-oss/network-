const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({
    success: true,
    overall_status: 'healthy'
  });
});

router.get('/websites', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

router.get('/alerts', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

module.exports = router;
