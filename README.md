# Information Network System

完全な Мэдээлэл Холбоо Сүлжээ системийн микросервис архитектур

## Features

✅ Web Scraping Service
✅ Engine Monitoring
✅ Admin Dashboard
✅ REST API Gateway
✅ User Authentication
✅ Audit Logging
✅ PostgreSQL Database
✅ Redis Cache
✅ Docker Containerization

## Quick Start

```bash
git clone https://github.com/tumurchudur0olvr-oss/network-.git
cd network-
cp .env.example .env
docker-compose up -d
```

## Services

- 🎨 Dashboard: http://localhost:3001
- 🔌 API: http://localhost:3000
- 🕷️ Scraper: http://localhost:5001
- 📊 Monitoring: http://localhost:5002
- 🗄️ Database: localhost:5432
- 💾 Redis: localhost:6379

## API Endpoints

### Dashboard
- GET /api/dashboard/data
- GET /api/dashboard/stats

### Scraper
- GET /api/scraper/tasks
- POST /api/scraper/start
- GET /api/scraper/status/:id

### Monitoring
- GET /api/monitoring/status
- GET /api/monitoring/websites
- GET /api/monitoring/alerts

### Users
- POST /api/users/login
- POST /api/users/register
- GET /api/users/profile

### Audit
- GET /api/audit/logs
- GET /api/audit/logs/:start/:end

## Technologies

- Node.js/Express
- Python/Flask
- React
- PostgreSQL
- Redis
- Docker

## Author

tumurchudur0olvr-oss

## License

MIT
