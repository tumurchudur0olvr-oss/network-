from flask import Flask, jsonify, request
from datetime import datetime
import psutil
import socket

app = Flask(__name__)

# Engine Monitoring Service
@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'ok',
        'service': 'engine-monitoring',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/metrics', methods=['GET'])
def metrics():
    return jsonify({
        'cpu_percent': psutil.cpu_percent(interval=1),
        'memory_percent': psutil.virtual_memory().percent,
        'disk_percent': psutil.disk_usage('/').percent,
        'hostname': socket.gethostname(),
        'timestamp': datetime.now().isoformat()
    })

@app.route('/engine/<engine_id>', methods=['GET'])
def engine_status(engine_id):
    return jsonify({
        'engine_id': engine_id,
        'status': 'running',
        'uptime': 432000,
        'cpu_load': 45.2,
        'memory_usage': 2048,
        'last_heartbeat': datetime.now().isoformat()
    })

@app.route('/alerts', methods=['GET'])
def get_alerts():
    return jsonify({
        'success': True,
        'alerts': [
            {
                'id': 1,
                'engine_id': 1,
                'severity': 'warning',
                'message': 'High CPU usage',
                'created_at': datetime.now().isoformat()
            }
        ]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
