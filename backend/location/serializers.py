from rest_framework import serializers
from .models import State, District, SeismicData, WindData, TemperatureData

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'

class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = '__all__'

class SeismicSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeismicData
        fields = '__all__'

class WindSerializer(serializers.ModelSerializer):
    class Meta:
        model = WindData
        fields = '__all__'

class TemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemperatureData
        fields = '__all__'