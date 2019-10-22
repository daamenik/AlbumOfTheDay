from django.shortcuts import render
from rest_framework import viewsets, permissions
from ..models import Album
from .serializers import AlbumSerializer
from django.http import HttpResponse

class AlbumViewSet(viewsets.ModelViewSet):
	serializer_class = AlbumSerializer
	queryset = Album.objects.all()

	def get_permissions(self):
		if self.action == 'list' or self.action == 'retrieve' or self.action == 'create':
			permission_classes = [permissions.AllowAny]
		else:
			permission_classes = [permissions.IsAuthenticated]
		return [permission() for permission in permission_classes]
	
	# def perform_create(self, serializer):
	# 	serializer.save(submitter=self.request.user)