from django.urls import path
from . import views

urlpatterns = [
    path('states/', views.get_states),
    path('districts/<int:state_id>/', views.get_districts),
]