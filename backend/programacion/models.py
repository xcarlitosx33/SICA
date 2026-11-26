from django.db import models
from ambientes.models import Ambiente_formacion
from usuarios.models import Usuario

class Trimestre(models.Model):
    numero_trimestre = models.IntegerField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    year = models.IntegerField(verbose_name="Año")

    def __str__(self):
        return f"Trimestre {self.numero_trimestre} - {self.year}"

class Programacion(models.Model):
    trimestre = models.ForeignKey(Trimestre, on_delete=models.CASCADE)
    ambiente = models.ForeignKey(Ambiente_formacion, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, verbose_name="Instructor/Usuario asignado")
    
    programa_formacion = models.CharField(max_length=150)
    dias_formacion = models.CharField(max_length=100)
    grupo = models.CharField(max_length=50)
    jornada = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.programa_formacion} - Grupo {self.grupo}"
