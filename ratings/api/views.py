from django.shortcuts import render
from rest_framework import viewsets
from ..models import Album
from .serializers import AlbumSerializer

class AlbumViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AlbumSerializer
    queryset = Album.objects.all()