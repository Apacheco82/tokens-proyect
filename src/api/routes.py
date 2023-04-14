"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import api.controller as Controller
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


"""app = Flask(__name__)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.environ["JWT_SECRET_KEY"] todo esto va en app.py
jwt = JWTManager(app)"""

api = Blueprint('api', __name__)


@api.route('/', methods=['GET'])
def get_users():
    #aqui se retorna el resultado de controller por si quieres hacer validaciones
    return Controller.get_users()

@api.route('/private/<int:id>', methods=['GET'])
@jwt_required()
def get_single_user(id):  # el id se pasa como param de la funcion
    return Controller.get_single_user(id) 

@api.route('/signup', methods = ['POST'])
def register_user():
    body = request.get_json()
    return Controller.register_user(body), 201

@api.route('/login', methods = ['POST'])
def login():
    body = request.get_json()
    return Controller.login(body)

    