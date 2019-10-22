from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from ..models import Album
from .serializers import AlbumSerializer

# class AlbumViewSet(viewsets.ModelViewSet):
#     """
#     A viewset for viewing and editing user instances.
#     """
#     serializer_class = AlbumSerializer
#     queryset = Album.objects.all()

class AlbumListView(ListAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (permissions.AllowAny, )


class AlbumDetailView(RetrieveAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (permissions.AllowAny, )


class AlbumCreateView(CreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (permissions.IsAuthenticated, )


class AlbumUpdateView(UpdateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (permissions.IsAuthenticated, )


class AlbumDeleteView(DestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (permissions.IsAuthenticated, )