#!/usr/bin/env python3
from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'ok',
        'service': 'Engine Monitoring'
    }), 200

@app.route('/metrics', methods=['GET'])
def metrics():
    return jsonify({
        'cpu_percent': 45.2,
        'memory_percent': 58.9,
        'uptime': 72.5
    }), 200

@app.route('/alerts', methods=['GET'])
def get_alerts():
    return jsonify({
        'success': True,
        'alerts': []
    }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
