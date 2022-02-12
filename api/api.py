# Import Flask class
from flask import Flask
 
# Create Flask object
app = Flask(__name__)

app.config['SECRET_KEY']

@app.route('/', methods=['GET', 'POST'])
def index():
    return 'test'


if __name__ == '__main__':
    app.run(debug=True)