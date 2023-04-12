import api.repository as Repository
import api.handle_response as Response

def get_users():
#se pasa la funcion por aqui por si se quieren meter validaciones
    resultado = Repository.get_users()
    return Response.response_ok(resultado) #se utiliza la variable resultado para pasarla a response y que devuelva un msg 

def get_single_user(id):
    #se pasa la funcion por aqui por si se quieren meter validaciones
    resultado = Repository.get_users()
    return Response.response_ok(resultado) #se utiliza la variable resultado para pasarla a response y que devuelva un msg 
        # para llamar al id se llama a la clase user, metodo query.get pasandole el id como param
    if not isinstance(id, int):
        return Response.response_error("Id is not a number", 404) #no va a pasar por esta validación porque le estamos diciendo que traiga un id de tipo int en route
    resultado = Repository.get_single_user(id) #usando como param el id 
    if resultado is not None:
        return Response.response_ok(resultado.serialize()) #se utiliza la variable resultado para pasarla a response y que devuelva un msg 
    else:
        return Response.response_error("Id not found", 404)

def register_user(data):
    if data['email'] is None or data['email'] == '':
        return Response.response_error('Email not valid', 400)

    if data['user_name'] is None or data['user_name'] == '':
        return Response.response_error('user not valid', 400)

    resultado = Repository.register_user(data) # se llama a la funcion de creacion de usuarios de repository

    return Response.response_ok(resultado) #se utiliza la variable resultado para pasarla a response


def login():

    pass


def private():
    pass