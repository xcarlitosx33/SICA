from rest_framework.decorators import api_view
from rest_framework.response import Response

from BaseDatosSica.models import Usuario
from django.contrib.auth.hashers import check_password
from django.utils import timezone


@api_view(['GET'])
def prueba_api(request):
    return Response({
        'mensaje': 'Backend conectado correctamente'
    })


@api_view(['POST'])
def login(request):
    num_doc = request.data.get('num_doc')
    password = request.data.get('password')

    usuario = Usuario.objects.filter(num_doc=num_doc).first()

    if not usuario:
        return Response({
            'mensaje': 'Usuario no encontrado'
        }, status=404)

    # Verificar si el usuario está bloqueado
    if usuario.bloqueado:
        tiempo_bloqueo = timezone.now() - usuario.fecha_bloqueo

        if tiempo_bloqueo.total_seconds() < 300:
            return Response({
                'mensaje': 'Usuario bloqueado temporalmente'
            }, status=403)

        # Ya pasaron los 5 minutos
        usuario.bloqueado = False
        usuario.intentos_fallidos = 0
        usuario.fecha_bloqueo = None
        usuario.save()

    # Verificar contraseña
    if not check_password(password, usuario.password):
        usuario.intentos_fallidos += 1

        if usuario.intentos_fallidos >= 3:
            usuario.bloqueado = True
            usuario.fecha_bloqueo = timezone.now()

        usuario.save()

        return Response({
            'mensaje': 'Contraseña incorrecta',
            'intentos_fallidos': usuario.intentos_fallidos
        }, status=401)

    # Login correcto
    usuario.intentos_fallidos = 0
    usuario.bloqueado = False
    usuario.fecha_bloqueo = None
    usuario.save()

    return Response({
        'mensaje': 'Usuario encontrado',
        'nombre': usuario.nombre_p,
        'num_doc': usuario.num_doc,
        'rol': usuario.rol.nombre
    })