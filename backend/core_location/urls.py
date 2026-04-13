from django.urls import path
from .views import *

urlpatterns = [
    path('states/', get_states),
    path('districts/', get_districts),
    path('location-data/', get_location_data),
]