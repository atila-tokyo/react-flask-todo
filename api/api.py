# Import Flask class
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
# Create Flask object
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///persistence.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
# app.config['SECRET_KEY']

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

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


if __name__ == '__main__':
    app.run(debug=True)
