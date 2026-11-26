
from rest_framework.permissions import BasePermission


class EsCoordinacionAcademica(BasePermission):
    """
    Permite el acceso únicamente a usuarios
    con el rol de Coordinación Académica.
    """

    message = "No tienes permisos para realizar esta acción."

    def has_permission(self, request, view):
        user = request.user

        return (
            user.is_authenticated
            and user.is_active
            and user.rol is not None
            and user.rol.estado
            and user.rol.nombre == "Coordinación Académica"
        )


class PuedeConsultarUsuarios(EsCoordinacionAcademica):
    """
    Permite a Coordinación Académica consultar
    la información administrativa de los usuarios.
    """

    message = "No tienes autorización para consultar los usuarios."


class PuedeConsultarSuPerfil(BasePermission):
    """
    Permite que un usuario consulte únicamente su propio perfil.
    """

    message = "No puedes consultar el perfil de otro usuario."

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.is_active
        )

    def has_object_permission(self, request, view, obj):
        return request.user.pk == obj.pk
