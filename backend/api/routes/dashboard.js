const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({
    success: true,
    summary: {
      total_websites: 12,
      active_tasks: 8,
      recent_alerts: 2
    }
  });
});

router.get('/stats', (req, res) => {
  res.json({
    success: true,
    stats: {
      total_records_scraped: 15234,
      success_rate: 98.5,
      uptime: 99.9
    }
  });
});

module.exports = router;
