from rest_framework import serializers

from Game.models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['name']

class GameInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['name', 'game_id', 'turn']