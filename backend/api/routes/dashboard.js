const express = require('express');
const router = express.Router();

// GET dashboard data
router.get('/data', (req, res) => {
  res.json({
    success: true,
    summary: {
      total_websites: 12,
      active_tasks: 8,
      recent_alerts: 2
    },
    recent_activity: [
      {
        id: 1,
        type: 'scrape_completed',
        message: 'Scraping completed for news.example.com',
        timestamp: new Date()
      }
    ]
  });
});

// GET dashboard statistics
router.get('/stats', (req, res) => {
  res.json({
    success: true,
    stats: {
      total_records_scraped: 15234,
      success_rate: 98.5,
      avg_response_time: 234,
      uptime: 99.9
    }
  });
});

module.exports = router;
