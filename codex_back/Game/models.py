from django.db import models


class Game(models.Model):
    name = models.CharField(max_length=200)
    game_id = models.IntegerField()

class Turn(models.Model):
    game_id = models.IntegerField()
    turn_number = models.IntegerField()
    turn_text = models.TextField(max_length=10000)