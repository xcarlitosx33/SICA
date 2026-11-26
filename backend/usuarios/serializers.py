
from rest_framework import serializers

from .models import Rol, Usuario, RecuperacionClave


class RolSerializer(serializers.ModelSerializer):
    """
    Serializa la información de los roles de SICA.
    """

    class Meta:
        model = Rol
        fields = [
            "id",
            "nombre",
            "descripcion",
            "estado",
            "fecha_creacion",
            "fecha_actualizacion"
        ]

        read_only_fields = [
            "id",
            "fecha_creacion",
            "fecha_actualizacion"
        ]


class UsuarioSerializer(serializers.ModelSerializer):
    """
    Serializa la información administrativa y personal de los usuarios.
    """

    rol = RolSerializer(read_only=True)
    nombre_completo = serializers.ReadOnlyField()

    class Meta:
        model = Usuario
        fields = [
            "id",
            "numero_documento",
            "tipo_documento",
            "first_name",
            "segundo_nombre",
            "last_name",
            "segundo_apellido",
            "nombre_completo",
            "email",
            "telefono",
            "rol",
            "is_active",
            "fecha_creacion",
            "fecha_actualizacion"
        ]

        read_only_fields = fields


class UsuarioCreacionSerializer(serializers.ModelSerializer):
    """
    Valida la incorporación de usuarios a SICA.
    """

    class Meta:
        model = Usuario
        fields = [
            "numero_documento",
            "tipo_documento",
            "first_name",
            "segundo_nombre",
            "last_name",
            "segundo_apellido",
            "email",
            "telefono",
            "rol"
        ]

    def validate_numero_documento(self, value):
        value = value.strip()

        if not value:
            raise serializers.ValidationError(
                "El número de documento es obligatorio."
            )

        return value

    def validate_email(self, value):
        value = value.strip().lower()

        if not value:
            raise serializers.ValidationError(
                "El correo electrónico es obligatorio."
            )

        return value

    def create(self, validated_data):
        usuario = Usuario(**validated_data)

        # La contraseña se establecerá posteriormente.
        usuario.set_unusable_password()
        usuario.save()

        return usuario


class RecuperacionClaveSerializer(serializers.ModelSerializer):
    """
    Serializa la información de las solicitudes
    de recuperación de contraseña.
    """

    expirado = serializers.ReadOnlyField()

    class Meta:
        model = RecuperacionClave
        fields = [
            "id",
            "usuario",
            "fecha_creacion",
            "fecha_expiracion",
            "usado",
            "expirado"
        ]

        read_only_fields = fields
