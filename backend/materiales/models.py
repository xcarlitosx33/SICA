from django.db import models
from ambientes.models import Ambiente_formacion

class Categoria_Objeto(models.Model):
    nombre_categoria = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre_categoria
    
class Tipo_objeto(models.Model):
    categoria = models.ForeignKey(Categoria_Objeto, on_delete=models.CASCADE)
    nombre_tipo = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre_tipo

class Elemento(models.Model):
    tipo_objeto = models.ForeignKey(Tipo_objeto, on_delete=models.PROTECT)

    ambientes = models.ManyToManyField(Ambiente_formacion, blank=True)
    
    codigo_barras = models.CharField(max_length=100, unique=True)
    nombre_objeto = models.CharField(max_length=150)
    marca_ingreso = models.CharField(max_length=100, blank=True, null=True)
    fecha_ingreso = models.DateField()
    estado = models.CharField(max_length=50)
    vida_estimada_util = models.CharField(max_length=50, blank=True, null=True)


    def __str__(self):
        return self.nombre_objeto