const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoints for dashboard data
app.get('/api/dashboard/stats', (req, res) => {
    res.json({
        systemHealth: 99.8,
        cpuUsage: 34.2,
        memoryUsage: 58.9,
        activeTasks: 8,
        queuedTasks: 3,
        dataProcessed: 15234,
        errors: 0,
        responseTime: 245,
        p95: 512
    });
});

app.get('/api/services/status', (req, res) => {
    res.json({
        services: [
            {
                name: 'API Gateway',
                url: 'http://localhost:3000',
                status: 'running',
                uptime: '72h 45m',
                requestsPerMin: 245
            },
            {
                name: 'Web Scraper',
                url: 'http://localhost:5001',
                status: 'running',
                jobsCompleted: 342,
                successRate: 98.5
            },
            {
                name: 'Monitoring Service',
                url: 'http://localhost:5002',
                status: 'running',
                websitesMonitored: 12,
                avgResponse: 189
            },
            {
                name: 'PostgreSQL',
                url: 'localhost:5432',
                status: 'running',
                connections: '8/100',
                queryTime: 12
            },
            {
                name: 'Redis Cache',
                url: 'localhost:6379',
                status: 'running',
                memoryUsed: '124MB',
                hitRate: 94.3
            },
            {
                name: 'React Dashboard',
                url: 'http://localhost:3001',
                status: 'running',
                loadTime: 1.2,
                activeUsers: 3
            }
        ]
    });
});

app.get('/api/alerts', (req, res) => {
    res.json({
        alerts: [
            {
                type: 'info',
                title: 'Scraper Job Completed',
                message: 'Job #342 finished successfully with 234 records scraped',
                time: '3 minutes ago'
            },
            {
                type: 'warning',
                title: 'High Memory Usage Warning',
                message: 'Engine #2 memory usage above 80%',
                time: '3 minutes ago'
            },
            {
                type: 'info',
                title: 'System Backup Completed',
                message: 'Database backup finished successfully',
                time: '5 minutes ago'
            },
            {
                type: 'success',
                title: 'All Services Healthy',
                message: 'System health check passed',
                time: '10 minutes ago'
            }
        ]
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'Dashboard',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Dashboard Server running on http://localhost:${PORT}`);
    console.log(`📊 Monitoring Interface: http://localhost:${PORT}/`);
    console.log(`🔌 API Health: http://localhost:${PORT}/health`);
});
