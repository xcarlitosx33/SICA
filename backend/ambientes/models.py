from django.db import models

class Centro_formacion(models.Model):
    nit = models.CharField(max_length=50, unique=True, verbose_name="NIT")
    nombre_centro = models.CharField(max_length=150)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=150)
    email = models.EmailField()
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre_centro


class Sedes_centro_Formacion(models.Model):
    centro_formacion = models.ForeignKey(Centro_formacion, on_delete=models.CASCADE)
    nombre_sede = models.CharField(max_length=100)
    direccion = models.CharField(max_length=150)

    def __str__(self):
        return self.nombre_sede


class Ambiente_formacion(models.Model):
    sede = models.ForeignKey(Sedes_centro_Formacion, on_delete=models.CASCADE)
    numero_ambiente = models.CharField(max_length=50)
    tipo_ambiente = models.CharField(max_length=100)
    estado = models.BooleanField(default=True)
    capacidad = models.IntegerField()

    def __str__(self):
        return f"Ambiente {self.numero_ambiente} - {self.sede.nombre_sede}"


