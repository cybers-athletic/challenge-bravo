#Author: Daniel Ilaro da Silva

from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('calculater/', views.calculate, name='calculate')
]
