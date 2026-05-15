const express = require('express');
const router = express.Router();

// GET monitoring status
router.get('/status', (req, res) => {
  res.json({
    success: true,
    data: {
      overall_status: 'healthy',
      engines_running: 4,
      engines_idle: 0,
      total_uptime: 72.5,
      cpu_avg: 34.2,
      memory_avg: 58.9
    }
  });
});

// GET all monitored websites
router.get('/websites', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: 'news.example.com',
        status: 'online',
        response_time: 245,
        last_check: new Date()
      },
      {
        id: 2,
        name: 'data.example.com',
        status: 'online',
        response_time: 189,
        last_check: new Date()
      }
    ]
  });
});

// GET active alerts
router.get('/alerts', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        engine_id: 2,
        severity: 'warning',
        message: 'CPU usage above 80%',
        created_at: new Date()
      }
    ]
  });
});

module.exports = router;
