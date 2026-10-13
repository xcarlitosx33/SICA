from django.urls import path
from .views import prueba_api, login

urlpatterns = [
    path('prueba/', prueba_api, name='prueba_api'),
    path('login/', login, name='login'),
]