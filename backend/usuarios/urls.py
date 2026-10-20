from django.urls import path
from .views import prueba_api, login, consultar_correo_recuperacion

urlpatterns = [
    path('prueba/', prueba_api, name='prueba_api'),
    path('login/', login, name='login'),
    path('recuperar/', consultar_correo_recuperacion, name='consultar_correo_recuperacion'),
]