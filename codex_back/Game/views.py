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

class SingleGameTurnsViewSet(viewsets.ModelViewSet):
    queryset = Turn.objects.all()
    serializer_class = TurnSerializer
    def get_queryset(self):
        return Turn.objects.filter(gameid=int(self.kwargs['turns_pk'])).all()
