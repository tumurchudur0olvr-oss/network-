const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'API Gateway'
  });
});

// API v1 routes
app.get('/api/v1/status', (req, res) => {
  res.json({
    status: 'running',
    services: {
      api: 'ok',
      database: 'checking...',
      redis: 'checking...',
      scraper: 'checking...',
      monitoring: 'checking...'
    }
  });
});

// Dashboard routes placeholder
app.get('/api/v1/dashboard/stats', (req, res) => {
  res.json({
    sites_monitored: 0,
    last_scrape: null,
    engine_status: 'unknown',
    uptime_percentage: 0
  });
});

// Scraper routes placeholder
app.get('/api/v1/scraper/jobs', (req, res) => {
  res.json({
    jobs: [],
    total: 0
  });
});

// Monitoring routes placeholder
app.get('/api/v1/monitoring/engines', (req, res) => {
  res.json({
    engines: [],
    total: 0
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: {
      message: err.message,
      status: 500
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: {
      message: 'Not Found',
      status: 404
    }
  });
});

const PORT = process.env.API_PORT || 3000;
const HOST = process.env.API_HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`🚀 API Server running on http://${HOST}:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});
