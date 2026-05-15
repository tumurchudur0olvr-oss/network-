#!/usr/bin/env python3
import os
from dotenv import load_dotenv
from flask import Flask, jsonify

load_dotenv()

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'ok',
        'service': 'Web Scraper'
    }), 200

@app.route('/api/v1/scraper/jobs', methods=['GET'])
def get_jobs():
    return jsonify({
        'success': True,
        'jobs': []
    }), 200

@app.route('/api/v1/scraper/run', methods=['POST'])
def run_scraper():
    return jsonify({
        'success': True,
        'message': 'Scraper job started'
    }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
