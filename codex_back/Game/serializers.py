from rest_framework import serializers

from Game.models import Game, Turn

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['name', 'gameid']

class TurnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turn
        fields = ['gameid', 'turn_number', 'turn_text']
