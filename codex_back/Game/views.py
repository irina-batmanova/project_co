from django.shortcuts import render
from rest_framework import viewsets

from Game.models import Game, Turn
from Game.serializers import GameSerializer, TurnSerializer


class GamesViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class TurnsViewSet(viewsets.ModelViewSet):
    queryset = Turn.objects.all()
    serializer_class = TurnSerializer
