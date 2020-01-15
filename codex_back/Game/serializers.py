from rest_framework import serializers

from Game.models import Game, Turn

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['name', 'game_id']

class TurnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turn
        fields = ['game_id', 'turn_number', 'turn_text']
