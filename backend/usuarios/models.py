
from django.db import models
from django.contrib.auth.models import AbstractUser


class Rol(models.Model):
    nombre = models.CharField( max_length=50, unique=True, verbose_name="Nombre del rol")
    descripcion = models.TextField(blank=True, verbose_name="Descripción")
    estado = models.BooleanField(default=True,verbose_name="Estado")
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "roles"
        verbose_name = "Rol"
        verbose_name_plural = "Roles"
        ordering = ["nombre"]

    def __str__(self):
        return self.nombre


class Usuario(AbstractUser):
    # Identificación institucional
    tipo_documento = models.CharField( max_length=30,verbose_name="Tipo de documento")
    numero_documento = models.CharField(max_length=20,unique=True,verbose_name="Número de documento")
    # Información personal
    segundo_nombre = models.CharField(max_length=50,blank=True,verbose_name="Segundo nombre" )
    segundo_apellido = models.CharField(max_length=50,blank=True,verbose_name="Segundo apellido")
    telefono = models.CharField(max_length=20,blank=True,verbose_name="Teléfono")

    # Información propia de SICA
    rol = models.ForeignKey(Rol,on_delete=models.PROTECT,related_name="usuarios",verbose_name="Rol asignado")
    # Control de autenticación
    intentos_fallidos = models.PositiveSmallIntegerField(default=0)

    bloqueos_temporales = models.PositiveSmallIntegerField(
    default=0,
    verbose_name="Bloqueos temporales"
)

    bloqueado_permanente = models.BooleanField(
    default=False,
    verbose_name="Bloqueo permanente"
)

    fecha_bloqueo = models.DateTimeField(
    null=True,
    blank=True,
    verbose_name="Fecha de bloqueo"
)

    fecha_desbloqueo = models.DateTimeField(
    null=True,
    blank=True,
    verbose_name="Fecha de desbloqueo"
    )
    # Auditoría
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "numero_documento"
    REQUIRED_FIELDS = ["email", "first_name", "last_name"]

    class Meta:
        db_table = "usuarios"
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
        ordering = ["last_name", "first_name"]


    def __str__(self):
        return f"{self.get_full_name()} - {self.numero_documento}"

    @property
    def nombre_completo(self):
        return " ".join(
            parte for parte in [
                self.first_name,
                self.segundo_nombre,
                self.last_name,
                self.segundo_apellido
            ] if parte
        )


class RecuperacionClave(models.Model):

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE,related_name="recuperaciones_clave",verbose_name="Usuario")
    token_hash = models.CharField(max_length=64,unique=True )
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_expiracion = models.DateTimeField()
    usado = models.BooleanField(default=False)

    class Meta:
        db_table = "recuperacion_clave"
        verbose_name = "Recuperación de clave"
        verbose_name_plural = "Recuperaciones de clave"
        ordering = ["-fecha_creacion"]

    def __str__(self):
        return f"Recuperación de {self.usuario.numero_documento}"

    @property
    def expirado(self):
        from django.utils import timezone
        return timezone.now() >= self.fecha_expiracion
