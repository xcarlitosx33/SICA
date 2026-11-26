from django.db import models

class Rol(models.Model):
    nombre = models.CharField(max_length=50, unique=True)
    descripcion = models.TextField(blank=True, null=True, verbose_name="Descripción")
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre


class Usuario(models.Model):
    rol = models.ForeignKey(Rol, on_delete=models.PROTECT, null=True, verbose_name="Rol asignado")
    tipo_doc = models.CharField(max_length=50, verbose_name="Tipo de Documento")
    num_doc = models.CharField(max_length=20, unique=True, verbose_name="Número de Documento")
    nombre_p = models.CharField(max_length=50, verbose_name="Primer Nombre")
    nombre_s = models.CharField(max_length=50, blank=True, null=True, verbose_name="Segundo Nombre") 
    apellido_p = models.CharField(max_length=50, verbose_name="Primer Apellido")
    apellido_s = models.CharField(max_length=50, blank=True, null=True, verbose_name="Segundo Apellido")
    telefono = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(unique=True)
    genero = models.CharField(max_length=20)
    estado = models.BooleanField(default=True) 
    password = models.CharField(max_length=128, null=True, blank=True)
    intentos_fallidos = models.PositiveIntegerField(default=0)
    bloqueado = models.BooleanField(default=False)
    fecha_bloqueo = models.DateTimeField(null=True, blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.nombre_p} {self.apellido_p} - {self.num_doc}"


class RecuperacionClave(models.Model):
    usuario = models.ForeignKey(
        Usuario,
        on_delete=models.CASCADE,
        related_name='recuperaciones_clave'
    )
    token_hash = models.CharField(max_length=64, unique=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_expiracion = models.DateTimeField()
    usado = models.BooleanField(default=False)

    class Meta:
        db_table = 'recuperacion_clave'

    def __str__(self):
        return f"Recuperación de {self.usuario.num_doc}"
