const express = require('express');
const router = express.Router();

router.get('/logs', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

router.get('/logs/:startDate/:endDate', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

module.exports = router;
