const express = require('express');
const router = express.Router();

// GET all scraping tasks
router.get('/tasks', (req, res) => {
  res.json({
    success: true,
    tasks: [
      {
        id: 1,
        url: 'https://news.example.com',
        frequency: 'daily',
        status: 'running',
        last_run: new Date(Date.now() - 3600000),
        next_run: new Date(Date.now() + 86400000),
        records_scraped: 245
      }
    ]
  });
});

// POST start new scraping job
router.post('/start', (req, res) => {
  const { url, frequency } = req.body;
  res.json({
    success: true,
    job_id: Math.floor(Math.random() * 10000),
    url,
    frequency,
    status: 'pending',
    message: 'Scraping job started'
  });
});

// GET scraping job status
router.get('/status/:taskId', (req, res) => {
  res.json({
    success: true,
    task_id: req.params.taskId,
    status: 'running',
    progress: 75,
    records_found: 189,
    started_at: new Date(Date.now() - 1800000)
  });
});

module.exports = router;
