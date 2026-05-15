#!/usr/bin/env python3
"""
Web Scraper Service for Information Network
"""

import os
import logging
from dotenv import load_dotenv
from flask import Flask, jsonify
import psycopg2
import redis

load_dotenv()

# Configuration
DATABASE_URL = os.getenv('DATABASE_URL')
SCRAPER_PORT = int(os.getenv('SCRAPER_PORT', 5001))
REDIS_HOST = os.getenv('REDIS_HOST', 'localhost')
REDIS_PORT = int(os.getenv('REDIS_PORT', 6379))

# Logging setup
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Flask app
app = Flask(__name__)

# Database connection
try:
    db_conn = psycopg2.connect(DATABASE_URL)
    logger.info("✅ Database connected")
except Exception as e:
    logger.error(f"❌ Database connection failed: {e}")

# Redis connection
try:
    redis_client = redis.Redis(
        host=REDIS_HOST,
        port=REDIS_PORT,
        decode_responses=True
    )
    redis_client.ping()
    logger.info("✅ Redis connected")
except Exception as e:
    logger.error(f"❌ Redis connection failed: {e}")


@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok',
        'service': 'Web Scraper',
        'timestamp': str(__import__('datetime').datetime.now())
    }), 200


@app.route('/api/v1/scraper/jobs', methods=['GET'])
def get_jobs():
    """Get all scraping jobs"""
    try:
        cursor = db_conn.cursor()
        cursor.execute("""
            SELECT id, name, url, status, last_run, created_at 
            FROM scraper_jobs 
            ORDER BY created_at DESC
        """)
        jobs = cursor.fetchall()
        cursor.close()
        
        return jsonify({
            'success': True,
            'jobs': jobs,
            'total': len(jobs)
        }), 200
    except Exception as e:
        logger.error(f"Error fetching jobs: {e}")
        return jsonify({'error': str(e)}), 500


@app.route('/api/v1/scraper/run', methods=['POST'])
def run_scraper():
    """Trigger a scraping job"""
    try:
        logger.info("🔄 Starting scraper job...")
        # TODO: Implement actual scraping logic
        
        return jsonify({
            'success': True,
            'message': 'Scraper job started'
        }), 200
    except Exception as e:
        logger.error(f"Error running scraper: {e}")
        return jsonify({'error': str(e)}), 500


@app.route('/api/v1/scraper/status', methods=['GET'])
def scraper_status():
    """Get scraper service status"""
    return jsonify({
        'status': 'running',
        'jobs_pending': 0,
        'jobs_completed': 0,
        'last_activity': None
    }), 200


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({'error': 'Not Found'}), 404


@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({'error': 'Internal Server Error'}), 500


if __name__ == '__main__':
    logger.info("🚀 Web Scraper Service starting...")
    app.run(
        host='0.0.0.0',
        port=SCRAPER_PORT,
        debug=os.getenv('PYTHON_ENV') == 'development'
    )
