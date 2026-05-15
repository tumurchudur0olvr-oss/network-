const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res) => {
  res.json({
    success: true,
    tasks: []
  });
});

router.post('/start', (req, res) => {
  const { url } = req.body;
  res.json({
    success: true,
    job_id: Math.random(),
    url,
    status: 'pending'
  });
});

router.get('/status/:taskId', (req, res) => {
  res.json({
    success: true,
    task_id: req.params.taskId,
    status: 'running',
    progress: 75
  });
});

module.exports = router;
