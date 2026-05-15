# Мэдээлэл Холбоо Сүлжээ (Information Network)

Мэдээлэл ХолБоо сүлжээний сайтуудын цэвэрлэгээ, моторын үйл ажиллагааг хянах, вэб сайтыг үйл ажиллагаанаас хэмнэх систем.

## 📋 Функцүүд

- ✅ **Web Scraping Service** - Сайтуудын мэдээллийг автоматаар цэвэрлэх
- ✅ **Engine Monitoring** - Моторын үйл ажиллагааг хянах
- ✅ **Dashboard** - Администраторын панель
- ✅ **REST API** - Төлөвлөгөө API сервис
- ✅ **Database** - PostgreSQL дата сангийн систем

## 🏗️ Архитектур

```
┌─────────────────────────────────────────────┐
│        Frontend (Admin Dashboard)           │
│        React.js / Vue.js                    │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────┴──────────────────────────┐
│          API Gateway (Node.js)              │
│   Express.js, REST API, WebSocket          │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┴──────────┬──────────┐
        │                     │          │
   ┌────▼────┐         ┌─────▼────┐   ┌─▼────────┐
   │ Scraper │         │Monitoring│   │ Database │
   │(Python) │         │(Python)  │   │PostgreSQL│
   └─────────┘         └──────────┘   └──────────┘
```

## 📁 Төслийн бүтэц

```
network-/
├── backend/
│   ├── api/                    # Node.js API Gateway
│   │   ├── package.json
│   │   ├── server.js
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── utils/
│   ├── scraper/                # Python Web Scraper
│   │   ├── requirements.txt
│   │   ├── main.py
│   │   ├── scrapers/
│   │   ├── config.py
│   │   └── utils/
│   └── monitoring/             # Python Engine Monitor
│       ├── requirements.txt
│       ├── main.py
│       ├── monitors/
│       └── config.py
├── frontend/                   # Admin Dashboard
│   ├── package.json
│   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── public/
├── database/                   # Database migrations
│   ├── migrations/
│   └── seeds/
├── docker-compose.yml
├── .gitignore
├── .env.example
└── README.md
```

## 🚀 Эхлүүлэх

### Шаардлагатай:
- Docker & Docker Compose
- Python 3.9+
- Node.js 16+
- PostgreSQL 13+

### Суулгалт:

```bash
# Төслийг clone хийх
git clone https://github.com/tumurchudur0olvr-oss/network-.git
cd network-

# Environment файл нийтэлэх
cp .env.example .env

# Docker дээр ажиллуулах
docker-compose up -d

# Суулгалт дуусахыг хүлээх
docker-compose logs -f
```

## 📚 Сургалт

- [Backend Setup Guide](./docs/BACKEND.md)
- [Frontend Setup Guide](./docs/FRONTEND.md)
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)

## 📞 Холбоо

- GitHub Issues: [Report bugs](https://github.com/tumurchudur0olvr-oss/network-/issues)
- Discussions: [Join community](https://github.com/tumurchudur0olvr-oss/network-/discussions)

---
**Үүсгэгч**: tumurchudur0olvr-oss  
**Эхлүүлсэн**: 2026-05-15
