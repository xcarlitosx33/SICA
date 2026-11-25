from django.db import models
from materiales.models import Elemento

class Novedad(models.Model):
    elemento = models.ForeignKey(Elemento, on_delete=models.CASCADE)
    
    titulo_novedad = models.CharField(max_length=150)
    tipo_novedad = models.CharField(max_length=100)
    descripcion_novedad = models.TextField()
    estado_novedad = models.CharField(max_length=50)
    fecha_novedad = models.DateField()
  
    evidencia_novedad = models.FileField(upload_to='novedades_evidencias/', blank=True, null=True)

    def __str__(self):
        return f"Novedad: {self.titulo_novedad} - {self.elemento.nombre_objeto}"
