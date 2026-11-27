from django.db import models
from ambientes.models import Ambiente_formacion


class CategoriaObjeto(models.Model):
    nombre_categoria = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Categoría de objeto"
        verbose_name_plural = "Categorías de objetos"
        ordering = ["nombre_categoria"]

    def __str__(self):
        return self.nombre_categoria


class TipoObjeto(models.Model):
    categoria = models.ForeignKey(
        CategoriaObjeto,
        on_delete=models.CASCADE,
        related_name="tipos",
    )
    nombre_tipo = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Tipo de objeto"
        verbose_name_plural = "Tipos de objetos"
        ordering = ["nombre_tipo"]

    def __str__(self):
        return self.nombre_tipo


class Elemento(models.Model):
    class EstadoElemento(models.TextChoices):
        DISPONIBLE = "Disponible", "Disponible"
        EN_USO = "En uso", "En uso"
        EN_MANTENIMIENTO = "En mantenimiento", "En mantenimiento"
        DADO_DE_BAJA = "Dado de baja", "Dado de baja"

    tipo_objeto = models.ForeignKey(
        TipoObjeto,
        on_delete=models.PROTECT,
        related_name="elementos",
    )
    ambientes = models.ManyToManyField(
        Ambiente_formacion,
        related_name="elementos",
        blank=True,
    )
    codigo_barras = models.CharField(max_length=100, unique=True)
    nombre_objeto = models.CharField(max_length=150)
    marca_ingreso = models.CharField(max_length=100, blank=True, null=True)
    fecha_ingreso = models.DateField()
    estado = models.CharField(
        max_length=30,
        choices=EstadoElemento.choices,
        default=EstadoElemento.DISPONIBLE,
    )
    vida_estimada_util = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        verbose_name = "Elemento"
        verbose_name_plural = "Elementos"
        ordering = ["-fecha_ingreso", "nombre_objeto"]

    def __str__(self):
        return f"{self.codigo_barras} - {self.nombre_objeto}"