from rest_framework import serializers
from ambientes.models import Ambiente_formacion
from .models import Categoria_Objeto, Tipo_objeto, Elemento


class CategoriaObjetoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria_Objeto
        fields = ["id", "nombre_categoria", "descripcion"]


class TipoObjetoSerializer(serializers.ModelSerializer):
    # Campo de solo lectura útil para mostrar el nombre en la tabla o detalle del frontend
    nombre_categoria = serializers.CharField(
        source="categoria.nombre_categoria",
        read_only=True,
    )

    class Meta:
        model = Tipo_objeto
        fields = [
            "id",
            "categoria",
            "nombre_categoria",
            "nombre_tipo",
            "descripcion",
        ]


class ElementoSerializer(serializers.ModelSerializer):
    # Campos legibles adicionales para el frontend
    nombre_tipo = serializers.CharField(
        source="tipo_objeto.nombre_tipo",
        read_only=True,
    )
    nombre_categoria = serializers.CharField(
        source="tipo_objeto.categoria.nombre_categoria",
        read_only=True,
    )
    ambientes = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Ambiente_formacion.objects.all(),
        required=False,
    )

    class Meta:
        model = Elemento
        fields = [
            "id",
            "tipo_objeto",
            "nombre_tipo",
            "nombre_categoria",
            "ambientes",
            "codigo_barras",
            "nombre_objeto",
            "marca_ingreso",
            "fecha_ingreso",
            "estado",
            "vida_estimada_util",
        ]

    def validate_codigo_barras(self, value):
        codigo = value.strip()
        if not codigo:
            raise serializers.ValidationError(
                "El código de barras no puede estar vacío."
            )
        return codigo


class ElementoEstadoSerializer(serializers.ModelSerializer):
    """Serializer específico para actualizar únicamente el estado de un elemento."""

    class Meta:
        model = Elemento
        fields = ["id", "estado"]

    def validate_estado(self, value):
        estado_limpio = value.strip()
        if not estado_limpio:
            raise serializers.ValidationError("El estado es obligatorio.")
        return estado_limpio