const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
const dashboardRoutes = require('./routes/dashboard');
const scraperRoutes = require('./routes/scraper');
const monitoringRoutes = require('./routes/monitoring');
const userRoutes = require('./routes/users');
const auditRoutes = require('./routes/audit');

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/scraper', scraperRoutes);
app.use('/api/monitoring', monitoringRoutes);
app.use('/api/users', userRoutes);
app.use('/api/audit', auditRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'API Gateway' });
});

const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API Server running on port ${PORT}`);
});
