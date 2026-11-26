from datetime import timedelta

from django.utils import timezone
from django.shortcuts import get_object_or_404

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from rest_framework_simplejwt.tokens import RefreshToken

from .models import Usuario, Rol
from .serializers import UsuarioSerializer, RolSerializer
from .permissions import (
    PuedeConsultarUsuarios,
    PuedeConsultarSuPerfil,
    EsCoordinacionAcademica
)

class UsuarioListView(generics.ListAPIView):
    """
    Permite consultar el listado de usuarios registrados en SICA.
    Acceso exclusivo para Coordinación Académica.
    """

    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [PuedeConsultarUsuarios]



class UsuarioDetailView(generics.RetrieveAPIView):
    """
    Permite consultar la información de un usuario específico.
    Acceso exclusivo para Coordinación Académica.
    """

    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [PuedeConsultarUsuarios]
    lookup_field = "pk"



class MiPerfilView(generics.RetrieveAPIView):
    serializer_class = UsuarioSerializer
    permission_classes = [PuedeConsultarSuPerfil]

    def get_object(self):
        usuario = self.request.user
        self.check_object_permissions(self.request, usuario)
        return usuario


class RolListView(generics.ListAPIView):
    """
    Permite consultar los roles registrados en SICA.
    Acceso exclusivo para Coordinación Académica.
    """

    queryset = Rol.objects.filter(estado=True)
    serializer_class = RolSerializer
    permission_classes = [EsCoordinacionAcademica]




class AsignarRolView(APIView):
    """
    Permite asignar o cambiar el rol de un usuario.
    Acceso exclusivo para Coordinación Académica.
    """

    permission_classes = [EsCoordinacionAcademica]

    def post(self, request, usuario_id):

        # Obtener el nuevo rol enviado por el frontend
        rol_id = request.data.get("rol_id")

        if not rol_id:
            return Response(
                {"error": "Debes especificar el rol."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Buscar el usuario que recibirá el nuevo rol
        usuario = get_object_or_404( Usuario, pk=usuario_id)

        # Buscar el rol y comprobar que esté activo
        rol = get_object_or_404( Rol, pk=rol_id, estado=True)

        # Asignar el nuevo rol
        usuario.rol = rol
        usuario.save(update_fields=["rol"])

        return Response(
            {
                "mensaje": "Rol asignado correctamente.",
                "usuario": UsuarioSerializer(usuario).data
            },
            status=status.HTTP_200_OK
        )


class LoginView(APIView):
    """
    Permite autenticar usuarios mediante número de documento
    y contraseña. Gestiona los intentos fallidos y bloqueos.
    """

    permission_classes = [AllowAny]

    def post(self, request):

        numero_documento = request.data.get("numero_documento")
        password = request.data.get("password")

        if not numero_documento or not password:
            return Response(
                {"error": "Debes ingresar el documento y la contraseña."},
                status=status.HTTP_400_BAD_REQUEST
            )

        usuario = Usuario.objects.filter(
            numero_documento=numero_documento
        ).first()

        if not usuario:
            return Response(
                {"error": "Credenciales incorrectas."},
                status=status.HTTP_401_UNAUTHORIZED
            )

        # Verificar si la cuenta tiene bloqueo permanente.
        if usuario.bloqueado_permanente:
            return Response(
                {"error": "Tu cuenta está bloqueada. Contacta a Coordinación Académica."},
                status=status.HTTP_423_LOCKED
            )

        # Verificar si existe un bloqueo temporal.
        if usuario.fecha_desbloqueo:

            if timezone.now() < usuario.fecha_desbloqueo:
                minutos = (
                    usuario.fecha_desbloqueo - timezone.now()
                ).total_seconds() / 60

                return Response(
                    {
                        "error": "Tu cuenta está temporalmente bloqueada.",
                        "minutos_restantes": round(minutos, 1)
                    },
                    status=status.HTTP_423_LOCKED
                )

            # El bloqueo temporal ya terminó.
            usuario.fecha_bloqueo = None
            usuario.fecha_desbloqueo = None
            usuario.intentos_fallidos = 0
            usuario.save()

        # Verificar si la cuenta está activa.
        if not usuario.is_active or not usuario.rol.estado:
            return Response(
                {"error": "Tu cuenta no está habilitada para ingresar."},
                status=status.HTTP_403_FORBIDDEN
            )

        # Validar contraseña.
        if not usuario.check_password(password):

            usuario.intentos_fallidos += 1

            # Al completar tres intentos, aplicar bloqueo.
            if usuario.intentos_fallidos >= 3:

                usuario.intentos_fallidos = 0
                usuario.bloqueos_temporales += 1
                usuario.fecha_bloqueo = timezone.now()

                # Tercer bloqueo: bloqueo permanente.
                if usuario.bloqueos_temporales >= 3:
                    usuario.bloqueado_permanente = True
                    usuario.fecha_desbloqueo = None

                else:
                    usuario.fecha_desbloqueo = (
                        timezone.now() + timedelta(minutes=5)
                    )

            usuario.save()

            if usuario.bloqueado_permanente:
                return Response(
                    {"error": "Tu cuenta ha sido bloqueada permanentemente. Contacta a Coordinación Académica."},
                    status=status.HTTP_423_LOCKED
                )

            if usuario.fecha_desbloqueo:
                return Response(
                    {
                        "error": "Has alcanzado tres intentos fallidos. Tu cuenta estará bloqueada durante cinco minutos.",
                        "minutos_bloqueo": 5
                    },
                    status=status.HTTP_423_LOCKED
                )

            return Response(
                {
                    "error": "Credenciales incorrectas.",
                    "intentos_restantes": 3 - usuario.intentos_fallidos
                },
                status=status.HTTP_401_UNAUTHORIZED
            )

        # Inicio de sesión correcto.
        usuario.intentos_fallidos = 0
        usuario.save(update_fields=["intentos_fallidos"])

        # Generar tokens JWT.
        refresh = RefreshToken.for_user(usuario)

        return Response(
            {
                "mensaje": "Inicio de sesión exitoso.",
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "usuario": {
                    "id": usuario.id,
                    "numero_documento": usuario.numero_documento,
                    "nombre": usuario.nombre_completo,
                    "email": usuario.email,
                    "rol": usuario.rol.nombre
                }
            },
            status=status.HTTP_200_OK
        )
