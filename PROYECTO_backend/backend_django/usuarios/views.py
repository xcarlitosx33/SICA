from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate
import json

import json
from django.views.decorators.csrf import csrf_exempt

def home(request):
    return render(request, 'usuarios/home.html')

def login_view(request):
    return render(request, 'usuarios/login.html')

def registro(request):
    return render(request, 'usuarios/registro.html')

def recuperar(request):
    return render(request, 'usuarios/recuperar.html')

@csrf_exempt
def api_login(request):
    datos = json.loads(request.body)

    usuario = authenticate(
        username=datos["correo"],
        password=datos["password"]
    )

    if usuario is not None:
        return JsonResponse({"mensaje": "Bienvenido, al sistema SICA" })
    else:
        return JsonResponse({"mensaje": "Usuario o contraseña incorrectos"})
    
