from django.shortcuts import render
from rest_framework import viewsets, permissions, generics
from ..models import Album, Rating, User
from .serializers import AlbumSerializer, RatingSerializer, UserSerializer
from django.http import HttpResponse

class AlbumViewSet(viewsets.ModelViewSet):
	serializer_class = AlbumSerializer
	queryset = Album.objects.all()
	permission_classes = (permissions.AllowAny,)

	# def get_permissions(self):
	# 	if self.action == 'list' or self.action == 'retrieve' or self.action == 'create':
	# 		permission_classes = [permissions.AllowAny]
	# 	else:
	# 		permission_classes = [permissions.IsAuthenticated]
	# 	return [permission() for permission in permission_classes]
	
	# def perform_create(self, serializer):
	# 	serializer.save(submitter=self.request.user)

class RatingViewSet(viewsets.ModelViewSet):
	serializer_class = RatingSerializer
	queryset = Rating.objects.all()
	permission_classes = (permissions.AllowAny,)

class UserListCreateAPI(generics.ListCreateAPIView):
	serializer_class = UserSerializer
	queryset = User.objects.all()
	permission_classes = [permissions.AllowAny]

class UserRetrieveAPI(generics.RetrieveAPIView):
	serializer_class = UserSerializer
	queryset = User.objects.all()
	permission_classes = [permissions.AllowAny]