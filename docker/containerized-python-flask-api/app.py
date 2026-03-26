from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from the Docker containerized Flask API!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) # used 0.0.0.0 so it's accessible outside the container