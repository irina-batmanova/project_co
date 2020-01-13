from django.shortcuts import render
from rest_framework import viewsets

from Game.models import Game
from Game.serializers import GameSerializer


class GamesViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    