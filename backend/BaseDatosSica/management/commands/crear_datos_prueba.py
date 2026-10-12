from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from BaseDatosSica.models import Rol, Usuario


class Command(BaseCommand):
    help = "Crea los datos de prueba iniciales de SICA"

    def handle(self, *args, **options):

    
        # ROLES
    

        roles = [
            {
                "nombre": "Instructor",
                "descripcion": "Realiza actividades operativas relacionadas con ambientes, movimientos y novedades.",
            },
            {
                "nombre": "Administrador de Edificio",
                "descripcion": "Atiende y gestiona las novedades reportadas en los ambientes de formación.",
            },
            {
                "nombre": "Director de Centro",
                "descripcion": "Revisa y aprueba o rechaza acciones que requieren autorización.",
            },
            {
                "nombre": "Coordinación Académica",
                "descripcion": "Gestiona la programación académica, trimestres y supervisión de ambientes.",
            },
        ]

        roles_creados = {}

        for datos in roles:
            rol, creado = Rol.objects.get_or_create(
                nombre=datos["nombre"],
                defaults={
                    "descripcion": datos["descripcion"],
                    "estado": True,
                },
            )

            roles_creados[rol.nombre] = rol

            if creado:
                self.stdout.write(
                    self.style.SUCCESS(f"Rol creado: {rol.nombre}")
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f"El rol ya existe: {rol.nombre}")
                )

    
        # USUARIOS DE PRUEBA
    

        password_prueba = make_password("Sica1234*")

        usuarios_prueba = [
            # INSTRUCTORES
            {
                "rol": "Instructor",
                "tipo_doc": "CC",
                "num_doc": "1000000001",
                "nombre_p": "Carlos",
                "nombre_s": "Andres",
                "apellido_p": "Moreno",
                "apellido_s": "Gomez",
                "telefono": "3000000001",
                "email": "instructor1@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Instructor",
                "tipo_doc": "CC",
                "num_doc": "1000000002",
                "nombre_p": "Laura",
                "nombre_s": "Sofia",
                "apellido_p": "Rodriguez",
                "apellido_s": "Perez",
                "telefono": "3000000002",
                "email": "instructor2@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Instructor",
                "tipo_doc": "CC",
                "num_doc": "1000000003",
                "nombre_p": "Juan",
                "nombre_s": "David",
                "apellido_p": "Martinez",
                "apellido_s": "Torres",
                "telefono": "3000000003",
                "email": "instructor3@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Instructor",
                "tipo_doc": "CC",
                "num_doc": "1000000004",
                "nombre_p": "Valentina",
                "nombre_s": "Maria",
                "apellido_p": "Lopez",
                "apellido_s": "Castro",
                "telefono": "3000000004",
                "email": "instructor4@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Instructor",
                "tipo_doc": "CC",
                "num_doc": "1000000005",
                "nombre_p": "Andres",
                "nombre_s": "Felipe",
                "apellido_p": "Hernandez",
                "apellido_s": "Ruiz",
                "telefono": "3000000005",
                "email": "instructor5@sica.test",
                "genero": "Masculino",
            },

            # ADMINISTRADORES DE EDIFICIO
            {
                "rol": "Administrador de Edificio",
                "tipo_doc": "CC",
                "num_doc": "1000000011",
                "nombre_p": "Miguel",
                "nombre_s": "Angel",
                "apellido_p": "Ramirez",
                "apellido_s": "Diaz",
                "telefono": "3000000011",
                "email": "adminedificio1@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Administrador de Edificio",
                "tipo_doc": "CC",
                "num_doc": "1000000012",
                "nombre_p": "Camila",
                "nombre_s": "Andrea",
                "apellido_p": "Vargas",
                "apellido_s": "Morales",
                "telefono": "3000000012",
                "email": "adminedificio2@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Administrador de Edificio",
                "tipo_doc": "CC",
                "num_doc": "1000000013",
                "nombre_p": "Sebastian",
                "nombre_s": "Jose",
                "apellido_p": "Gonzalez",
                "apellido_s": "Rojas",
                "telefono": "3000000013",
                "email": "adminedificio3@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Administrador de Edificio",
                "tipo_doc": "CC",
                "num_doc": "1000000014",
                "nombre_p": "Daniela",
                "nombre_s": "Paola",
                "apellido_p": "Sanchez",
                "apellido_s": "Mendoza",
                "telefono": "3000000014",
                "email": "adminedificio4@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Administrador de Edificio",
                "tipo_doc": "CC",
                "num_doc": "1000000015",
                "nombre_p": "Diego",
                "nombre_s": "Fernando",
                "apellido_p": "Cortes",
                "apellido_s": "Navarro",
                "telefono": "3000000015",
                "email": "adminedificio5@sica.test",
                "genero": "Masculino",
            },

            # DIRECTORES DE CENTRO
            {
                "rol": "Director de Centro",
                "tipo_doc": "CC",
                "num_doc": "1000000021",
                "nombre_p": "Ricardo",
                "nombre_s": "Antonio",
                "apellido_p": "Fernandez",
                "apellido_s": "Mora",
                "telefono": "3000000021",
                "email": "director1@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Director de Centro",
                "tipo_doc": "CC",
                "num_doc": "1000000022",
                "nombre_p": "Patricia",
                "nombre_s": "Elena",
                "apellido_p": "Jimenez",
                "apellido_s": "Silva",
                "telefono": "3000000022",
                "email": "director2@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Director de Centro",
                "tipo_doc": "CC",
                "num_doc": "1000000023",
                "nombre_p": "Fernando",
                "nombre_s": "Javier",
                "apellido_p": "Ortiz",
                "apellido_s": "Leon",
                "telefono": "3000000023",
                "email": "director3@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Director de Centro",
                "tipo_doc": "CC",
                "num_doc": "1000000024",
                "nombre_p": "Monica",
                "nombre_s": "Isabel",
                "apellido_p": "Rincon",
                "apellido_s": "Suarez",
                "telefono": "3000000024",
                "email": "director4@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Director de Centro",
                "tipo_doc": "CC",
                "num_doc": "1000000025",
                "nombre_p": "Alejandro",
                "nombre_s": "Luis",
                "apellido_p": "Pineda",
                "apellido_s": "Guzman",
                "telefono": "3000000025",
                "email": "director5@sica.test",
                "genero": "Masculino",
            },

            # COORDINACION ACADEMICA
            {
                "rol": "Coordinación Académica",
                "tipo_doc": "CC",
                "num_doc": "1000000031",
                "nombre_p": "Natalia",
                "nombre_s": "Andrea",
                "apellido_p": "Restrepo",
                "apellido_s": "Velez",
                "telefono": "3000000031",
                "email": "coordinacion1@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Coordinación Académica",
                "tipo_doc": "CC",
                "num_doc": "1000000032",
                "nombre_p": "Jorge",
                "nombre_s": "Enrique",
                "apellido_p": "Mejia",
                "apellido_s": "Cardona",
                "telefono": "3000000032",
                "email": "coordinacion2@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Coordinación Académica",
                "tipo_doc": "CC",
                "num_doc": "1000000033",
                "nombre_p": "Diana",
                "nombre_s": "Marcela",
                "apellido_p": "Arango",
                "apellido_s": "Giraldo",
                "telefono": "3000000033",
                "email": "coordinacion3@sica.test",
                "genero": "Femenino",
            },
            {
                "rol": "Coordinación Académica",
                "tipo_doc": "CC",
                "num_doc": "1000000034",
                "nombre_p": "Mauricio",
                "nombre_s": "Alejandro",
                "apellido_p": "Salazar",
                "apellido_s": "Quintero",
                "telefono": "3000000034",
                "email": "coordinacion4@sica.test",
                "genero": "Masculino",
            },
            {
                "rol": "Coordinación Académica",
                "tipo_doc": "CC",
                "num_doc": "1000000035",
                "nombre_p": "Sandra",
                "nombre_s": "Milena",
                "apellido_p": "Bermudez",
                "apellido_s": "Cabrera",
                "telefono": "3000000035",
                "email": "coordinacion5@sica.test",
                "genero": "Femenino",
            },
        ]

    
        # CREACION DE USUARIOS
    
        for datos in usuarios_prueba:
            rol = roles_creados[datos["rol"]]

            usuario, creado = Usuario.objects.get_or_create(
                num_doc=datos["num_doc"],
                defaults={
                    "rol": rol,
                    "tipo_doc": datos["tipo_doc"],
                    "nombre_p": datos["nombre_p"],
                    "nombre_s": datos["nombre_s"],
                    "apellido_p": datos["apellido_p"],
                    "apellido_s": datos["apellido_s"],
                    "telefono": datos["telefono"],
                    "email": datos["email"],
                    "genero": datos["genero"],
                    "estado": True,
                    "password": password_prueba,
                    "intentos_fallidos": 0,
                    "bloqueado": False,
                },
            )

            if creado:
                self.stdout.write(
                    self.style.SUCCESS(
                        f"Usuario creado: {usuario.num_doc} - "
                        f"{usuario.nombre_p} {usuario.apellido_p} "
                        f"({rol.nombre})"
                    )
                )
            else:
                self.stdout.write(
                    self.style.WARNING(
                        f"El usuario ya existe: {usuario.num_doc}"
                    )
                )

        self.stdout.write(
            self.style.SUCCESS(
                "Proceso de datos de prueba terminado correctamente."
            )
        )