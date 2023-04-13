from api.models import db, User
from flask import request, jsonify
from flask import Flask, request
from sqlalchemy.orm.exc import NoResultFound
import bcrypt
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

def get_users():
    all_users = User.query.all()  # la query va en repositorio
    user_serialized = list(
        map(lambda user: user.serialize(), all_users))  # se llama a la funcion que serializa todo excepto el otro mapeo
    return user_serialized


def get_single_user(id):  
    user = User.query.get(id)  # la query va en repositorio
    #print (user)
    #para llamar al id se llama a la clase user, metodo query.get pasandole el id como param
    return user 


def register_user(data):
    hashed = bcrypt.hashpw(data['password'].encode(), bcrypt.gensalt()) #utiliza la función `bcrypt.hashpw` para generar una contraseña en bits
    #La función `encode()` se utiliza para convertir la contraseña en un formato que puede ser procesado por la función `bcrypt.hashpw()
    user = User(user_name=data['user_name'],
                password=hashed.decode(), #se usa decode() para convertir de bits a bcrypt y almacenarla 
                email=data['email']
                )

    db.session.add(user)
    db.session.commit()
    return user.serialize()


def login(data):
    try:
        user = User.query.filter_by(email=data['email'], user_name= data['user_name']).one() #se hace la busqueda con los dos campos, username y email
        return user
    except NoResultFound: #para controlar el error si no encuentra uno de los dos datos
        return None #para hacer las validaciones en controller
