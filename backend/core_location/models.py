from django.db import models

class State(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class District(models.Model):
    name = models.CharField(max_length=100)
    state = models.ForeignKey(State, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class LocationData(models.Model):
    district = models.OneToOneField(District, on_delete=models.CASCADE)
    wind_speed = models.FloatField()
    seismic_zone = models.CharField(max_length=10)
    seismic_factor = models.FloatField()
    max_temp = models.FloatField()
    min_temp = models.FloatField()

    def __str__(self):
        return self.district.name