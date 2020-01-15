from django.db import models


class Game(models.Model):
    name = models.CharField(max_length=200)
    gameid = models.IntegerField()

class Turn(models.Model):
    gameid = models.IntegerField()
    turn_number = models.IntegerField()
    turn_text = models.TextField(max_length=10000)