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


class WindData(models.Model):
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    wind_speed = models.FloatField()


class SeismicData(models.Model):
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    zone = models.CharField(max_length=10)
    factor = models.FloatField()


class TemperatureData(models.Model):
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    min_temp = models.FloatField()
    max_temp = models.FloatField()
