from django.db import models


class Game(models.Model):
    name = models.CharField(max_length=200)
    game_id = models.IntegerField()
    first_fraction = models.CharField(max_length=20)
    second_fraction = models.CharField(max_length=20)
    # first_player = models.CharField(max_length=10)
    # second_player = models.CharField(max_length=10)
    # fp_hand = models.CharField(max_length=1000)
    # fp_deck = models.CharField(max_length=1000)
    # fp_discard = models.CharField(max_length=1000)
    # fp_float = models.Field(max_length)
    # sp_hand = models.CharField(max_length=1000)
    # sp_deck = models.CharField(max_length=1000)
    # sp_discard = models.CharField(max_length=1000)

class GameToTurn(model.Model):
    game_id = models.IntegerField()
    turn_id = models.IntegerField()

class Turn(model.Model):
    turn_id = models.IntegerField()
    last_turn = models.TextField(max_length=1000)