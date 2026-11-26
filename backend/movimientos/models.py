from django.db import models
from materiales.models import Elemento
from ambientes.models import Ambiente_formacion

class Movimiento(models.Model):
    elemento = models.ForeignKey(Elemento, on_delete=models.CASCADE)
    ambiente_origen = models.ForeignKey(Ambiente_formacion, related_name='movimientos_origen', on_delete=models.PROTECT)
    ambiente_destino = models.ForeignKey(Ambiente_formacion, related_name='movimientos_destino', on_delete=models.PROTECT)
    
    tipo_movimiento = models.CharField(max_length=100)
    fecha_movimiento = models.DateField()
    hora_movimiento = models.TimeField()
    estado_movimiento = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.tipo_movimiento} - {self.elemento.nombre_objeto}"
