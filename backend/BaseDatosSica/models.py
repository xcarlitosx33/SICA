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
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.nombre_p} {self.apellido_p} - {self.num_doc}"

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