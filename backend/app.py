from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS

from database import db
from models import Event, create_event, get_event, update_event, delete_event, get_all_events
from process import pars_data, encdode

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
CORS(app)  # Add this line to enable CORS for your Flask app

@app.route('/create', methods=['POST'])
def create_event_route():
    data = request.json
    data = pars_data(data)
    
    event = create_event(**data)
    return jsonify(event), 201

@app.route('/get/<int:event_id>', methods=['GET'])
def get_event_route(event_id):
    event = get_event(event_id)
    if event:
        event_dict = encdode(event)
        return jsonify(event_dict)
    else:
        return jsonify({'message': 'Event not found'}), 404

@app.route('/update/<int:event_id>', methods=['PUT'])
def update_event_route(event_id):
    data = request.json
    data = pars_data(data)
    update_event(event_id, **data)
    return '', 204

@app.route('/delete/<int:event_id>', methods=['DELETE'])  # Fixed the route path here
def delete_event_route(event_id):
    delete_event(event_id)
    return '', 204

@app.route('/get', methods=['GET'])
def get_all_events_route():
    events = get_all_events()
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)
