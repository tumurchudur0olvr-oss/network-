CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scraper_jobs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  status VARCHAR(50),
  last_run TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE monitoring_alerts (
  id SERIAL PRIMARY KEY,
  engine_id INTEGER,
  severity VARCHAR(50),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE audit_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  action VARCHAR(255),
  target_type VARCHAR(100),
  target_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scraper_results (
  id SERIAL PRIMARY KEY,
  job_id INTEGER,
  data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE engine_status (
  id SERIAL PRIMARY KEY,
  engine_id INTEGER,
  status VARCHAR(50),
  cpu_usage FLOAT,
  memory_usage FLOAT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE websites (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  url TEXT,
  status VARCHAR(50),
  last_check TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
