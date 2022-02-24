# Import Flask class
from flask import Flask, json, jsonify, request
from flask_sqlalchemy import SQLAlchemy
# Create Flask object
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///persistence.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# Create db model
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(100), nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }
@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(serializer, Todo.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = Todo(content=request_data['content'])
    db.session.add(todo)
    db.session.commit()
    return {'201': 'Entry created successfully'}

@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(serializer, Todo.query.filter_by(id=id))])

@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Todo.query.filter_by(id=request_data['id']).delete()
    db.session.commit()
    return {'204': 'Entry deleted successfully'}


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
