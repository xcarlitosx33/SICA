
from django.urls import path

from .views import (
    UsuarioListView,
    UsuarioDetailView,
    MiPerfilView,
    RolListView,
    AsignarRolView,
    LoginView
)


urlpatterns = [
    # Autenticación
    path("login/", LoginView.as_view(), name="login"),

    # Usuarios
    path("usuarios/", UsuarioListView.as_view(), name="usuarios-lista"),
    path(
        "usuarios/<int:pk>/",
        UsuarioDetailView.as_view(),
        name="usuario-detalle"
    ),

    # Perfil personal
    path("perfil/", MiPerfilView.as_view(), name="mi-perfil"),

    # Roles
    path("roles/", RolListView.as_view(), name="roles-lista"),
    path(
        "usuarios/<int:usuario_id>/rol/",
        AsignarRolView.as_view(),
        name="asignar-rol"
    ),
]
