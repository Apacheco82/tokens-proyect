from api.models import db, User
from flask import request
from flask import Flask, request
#import bcrypt
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

    #hashed = bcrypt.hashpw(data['password'].encode(), bcrypt.gensalt(14)) #preguntar a cristian
    user = User(user_name = data['user_name'],  # Agrega el nombre del user
                password=data['password'],#.hashed.decode(),
                email=data['email']
                )

    db.session.add(user) #se crea en bd
    db.session.commit()

    return user.serialize() 


def login():
    pass


def private():
    pass