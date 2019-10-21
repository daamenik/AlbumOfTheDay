from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from ..models import Album
from .serializers import AlbumSerializer

# Create your views here.
class AlbumListView(ListAPIView):
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer


class AlbumDetailView(RetrieveAPIView):
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer