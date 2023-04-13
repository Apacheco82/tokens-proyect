"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import api.controller as Controller
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


app = Flask(__name__)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_users():
    #aqui se retorna el resultado de controller por si quieres hacer validaciones
    return Controller.get_users()

@api.route('/user/<int:id>', methods=['GET'])
def get_single_user(id):  # el id se pasa como param de la funcion
    return Controller.get_single_user(id) 

@api.route('user/register', methods = ['POST'])
def register_user():
    body = request.get_json()
    return Controller.register_user(body), 201

@api.route('user/login', methods = ['POST'])
def login():
    body = request.get_json()
    return Controller.login(body)

@api.route('user/private', methods= ['POST'])
def private():
    pass   